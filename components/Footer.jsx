import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t-2 border-gray-300 bg-neutral-100 px-12 py-4 text-sm text-zinc-500">
      <div className="flex items-center justify-between">
        <ul className="flex items-center justify-center gap-4">
          <li>
            <Link
              href={"https://www.linkedin.com/in/nicholastriano/"}
              target="_blank"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link href={"https://github.com/RealNickTriano"} target="_blank">
              Github
            </Link>
          </li>
          <li>
            <Link href={"https://twitter.com/nKoalaBear"} target="_blank">
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
