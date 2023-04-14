import Image from "next/image";
import { Inter } from "next/font/google";
import HomeLogo from "@/components/HomeLogo";
import HeroImage from "@/components/HeroImage";
import HeroDescription from "@/components/HeroDescription";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-12">
      <div className="flex w-full flex-col items-center justify-center gap-12 px-12 pb-12">
        <HeroImage />
        <HeroDescription />
      </div>
      <div className="flex w-full flex-col items-center justify-center bg-neutral-100 px-12 py-12">
        <Projects shortView={true} />
      </div>
      <div className="flex w-full max-w-[1200px] flex-col items-center justify-center bg-neutral-50 py-12">
        <div className="mb-8 flex w-full flex-col items-center justify-center gap-1">
          <h1 className="text-center text-2xl font-medium">
            How Can I Help You?
          </h1>
          <div className="relative h-[2px] w-[246px] bg-gray-300">
            <div className="absolute left-6 top-0 h-[2px] w-[50%] bg-blue-500"></div>
          </div>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
