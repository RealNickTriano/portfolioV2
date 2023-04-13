import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const NavItem = ({ name, link }) => {
  const router = useRouter();

  return (
    <Link
      className={
        router.pathname === `/${link}`
          ? "font-medium text-black transition hover:text-black"
          : "font-medium text-gray-400 transition hover:text-black"
      }
      href={`/${link}`}
    >
      {name}
    </Link>
  );
};

export default NavItem;
