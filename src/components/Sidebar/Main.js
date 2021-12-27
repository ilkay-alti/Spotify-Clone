import React from "react";
import { NavLink } from "react-router-dom";
import Home from "../../icon/Home.svg";
import Library from "../../icon/Library.svg";
import Search from "../../icon/Search.svg";
const Main = () => {
  return (
    <div className="main">
      <nav className="px-[8px] mb-[24px]">
        <ul className="flex flex-col">
          <li>
            <NavLink
              to={"/"}
              className=" gap-x-[16px] flex items-center  h-[40px] px-[16px] rounded-md   hover:text-white"
            >
              <span>
                <img src={Home} alt="a" className="w-[24px] " />
              </span>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/search"}
              className="gap-x-[16px] flex items-center  h-[40px] px-[16px]  rounded-md    hover:text-white"
            >
              <span>
                <img src={Search} alt="a" className="w-[24px]" />
              </span>
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/library"}
              className="gap-x-[16px] flex items-center  h-[40px] px-[16px] rounded-md    hover:text-white"
            >
              <span>
                <img src={Library} alt="a" className="w-[24px]" />
              </span>
              Your Library
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Main;
