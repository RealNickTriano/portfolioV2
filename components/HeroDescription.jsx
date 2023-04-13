import PillButton from "./PillButton";
import Link from "next/link";

const HeroDescription = () => {
  return (
    <div className="flex w-[60%] flex-col items-start justify-center gap-4">
      <h1 className="text-lg text-zinc-500">Software Engineer</h1>
      <h1 className="text-5xl font-semibold">Nicholas Triano</h1>
      <p className="text-md leading-7 text-zinc-500">
        Unlock the potential of your online presence with a Rutgers Computer
        Science graduate, offering full-stack expertise. Experience the
        difference of tailored web solutions designed to grow your business.
      </p>
      <div className="flex items-center justify-center gap-4">
        <Link
          className="rounded-full border-2 border-gray-400 px-8 py-2 capitalize shadow-md transition hover:border-blue-400"
          href="/Nick_Triano_Resume2.pdf"
          target="_blank"
          scroll={false}
        >
          Resume
        </Link>
        <PillButton name={"Contact"} myRef={"#contact-form"} />
      </div>
    </div>
  );
};

export default HeroDescription;
