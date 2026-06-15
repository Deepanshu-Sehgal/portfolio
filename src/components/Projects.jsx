import ProjectCard from "../cards/ProjectCard";
import Image from "next/image";
import Link from "next/link";
import  projects  from "../data/projects";


export default function Project() {
  return (
    <section id="projects" data-aos="fade-up" className="w-full h-full px-8">
      <div className="text-center mb-2 md:mb-10 pt-20">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-500 tracking-tight">
          Featured Projects
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          A showcase of my recent work, highlighting full-stack development, cloud infrastructure, and AI integrations.
        </p>
      </div>
      {projects.map((project, index) => (
        <ProjectCard key={index} index={index} project={project} />
      ))}
    </section>
  );
}
