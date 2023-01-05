import React from "react";
import SignButton from "./SignButton";

const Navbar: React.FC = () => {
  return (
    <nav className=" flex h-20 w-[100%] items-center justify-between bg-[#6411ad] p-3">
      {" "}
      <h1 className="text-3xl font-extrabold tracking-tight text-white ">
        <span className="text-[hsl(280,100%,70%)]">Mini Chat</span>
      </h1>
      <div>
        <SignButton />
      </div>
    </nav>
  );
};

export default Navbar;
