import React from "react";
import Auth from "./Sidebar/Navbar/Auth";
import Navigates from "./Sidebar/Navbar/Navigates";

const Navbar = () => {
  return (
    <div className="flex justify-between h-[64px] px-[32px] items-center">
      <Navigates />
      <Auth />
    </div>
  );
};

export default Navbar;
