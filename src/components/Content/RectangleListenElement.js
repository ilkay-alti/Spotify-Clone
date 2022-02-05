import React from "react";
import { NavLink } from "react-router-dom";

const RectangleListenElement = () => {
  return (
    <div>
      <NavLink to={"/library/playlist"}>
        <div className="bg-[rgb(255,255,255,.1)] hover:bg-[rgb(255,255,255,.3)] rounded-md h-[80px] min-w-[290px] max-w-[365px] ">
          <div className="flex">
            <img
              src="https://i.scdn.co/image/ab67616d0000b2739cddf735c8cd47802cf9eba3 "
              alt="a"
              className="w-[80px]"
            />

            <div className=" p-[16px] font-bold leading-[24px]">
              <p>Anka:The Return Of The Phoenix</p>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default RectangleListenElement;
