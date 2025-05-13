import ProjectCard from "../cards/ProjectCard";
import  projects  from "../data/projects";


export default function Project() {
  return (
    <section id="projects" data-aos="fade-up" className="w-full h-full px-8">
      {/* <div className="sticky top-[5rem]">
        <h2 className="text-4xl font-bold ">Project</h2>
      </div> */}

      {projects.map((project, index) => (
        <ProjectCard key={index} index={index} project={project} />
      ))}
    </section>
  );
}
