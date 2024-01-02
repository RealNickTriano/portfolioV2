import PillButton from "./PillButton";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroDescription = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <motion.h1
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1 }}
        className="text-center text-lg text-zinc-500"
      >
        Software Engineer
      </motion.h1>
      <motion.h1
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1, delay: 0.25 }}
        className="text-center text-5xl font-semibold"
      >
        Nicholas Triano
      </motion.h1>
      <motion.p
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1, delay: 0.5 }}
        className="text-md text-center leading-7 text-zinc-500 lg:max-w-[420px]"
      >
        Unlock the potential of your online presence with a Rutgers Computer
        Science graduate, offering full-stack expertise. Experience the
        difference of tailored web solutions designed to grow your business.
      </motion.p>
      <div className="mt-4 flex flex-col items-center justify-center gap-6">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1, delay: 0.5 }}
        >
          <Link
            className="rounded-full border-2 border-gray-400 px-8 py-2 capitalize shadow-md transition hover:border-blue-400"
            href="/Nick_Triano_Resume.pdf"
            target="_blank"
            scroll={false}
          >
            Resume
          </Link>
        </motion.div>
        <p className="flex gap-1">Email:
          <a className="font-semibold text-blue-500"
              href="mailto:nicholastriano1999@gmail.com">
                nicholastriano1999@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default HeroDescription;
