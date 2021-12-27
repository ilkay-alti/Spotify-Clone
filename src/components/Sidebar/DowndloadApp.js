import React from "react";
import Download from "../../icon/Download.svg";
const DowndloadApp = () => {
  return (
    <div className="flex mt-2 mx-[23px] gap-x-6">
      <img src={Download} alt="a" className="w-[24px] h-[24px]" />
      Install App
    </div>
  );
};

export default DowndloadApp;
