import React, { useEffect, useState } from "react";
import Message from "./Message";

import { trpc } from "../utils/trpc";
import { useSession } from "next-auth/react";

import { io } from "socket.io-client";

let socket;

const MessageList: React.FC = () => {
  const { data, refetch } = trpc.message.getAllMessages.useQuery();
  const [messages, setMessages] = useState(data);

  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    // We just call it because we don't need anything else out of it
    await fetch("/api/socket");

    socket = io();

    socket.on("recibiendoMensaje", () => {
      refetch();
    });
  };
  const { data: sessionData } = useSession();

  return (
    <div
      className="message-list my-3 flex max-h-[calc(100vh-35vh)] min-h-[calc(100vh-35vh)] flex-col overflow-auto overflow-x-hidden rounded-2xl bg-[#e5b3fe] pr-2 pb-3 "
      style={{ boxShadow: "inset 0px -26px 40px -22px rgba(0,0,0,0.18)" }}
    >
      {data?.map((m) => (
        <Message
          key={m.id}
          data={m}
          selfMessage={sessionData?.user?.email === m.senderEmail}
        />
      ))}
    </div>
  );
};

export default MessageList;
