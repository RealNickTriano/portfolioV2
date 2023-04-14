import Image from "next/image";
import { motion } from "framer-motion";

const HeroImage = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 1 }}
      className="flex w-full max-w-[400px] items-center justify-center rounded-lg p-4 shadow-md shadow-blue-200"
    >
      <Image
        src="/profile.jpg"
        alt="profile_picture_of_me"
        width={328}
        height={328}
        className="h-full w-full rounded-md"
      ></Image>
    </motion.div>
  );
};

export default HeroImage;
