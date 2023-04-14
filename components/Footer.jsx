import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t-2 border-gray-300 bg-neutral-100 px-12 py-4 text-sm text-zinc-500">
      <div className="flex flex-col items-center justify-center gap-4">
        <ul className="flex items-center justify-center gap-4">
          <li>
            <Link
              href={"https://www.linkedin.com/in/nicholastriano/"}
              target="_blank"
              className="hover:text-blue-500"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              href={"https://github.com/RealNickTriano"}
              target="_blank"
              className="hover:text-blue-500"
            >
              Github
            </Link>
          </li>
          <li>
            <Link
              href={"https://twitter.com/nKoalaBear"}
              target="_blank"
              className="hover:text-blue-500"
            >
              Twitter
            </Link>
          </li>
        </ul>
        <p>
          &copy; {new Date().getFullYear()} All rights reserved. Nicholas
          Triano.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
