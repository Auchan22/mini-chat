import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import { trpc } from "../utils/trpc";
import InputBar from "./InputBar";
import MessageList from "./MessageList";
import { io } from "socket.io-client";

let socket;

const Chat = () => {
  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    // We just call it because we don't need anything else out of it
    await fetch("/api/socket");

    socket = io();
  };

  const { data } = useSession();

  const createMessage = trpc.message.createMessage.useMutation();

  const [inputValue, setInputValue] = useState<string>("");
  const [confirmation, setConfirmation] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue.length === 0) {
      alert("El mensaje debe contener al menos una letra");
      return;
    }

    try {
      const createdMessage = await createMessage.mutateAsync({
        content: inputValue,
        senderEmail: data?.user?.email,
        senderName: data?.user?.name,
        senderImg: data?.user?.image,
      });
      setConfirmation(createMessage);
      setInputValue("");
      socket.emit("mensajeCreado");
    } catch (error) {
      setConfirmation(createMessage);
      console.log(error);
    }
  };

  return (
    <div className=" relative  min-h-[80vh] w-full justify-end rounded-xl bg-slate-50 px-4 md:w-[40vw]">
      <MessageList />
      <InputBar
        handleChange={handleChange}
        inputValue={inputValue}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Chat;
