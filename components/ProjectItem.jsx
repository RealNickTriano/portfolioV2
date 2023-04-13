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
  shortView,
}) => {
  const shortDescription =
    description.substring(0, 350) + (description.length > 350 ? "..." : "");

  const readMoreTag = (
    <a href="/work" className="font-medium text-blue-500">
      {" "}
      Read More
    </a>
  );
  console.log(shortDescription);
  return (
    <div className="flex w-full items-center justify-around">
      {flipped ? (
        <>
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
              {shortView ? shortDescription : description}
              {shortView && description.length > 350 ? readMoreTag : ""}
            </p>
          </div>
          <div className="flex w-[35%] items-center justify-center rounded-md bg-white p-4 shadow-md">
            <img
              src="/wordlemon.png"
              alt="project_thumbnail"
              className="h-full w-full rounded-md"
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
              {shortView ? shortDescription : description}
              {shortView && description.length > 350 ? readMoreTag : ""}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectItem;
