import Image from "next/image";
import { Inter } from "next/font/google";
import HomeLogo from "@/components/HomeLogo";
import HeroImage from "@/components/HeroImage";
import HeroDescription from "@/components/HeroDescription";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-x-hidden pt-12">
      <div className="flex w-full max-w-[1200px] flex-col items-center justify-center gap-12 px-12 pb-12 md:flex-row lg:px-12 lg:pb-64 lg:pt-24">
        <HeroImage />
        <HeroDescription />
      </div>
      <div className="flex w-full flex-col items-center justify-center bg-neutral-100 px-12">
        <Projects shortView={true} />
      </div>
    </main>
  );
}
