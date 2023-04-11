import React from "react";
import PillButton from "./PillButton";

const HeroDescription = () => {
  return (
    <div className="flex w-[60%] flex-col items-start justify-center gap-4">
      <h1 className="text-lg text-zinc-500">Software Engineer</h1>
      <h1 className="text-5xl font-semibold">Nicholas Triano</h1>
      <p className="text-md leading-7 text-zinc-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        inventore alias tempore architecto tempora a dicta consectetur. Minus id
        quibusdam, quo aliquid illum mollitia laboriosam, totam sed labore sunt
        minima!
      </p>
      <div className="flex items-center justify-center gap-4">
        <PillButton name={"Resume"} />
        <PillButton name={"Contact"} />
      </div>
    </div>
  );
};

export default HeroDescription;
