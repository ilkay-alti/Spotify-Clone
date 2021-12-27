import React from "react";
import { NavLink } from "react-router-dom";
import Plush from "../../icon/Plush.svg";
import Heart from "../../icon/Heart.svg";
import Episode from "../../icon/Episode.svg";
const Middle = () => {
  return (
    <>
      <nav className="px-[8px] mb-[24px]">
        <ul className="flex flex-col">
          <li>
            <NavLink
              to={"/createplaylist"}
              className=" gap-x-[16px] flex items-center  h-[40px] px-[16px] rounded-md hover:text-white hover:opacity-100 opacity-70"
            >
              <span>
                <div className="w-[24px] h-[24px] bg-link  flex justify-center">
                  <img src={Plush} alt="a" className="w-[12px]" />
                </div>
              </span>
              Create Playlist
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="bg-acitve text-white"
              to={"/likedsong"}
              className=" bg-gradi  gap-x-[16px] flex items-center h-[40px] px-[16px]  rounded-md hover:text-white hover:opacity-100 opacity-70"
            >
              <span>
                <div className="w-[24px] h-[24px] flex justify-center bg-gradient-to-br from-purple-900 to-blue-500">
                  <img src={Heart} alt="a" className="w-[12px]" />
                </div>
              </span>
              Liked Songs
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="bg-acitve text-white"
              to={"/episodes"}
              className="gap-x-[16px] flex items-center  h-[40px] px-[16px] rounded-md hover:text-white hover:opacity-100 opacity-70 group"
            >
              <span>
                <div className="w-[24px] h-[24px] bg-[#006450] flex justify-center ">
                  <img src={Episode} alt="a" className="w-[12px]" />
                </div>
              </span>
              Your Episodes
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Middle;
