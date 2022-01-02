import React from "react";

const search = () => {
  return (
    <>
      <form className="px-[0px]">
        <input
          type="text"
          name="search"
          placeholder="Artist,songs,or podcast"
          className="text-black rounded-[500px]
        h-[40px]
        min-w-[364px]
        py-[6px]
        px-[48px]
        bg-no-repeat
        bg-left
        Search
        "
        />
      </form>
    </>
  );
};

export default search;
