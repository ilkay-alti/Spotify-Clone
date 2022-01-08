import React from "react";
import { NavLink } from "react-router-dom";

const CardListenItem = () => {
  return (
    <>
      <NavLink to={"/library/?id"}>
        <div className="bg-[#181818] hover:bg-[#a7a7a71a] rounded-md h-[277px] w-[199px] p-[16px]">
          <div>
            <img
              src="https://i.scdn.co/image/ab67616d0000b2739cddf735c8cd47802cf9eba3 "
              alt="a"
              className="pb-[16px] w-[170] h-[170]"
            />

            <div className=" whitespace-nowrap font-bold leading-[24px]">
              <p>YENI BASLANGICLA...</p>
              <div className="mt-[4px] text-xs text-[#b3b3b3] ] ">
                Jan 5 - 120 MIN
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default CardListenItem;
