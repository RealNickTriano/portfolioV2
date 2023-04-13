import Link from "next/link";
import { motion } from "framer-motion";

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
    <Link href="/work" className="font-medium text-blue-500">
      {" "}
      Read More
    </Link>
  );

  return (
    <div className="flex w-full items-center justify-around">
      {flipped ? (
        <>
          <div className="flex w-[50%] flex-col items-start justify-center">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1 }}
              className="flex items-center justify-center gap-1"
            >
              <Link
                href={appLink}
                className="text-xl font-medium"
                target="_blank"
              >
                {title}
              </Link>
              <Link
                href={gitLink}
                className="font-medium text-blue-500"
                target="_blank"
              >
                - View on Github
              </Link>
            </motion.div>
            <motion.h1
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1, delay: 0.25 }}
              className="text-zinc-500"
            >
              {stack.map((item, idx) =>
                idx !== stack.length - 1 ? item + " | " : item
              )}
            </motion.h1>
            <motion.p
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "linear", duration: 0.5, delay: 0.25 }}
              className="mt-4 whitespace-pre-wrap leading-7"
            >
              {shortView ? shortDescription : description}
              {shortView && description.length > 350 ? readMoreTag : ""}
            </motion.p>
          </div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "linear", duration: 0.5, delay: 0.25 }}
            className="flex w-[35%] items-center justify-center rounded-md bg-white p-4 shadow-md"
          >
            <Link href={appLink} target="_blank">
              <img
                src={thumbnail}
                alt="project_thumbnail"
                className="h-full w-full rounded-md"
              />
            </Link>
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "linear", duration: 0.5, delay: 0.25 }}
            className="flex w-[35%] items-center justify-center rounded-md bg-white p-4 shadow-md"
          >
            <Link href={appLink} target="_blank">
              <img
                src={thumbnail}
                alt="project_thumbnail"
                className="h-full w-full rounded-md"
              />
            </Link>
          </motion.div>
          <div className="flex w-[50%] flex-col items-start justify-center">
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1 }}
              className="flex items-center justify-center gap-1"
            >
              <Link
                href={appLink}
                className="text-xl font-medium"
                target="_blank"
              >
                {title}
              </Link>
              <Link
                href={gitLink}
                className="font-medium text-blue-500"
                target="_blank"
              >
                - View on Github
              </Link>
            </motion.div>
            <motion.h1
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1, delay: 0.25 }}
              className="text-zinc-500"
            >
              {stack.map((item, idx) =>
                idx !== stack.length - 1 ? item + " | " : item
              )}
            </motion.h1>
            <motion.p
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "linear", duration: 0.5, delay: 0.25 }}
              className="mt-4 whitespace-pre-wrap leading-7"
            >
              {shortView ? shortDescription : description}
              {shortView && description.length > 350 ? readMoreTag : ""}
            </motion.p>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectItem;
