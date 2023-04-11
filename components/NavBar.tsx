import React from "react";
import NavItem from "./NavItem";
import HomeLogo from "./HomeLogo";

const NavBar = ({ navItems }) => {
  return (
    <nav className="w-full">
      <ul className="flex items-center justify-between">
        <HomeLogo />
        <div className="flex items-center justify-center gap-12">
          {navItems.map((item) => {
            return (
              <li key={item.name}>
                <NavItem name={item.name} foo={item.click} />
              </li>
            );
          })}
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
