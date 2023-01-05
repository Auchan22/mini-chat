import React from "react";

import { AiOutlineSend } from "react-icons/ai";

interface Props {
  inputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const InputBar: React.FC<Props> = ({
  inputValue,
  handleChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="absolute bottom-0 my-3 flex h-12 w-[95%] justify-around gap-5 px-2">
        <input
          placeholder="Ingrese su mensaje..."
          className="color w-[80%] rounded-xl border-2 border-black bg-[#ebc2ff] px-4 placeholder-[#403d39] focus:shadow-lg focus:outline-2 "
          onChange={handleChange}
          value={inputValue}
        />
        <button className="shadow-[0px 0px 40px -1px rgba(0,0,0,0.67)] sm: flex h-12 w-12 items-center justify-center rounded-full bg-[#6247aa] transition md:hover:scale-125">
          <AiOutlineSend size={30} color="#fff" />
        </button>
      </div>
    </form>
  );
};

export default InputBar;
