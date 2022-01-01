import React from "react";
import Auth from "./Sidebar/Navbar/Auth";
import Navigates from "./Sidebar/Navbar/Navigates";
import { Routes, Route } from "react-router-dom";
import Search from "./Sidebar/Navbar/Search";
import Library from "./Sidebar/Navbar/Library";

const Navbar = () => {
  return (
    <div className="flex justify-between h-[64px] px-[32px] items-center">
      <Navigates />
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/library" element={<Library />} />
      </Routes>
      <Auth />
    </div>
  );
};

export default Navbar;
