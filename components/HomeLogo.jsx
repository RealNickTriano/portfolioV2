import React from "react";

const HomeLogo = () => {
  return (
    <div
      className="flex items-center justify-center gap-2 hover:cursor-pointer"
      onClick={() => console.log("HomeLogo")}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500">
        <h1 className="text-3xl font-bold text-white">N</h1>
      </div>
      <h1 className="text-2xl font-semibold">Nick</h1>
      <h1 className="text-2xl font-normal">Triano</h1>
    </div>
  );
};

export default HomeLogo;
