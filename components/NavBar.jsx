import React from "react";
import NavItem from "./NavItem";
import HomeLogo from "./HomeLogo";

const NavBar = () => {
  const navItems = [
    { name: "Home", link: "home" },
    { name: "Projects", link: "projects" },
    { name: "Work", link: "work" },
    { name: "Resume", link: "resume" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <nav className="w-full">
      <ul className="flex items-center justify-between">
        <HomeLogo />
        <div className="flex items-center justify-center gap-12">
          {navItems.map((item) => {
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
