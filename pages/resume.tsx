import React from "react";

const resume = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-12">
      <div className="flex w-full max-w-[1200px] flex-col items-center justify-start gap-24 px-24 pb-32">
        <header className="flex w-full flex-col items-start justify-start">
          <h1 className="text-3xl font-semibold">Resume</h1>
          <div className="mt-2 h-[2px] w-full bg-gradient-to-r from-gray-300"></div>
        </header>
      </div>
    </main>
  );
};

export default resume;
