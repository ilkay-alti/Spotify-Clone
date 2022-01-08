import { NavLink } from "react-router-dom";
import React from "react";
import CardListenItem from "./CardListenItem";

const CardListen = () => {
  return (
    <>
      <div className="mb-[16px]">
        <div className=" flex justify-between leading-[36px] tracking-[-.04em] mb-[19px] ">
          <NavLink
            to={"/library/playlist"}
            className=" font-bold text-[28px] hover:underline"
          >
            Episodes for you
          </NavLink>

          <NavLink
            to={"/library/playlist"}
            className="text-[#B3B3B3] font-black text-[13px] hover:underline"
          >
            SEE ALL
          </NavLink>
        </div>
        <div class="grid grid-cols-7 gap-x-2 ">
          <CardListenItem />
          <CardListenItem />
          <CardListenItem />
          <CardListenItem />
          <CardListenItem />
          <CardListenItem />
          <CardListenItem />
        </div>
      </div>
    </>
  );
};

export default CardListen;
