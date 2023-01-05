import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";
import Avatar from "./Avatar";

const Menu: React.FC = () => {
  const [hover, setHover] = useState(false);
  const { data } = useSession();
  return (
    <div className="menu" onClick={() => setHover(!hover)}>
      <div className="flex items-center gap-3">
        <p className="text-lg font-bold text-white">{data?.user?.name}</p>
        <Avatar alt={`${data?.user?.name}`} img={`${data?.user?.image}`} />
      </div>

      <div className={`dropdown-menu ${hover ? "hovered" : null}`}>
        <button
          className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Menu;
