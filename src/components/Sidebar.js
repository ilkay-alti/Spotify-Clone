import React from "react";
import Logo from "../icon/Logo.svg";
import DowndloadApp from "./Sidebar/DowndloadApp";
import Main from "./Sidebar/Main";
import Middle from "./Sidebar/Middle";
import PlayList from "./Sidebar/PlayList";

const Sidebar = () => {
  return (
    <div className="w-[241px]  text-link bg-black flex-shrink-0">
      <img
        src={Logo}
        alt="a"
        className="mt-6 mb-[26px] px-6 h-[40px] text-link"
      />

      <Main />
      <Middle />
      <PlayList />
      <DowndloadApp />
    </div>
  );
};

export default Sidebar;
