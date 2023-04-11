import React from "react";

const Projects = () => {
  return (
    <div className="w-full max-w-[1200px] px-24">
      <div className="flex flex-col items-start justify-center gap-2">
        <h1 className="text-3xl font-medium">Projects</h1>
        <div className="relative h-[2px] w-[107px] bg-gray-300">
          <div className="absolute left-6 top-0 h-[2px] w-[50%] bg-blue-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
