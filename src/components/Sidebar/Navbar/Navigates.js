import React from "react";
import Back from "../../../icon/Back.svg";
import Next from "../../../icon/Next.svg";
import { useNavigate } from "react-router";
const Navigation = () => {
  //! Navigate -1 +1
  let navigate = useNavigate();
  return (
    <>
      <nav className="flex gap-x-[16px] ">
        <button
          onClick={() => navigate(-1)}
          className="bg-black rounded-full h-[32px] w-[32px] bg-opacity-40 "
        >
          <img src={Back} alt="a" className="w-[25px] m-auto" />
        </button>
        <button
          onClick={() => navigate(1)}
          className="bg-black rounded-full h-[32px] w-[32px]  bg-opacity-40 "
        >
          <img src={Next} alt="a" className="w-[25px] m-auto" />
        </button>
      </nav>
    </>
  );
};

export default Navigation;
