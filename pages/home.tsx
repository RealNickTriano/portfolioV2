import Image from "next/image";
import { Inter } from "next/font/google";
import HomeLogo from "@/components/HomeLogo";
import HeroImage from "@/components/HeroImage";
import HeroDescription from "@/components/HeroDescription";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-12">
      <div className="flex max-w-[1200px] flex-col items-center justify-start gap-24 px-24 pb-32">
        <NavBar
          navItems={[
            { name: "Home", link: "home" },
            { name: "Projects", link: "projects" },
            { name: "Resume", link: "resume" },
            { name: "Contact", link: "contact" },
          ]}
        />
        <div className="flex w-full max-w-[1200px] items-center justify-center gap-12">
          <HeroImage />
          <HeroDescription />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center bg-neutral-100 px-32 py-12">
        <Projects shortView={true} />
      </div>
      <div className="flex w-full max-w-[1200px] flex-col items-center justify-center bg-neutral-50 px-32 py-12">
        <div className="mb-8 flex w-full flex-col items-start justify-center gap-1">
          <h1 className="text-2xl font-medium">How Can I Help You?</h1>
          <div className="relative h-[2px] w-[246px] bg-gray-300">
            <div className="absolute left-6 top-0 h-[2px] w-[50%] bg-blue-500"></div>
          </div>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
