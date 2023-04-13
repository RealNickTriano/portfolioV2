import React from "react";

/**
 *
 * TODOS:
 * - Read more a tags go to location on all projects page
 */
const ProjectItem = ({
  flipped,
  title,
  stack,
  description,
  thumbnail,
  appLink,
  gitLink,
}) => {
  return (
    <div className="relative flex w-full max-w-[1200px] items-center justify-start">
      {flipped ? (
        <>
          <div className="z-10 flex w-[50%] flex-col items-start justify-center bg-white px-12 py-8 shadow-md">
            <div className="flex items-center justify-center gap-1">
              <a href={appLink} className="text-xl font-medium">
                {title}
              </a>
              <a href={gitLink} className="font-medium text-blue-500">
                - View on Github
              </a>
            </div>
            <h1 className="text-zinc-500">
              {stack.map((item, idx) =>
                idx !== stack.length - 1 ? item + " | " : item
              )}
            </h1>
            <p className="mt-4 whitespace-pre-wrap leading-7">
              {description.substring(0, 350) +
                (description.length > 350 ? "..." : "")}
              {description.length > 350 ? (
                <a href="#" className="font-medium text-blue-500">
                  {" "}
                  Read More
                </a>
              ) : (
                ""
              )}
            </p>
          </div>
          {/* Image */}
          <div className="absolute right-52 z-0 flex w-[35%] items-center justify-center shadow-md">
            <img
              src="/wordlemon.png"
              alt="project_thumbnail"
              className="h-full w-full"
            />
          </div>
        </>
      ) : (
        <>
          <div className="flex w-[35%] items-center justify-center rounded-md bg-white p-4 shadow-md">
            <img
              src="/wordlemon.png"
              alt="project_thumbnail"
              className="h-full w-full rounded-md"
            />
          </div>
          <div className="flex w-[50%] flex-col items-start justify-center">
            <div className="flex items-center justify-center gap-1">
              <a href={appLink} className="text-xl font-medium">
                {title}
              </a>
              <a href={gitLink} className="font-medium text-blue-500">
                - View on Github
              </a>
            </div>
            <h1 className="text-zinc-500">
              {stack.map((item, idx) =>
                idx !== stack.length - 1 ? item + " | " : item
              )}
            </h1>
            <p className="mt-4 whitespace-pre-wrap leading-7">
              {description.substring(0, 350) +
                (description.length > 350 ? "..." : "")}
              {description.length > 350 ? (
                <a href="#" className="font-medium text-blue-500">
                  {" "}
                  Read More
                </a>
              ) : (
                ""
              )}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectItem;
