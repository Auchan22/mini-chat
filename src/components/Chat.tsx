import React, { useState, useEffect } from "react";
import { trpc } from "../utils/trpc";
import InputBar from "./InputBar";
import MessageList from "./MessageList";
import type { Socket } from "socket.io-client";
import { io } from "socket.io-client";

let socket: Socket;

const Chat = () => {
  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    // We just call it because we don't need anything else out of it
    await fetch("/api/socket");

    socket = io("/api/fetch");
  };

  const createMessage = trpc.message.createMessage.useMutation();

  const [inputValue, setInputValue] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
