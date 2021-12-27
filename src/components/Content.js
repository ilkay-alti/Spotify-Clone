import React from "react";
import Home from "../views/Home";
import Library from "../views/Library";
import Search from "../views/Search";
import CreatePlayList from "../views/CreatePlaylist";
import Episodes from "../views/Episodes";
import LikedSong from "../views/LikedSong";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";

const Content = () => {
  return (
    <div className="flex flex-col w-full">
      <Navbar />

      <div className="bg-red-700 flex-auto ">
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/search" element={<Search />} />
            <Route path="/createplaylist" element={<CreatePlayList />} />
            <Route path="/likedsong" element={<LikedSong />} />
            <Route path="/episodes" element={<Episodes />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Content;
