import { useState } from "react";
import NavItem from "./NavItem";
import HomeLogo from "./HomeLogo";
import Image from "next/image";
import { motion } from "framer-motion";

const NavBar = () => {
  const navItems = [
    { name: "Home", link: "home" },
    { name: "Work", link: "work" },
    { name: "Contact", link: "home/#contact-form" },
  ];

  return (
    <nav className="flex w-full items-center justify-center px-12 pt-16">
      <ul className="flex w-full max-w-[1200px] flex-col items-center justify-between gap-4 md:flex-row">
        <HomeLogo />
        <div className="flex items-center justify-center gap-4">
          <motion.a
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5, delay: 1.25 }}
            href="https://github.com/RealNickTriano"
            target="_blank"
          >
            <Image
              src="/icons8-github.svg"
              alt="github_icon"
              width={48}
              height={48}
            />
          </motion.a>
          <motion.a
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5, delay: 1.5 }}
            href="https://www.linkedin.com/in/nicholastriano/"
            target="_blank"
          >
            <Image
              src="/icons8-linkedin.svg"
              alt="linkedin_icon"
              width={48}
              height={48}
            />
          </motion.a>
          <motion.a
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5, delay: 1.75 }}
            href="https://twitter.com/nKoalaBear"
            target="_blank"
          >
            <Image
              src="/icons8-twitter.svg"
              alt="twitter_icon"
              width={48}
              height={48}
            />
          </motion.a>
        </div>
        <div className="hidden items-center justify-center gap-12 lg:flex">
          {navItems.map((item, idx) => {
            return (
              <li key={item.name}>
                <NavItem name={item.name} link={item.link} />
              </li>
            );
          })}
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
