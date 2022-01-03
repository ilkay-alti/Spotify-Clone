import React from "react";

import LastListen from ".././components/content/LastListen";

const Home = () => {
  return (
    <div className="px-[16px] py-[24px]">
      <h2 className="font-extrabold text-[32px] leading-[36px] tracking-[-.04em] mb-[19px]">
        Good evening
      </h2>
      <div class="grid grid-cols-4 gap-4">
        <LastListen />
        <LastListen />
        <LastListen />
        <LastListen />
        <LastListen />
        <LastListen />
        <LastListen />
        <LastListen />
      </div>
    </div>
  );
};

export default Home;
