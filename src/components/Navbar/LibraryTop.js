import React from "react";
import { NavLink } from "react-router-dom";

const Library = () => {
  return (
    <>
      <nav>
        <ul className="flex ">
          <li>
            <NavLink
              to={"/library/playlist"}
              className="  flex items-center  h-[40px] px-[16px] rounded-md hover:text-white"
            >
              Playlist
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/library/podcasts"}
              className=" flex items-center  h-[40px] px-[16px]  rounded-md  hover:text-white"
            >
              Podcasts
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/library/artist"}
              className=" flex items-center  h-[40px] px-[16px] rounded-md hover:text-white"
            >
              Artist
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/library/albums"}
              className=" flex items-center  h-[40px] px-[16px]  rounded-md  hover:text-white"
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
