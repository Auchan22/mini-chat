import React from "react";
import Message from "./Message";

import { trpc } from "../utils/trpc";

const MessageList: React.FC = () => {
  const messages = trpc.message.getAllMessages.useQuery();
  return (
    <div
      className="message-list my-3 flex max-h-[calc(100vh-35vh)] min-h-[calc(100vh-35vh)] flex-col overflow-auto rounded-2xl bg-[#e5b3fe] pr-2 pb-3 "
      style={{ boxShadow: "inset 0px -26px 40px -22px rgba(0,0,0,0.18)" }}
    >
      <Message />
      <Message />
      <Message />
      <Message selfMessage />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default MessageList;
