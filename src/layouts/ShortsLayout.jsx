import React from "react";
import Shortcard from "../ShortCard/Shortcard";

const ShortsLayout = () => {
  return (
    <div className="flex flex-col items-center w-full h-full bg-black text-white">
      <div className="w-full p-5 text-center bg-gray-900 border-b border-gray-700"></div>
      <Shortcard />
    </div>
  );
};

export default ShortsLayout;
