import Link from "next/link";

const NavItem = ({ name, link }) => {
  return (
    <Link
      className="font-medium text-gray-400 transition hover:text-black"
      href={`/${link}`}
    >
      {name}
    </Link>
  );
};

export default NavItem;
