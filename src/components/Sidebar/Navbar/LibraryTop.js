import React from "react";
import { NavLink } from "react-router-dom";

const Library = () => {
  return (
    <>
      <nav>
        <ul className="flex ">
          <li>
            <NavLink
              to={"/playlist"}
              className="  flex items-center  h-[40px] px-[16px]  hover:text-white"
            >
              Playlist
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/podcasts"}
              className=" flex items-center  h-[40px] px-[16px]    hover:text-white"
            >
              Podcasts
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/artist"}
              className=" flex items-center  h-[40px] px-[16px]  hover:text-white"
            >
              Artist
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/albums"}
              className=" flex items-center  h-[40px] px-[16px]    hover:text-white"
            >
              Albums
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Library;
