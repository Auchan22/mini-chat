import React from "react";
import InputBar from "./InputBar";
import Message from "./Message";

const Chat = () => {
  return (
    <div className=" relative  min-h-[80vh] w-full justify-end rounded-xl bg-slate-50 px-4 md:w-[40vw]">
      <div
        className="message-list my-3 flex max-h-[calc(100vh-35vh)] min-h-[calc(100vh-35vh)] flex-col overflow-auto rounded-2xl bg-[#e5b3fe] pb-3 "
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
      <InputBar />
    </div>
  );
};

export default Chat;
