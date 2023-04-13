import NavBar from "@/components/NavBar";
import React from "react";
import Projects from "./projects";

const work = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-12">
      <div className="flex w-full max-w-[1200px] flex-col items-center justify-start gap-24 px-24 pb-32">
        <NavBar
          navItems={[
            { name: "Home", link: "home" },
            { name: "Projects", link: "projects" },
            { name: "Resume", link: "resume" },
            { name: "Contact", link: "contact" },
          ]}
        />
      </div>
    </main>
  );
};

export default work;
