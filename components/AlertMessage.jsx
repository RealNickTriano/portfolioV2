import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const AlertMessage = ({ success, message }) => {
  return !success ? (
    <motion.div
      initial={{ y: -25, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      className="fixed left-[50%] top-5 flex items-center justify-center gap-4 rounded-lg bg-red-600 px-6 py-2 text-white"
    >
      <FiAlertCircle />
      <h1>{message}</h1>
    </motion.div>
  ) : (
    <motion.div
      className="fixed left-[50%] top-5 flex items-center justify-center gap-4 rounded-lg bg-green-600 px-6 py-2 text-white"
      initial={{ y: -25, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <FiAlertCircle />
      <h1>{message}</h1>
    </motion.div>
  );
};

export default AlertMessage;
