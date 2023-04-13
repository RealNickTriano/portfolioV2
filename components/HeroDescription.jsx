import PillButton from "./PillButton";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroDescription = () => {
  return (
    <div className="flex w-[60%] flex-col items-start justify-center gap-4">
      <motion.h1
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1 }}
        className="text-lg text-zinc-500"
      >
        Software Engineer
      </motion.h1>
      <motion.h1
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1, delay: 0.25 }}
        className="text-5xl font-semibold"
      >
        Nicholas Triano
      </motion.h1>
      <motion.p
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1, delay: 0.5 }}
        className="text-md leading-7 text-zinc-500"
      >
        Unlock the potential of your online presence with a Rutgers Computer
        Science graduate, offering full-stack expertise. Experience the
        difference of tailored web solutions designed to grow your business.
      </motion.p>
      <div className="flex items-center justify-center gap-4">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1, delay: 0.5 }}
        >
          <Link
            className="rounded-full border-2 border-gray-400 px-8 py-2 capitalize shadow-md transition hover:border-blue-400"
            href="/Nick_Triano_Resume2.pdf"
            target="_blank"
            scroll={false}
          >
            Resume
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1, delay: 0.75 }}
        >
          <PillButton name={"Contact"} myRef={"#contact-form"} />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroDescription;
