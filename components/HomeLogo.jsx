import { useState } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";

const HomeLogo = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <motion.a
        animate={{
          scale: [0.5, 1, 1, 0.5, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500 md:flex"
        href="/home"
      >
        <h1 className="text-3xl font-bold text-white">N</h1>
      </motion.a>
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1.5 }}
        className="text-2xl font-semibold"
      >
        Nick
      </motion.h1>
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1.5 }}
        className="text-2xl font-normal"
      >
        Triano
      </motion.h1>
    </div>
  );
};

export default HomeLogo;
