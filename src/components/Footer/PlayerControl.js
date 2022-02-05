import React from "react";
import PlayersBack from "../../icon/PlayersBack.svg";
import PlayersNext from "../../icon/PlayersNext.svg";
import PlayersRandom from "../../icon/PlayersRandom.svg";
import PlayersPlay from "../../icon/PlayersPlay.svg";
import PlayersLoop from "../../icon/PlayersLoop.svg";

const PlayerControl = () => {
  return (
    <div className="flex items-center gap-x-2">
      <button className="w-[16px] h-[16px]">
        <img src={PlayersRandom} alt="a" className="w-[12px] h-[12px]" />
      </button>

      <button className="w-[16px] h-[16px]">
        <img src={PlayersBack} alt="a" className="w-[12px] h-[12px]" />
      </button>
      <button className="w-[16px] h-[16px]">
        <img src={PlayersPlay} alt="a" className="w-[12px] h-[12px]" />
      </button>
      <button className="w-[16px] h-[16px]">
        <img src={PlayersNext} alt="a" className="w-[12px] h-[12px]" />
      </button>
      <button className="w-[16px] h-[16px]">
        <img src={PlayersLoop} alt="a" className="w-[12px] h-[12px]" />
      </button>
    </div>
  );
};

export default PlayerControl;
