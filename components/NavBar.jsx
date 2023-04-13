import { useState } from "react";
import NavItem from "./NavItem";
import HomeLogo from "./HomeLogo";

const NavBar = () => {
  const navItems = [
    { name: "Home", link: "home" },
    { name: "Work", link: "work" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <nav className="flex w-full items-center justify-center px-12 py-16">
      <ul className="flex w-full max-w-[1200px] items-center justify-between">
        <HomeLogo />
        <div className="flex items-center justify-center gap-12">
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
