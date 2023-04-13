import Link from "next/link";

const PillButton = ({ name, myRef }) => {
  return (
    <Link
      className="rounded-full border-2 border-gray-400 px-8 py-2 capitalize shadow-md transition hover:border-blue-400"
      href={myRef}
      scroll={false}
    >
      {name}
    </Link>
  );
};

export default PillButton;
