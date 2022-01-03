import React from "react";
import Auth from "./Navbar/Auth";
import Navigates from "./Navbar/Navigates";
import { Routes, Route } from "react-router-dom";
import Search from "./Navbar/Search";
import Library from "./Navbar/LibraryTop";

const Navbar = () => {
  return (
    <div className="flex justify-between h-[64px] px-[32px] items-center">
      <div className="flex items-center">
        <Navigates />
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/library" element={<Library />} />
          <Route path="/library/playlist" element={<Library />} />
          <Route path="/library/podcasts" element={<Library />} />
          <Route path="/library/artist" element={<Library />} />
          <Route path="/library/albums" element={<Library />} />
        </Routes>
      </div>
      <Auth />
    </div>
  );
};

export default Navbar;
