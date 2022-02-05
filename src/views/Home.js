import React from "react";
import CardListen from "../components/Content/CardListen";

import RectangleListen from "../components/Content/RectangleListen";

const Home = () => {
  return (
    <>
      <div className="px-[16px] py-[24px]   ">
        <RectangleListen />
        <CardListen />
        <CardListen />
        <CardListen />
        <CardListen />
        <CardListen />
        <CardListen />
        <CardListen />
      </div>
    </>
  );
};

export default Home;
