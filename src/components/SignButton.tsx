import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import Menu from "./Menu";

const SignButton: React.FC = () => {
  const { data: sessionData } = useSession();
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {!sessionData ? (
        <button
          className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
          onClick={sessionData ? () => signOut() : () => signIn()}
        >
          Sign In
        </button>
      ) : (
        <Menu />
      )}
    </div>
  );
};

export default SignButton;
