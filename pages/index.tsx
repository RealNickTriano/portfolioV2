import Image from "next/image";
import { Inter } from "next/font/google";
import HomeLogo from "@/components/HomeLogo";
import HeroImage from "@/components/HeroImage";
import HeroDescription from "@/components/HeroDescription";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-32 py-12">
      <div className="flex max-w-[1200px] flex-col items-center justify-start gap-24 px-24">
        <NavBar
          navItems={[
            { name: "Home", click: () => console.log("Home") },
            { name: "Projects", click: () => console.log("Projects") },
            { name: "Resume", click: () => console.log("Resume") },
            { name: "Contact", click: () => console.log("Contact") },
          ]}
        />
        <div className="flex w-full max-w-[1200px] items-center justify-center gap-12">
          <HeroImage />
          <HeroDescription />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center bg-neutral-100 px-32 py-12">
        <Projects />
      </div>
    </main>
  );
}
