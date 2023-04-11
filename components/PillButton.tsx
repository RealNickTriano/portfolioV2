import React from "react";

type ButtonProps = {
  name: string;
  foo: (a: any) => void | undefined;
};

const PillButton = ({ name, foo }) => {
  return (
    <button
      className="rounded-full border-2 border-gray-400 px-8 py-2 capitalize shadow-md transition hover:border-blue-400"
      onClick={foo}
    >
      {name}
    </button>
  );
};

export default PillButton;
