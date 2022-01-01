import React from "react";

const PlayList = () => {
  return (
    <nav className="mx-6 py-[8px]  h-[455px]  flex-auto overflow-y-scroll border-t-[1px] border-opacity-20">
      <ul>
        {new Array(30).fill(
          <li>
            <a
              href="#"
              className="text-sm text-link flex h-8 items-center hover:text-white"
            >
              asd
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default PlayList;
