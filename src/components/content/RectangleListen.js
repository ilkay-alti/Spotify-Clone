import React from "react";
import RectangleListenElement from "./RectangleListenElement";

const RectangleListen = () => {
  return (
    <>
      <div className="mb-[16px]">
        <h2 className="font-extrabold text-[32px] leading-[36px] tracking-[-.04em] mb-[19px]">
          Good evening
        </h2>
        <div class="grid grid-cols-4 gap-4">
          <RectangleListenElement />
          <RectangleListenElement />
          <RectangleListenElement />
          <RectangleListenElement />
          <RectangleListenElement />
          <RectangleListenElement />
          <RectangleListenElement />
          <RectangleListenElement />
        </div>
      </div>
    </>
  );
};

export default RectangleListen;
