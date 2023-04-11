import React from "react";

type NavItemProps = {
  name: string;
  foo: (a: any) => void | undefined;
};

const NavItem = ({ name, foo }) => {
  return (
    <button
      className="font-medium text-gray-400 transition hover:text-black"
      onClick={foo}
    >
      {name}
    </button>
  );
};

export default NavItem;
