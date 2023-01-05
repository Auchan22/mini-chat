import React from "react";
import Avatar from "./Avatar";

interface Props {
  selfMessage?: boolean;
}

const Message: React.FC<Props> = ({ selfMessage }) => {
  return (
    <div
      className={`mt-4 ml-5 flex max-w-[95%] items-center justify-start gap-2 rounded-xl ${
        selfMessage ? "bg-[#3a0ca3]" : "bg-[#240046]"
      } p-3`}
    >
      <div className="h-full min-w-[40px] ">
        <Avatar alt="Foto" img="https://via.placeholder.com/600/92c952" />
      </div>

      <div className="flex flex-col">
        <p className="text-lg font-bold text-white">Juan</p>
        <p className="text-base  text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
          accusamus corrupti earum possimus quos. Reprehenderit vel doloribus,
          repudiandae eos et in dicta, tempore mollitia pariatur esse quod,
          nostrum molestiae. Voluptate.
        </p>
      </div>
    </div>
  );
};

export default Message;
