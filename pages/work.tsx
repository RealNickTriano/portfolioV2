import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import MyProjs from "../projects.json";

export default function MyProjects() {
  const projs = MyProjs.projects;
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-12">
      <div className="flex w-full flex-col items-center justify-center bg-neutral-100 px-12">
        <Projects shortView={false} />
      </div>
    </main>
  );
}
