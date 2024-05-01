import React from "react";
import { LuPopcorn } from "react-icons/lu";

const Loading = () => {
  return (
    <div className="bg-black gap-5 text-white min-h-screen flex items-center justify-center">
      <LuPopcorn size="35" />
      <div className="text-3xl font-bold">Loading...</div>
    </div>
  );
};

export default Loading;
