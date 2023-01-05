import React from "react";
import Avatar from "./Avatar";

interface IMessage {
  id: string;
  senderName?: string;
  senderEmail?: string;
  senderImg?: string;
  content: string;
}
interface Props {
  selfMessage?: boolean;
  data: IMessage;
}

const Message: React.FC<Props> = ({ selfMessage, data }) => {
  return (
    <div
      className={`mt-4 ml-5 flex min-h-[80px] max-w-[95%] items-center justify-start gap-2 rounded-xl ${
        selfMessage ? "bg-[#3a0ca3]" : "bg-[#240046]"
      } p-3`}
    >
      <div className="h-full min-w-[40px] ">
        <Avatar alt={data.senderName} img={data.senderImg} />
      </div>

      <div className="flex max-h-full max-w-[80%] flex-col">
        <p className="text-lg font-bold text-white">{data.senderName}</p>
        <p
          className="break max-w-[100%] text-base text-white"
          style={{ lineBreak: "normal" }}
        >
          {data.content}
        </p>
      </div>
    </div>
  );
};

export default Message;
