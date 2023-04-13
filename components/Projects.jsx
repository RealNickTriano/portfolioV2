import ProjectItem from "./ProjectItem";
import MyProjs from "../projects.json";
import Link from "next/link";

const Projects = ({ shortView }) => {
  return (
    <div className="w-full max-w-[1200px] px-24">
      <div className="flex flex-col items-start justify-center gap-2">
        <h1 className="text-3xl font-medium">Work</h1>
        <div className="relative h-[2px] w-[107px] bg-gray-300">
          <div className="absolute left-6 top-0 h-[2px] w-[50%] bg-blue-500"></div>
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center justify-center gap-24">
        {shortView
          ? MyProjs.projects.slice(0, 3).map((item, idx) => {
              return (
                <ProjectItem
                  key={idx}
                  flipped={idx % 2 === 0 ? false : true}
                  title={item.title}
                  stack={item.stack}
                  description={item.description}
                  thumbnail={item.thumbnail}
                  appLink={item.link}
                  gitLink={item.github}
                  shortView={shortView}
                />
              );
            })
          : MyProjs.projects.map((item, idx) => {
              return (
                <ProjectItem
                  key={idx}
                  flipped={idx % 2 === 0 ? false : true}
                  title={item.title}
                  stack={item.stack}
                  description={item.description}
                  thumbnail={item.thumbnail}
                  appLink={item.link}
                  gitLink={item.github}
                  shortView={shortView}
                />
              );
            })}
        {shortView && (
          <Link
            href="/work"
            className="text-xl font-normal text-zinc-500 hover:text-blue-500"
          >
            View All
          </Link>
        )}
      </div>
    </div>
  );
};

export default Projects;
