import React from "react";
import { Github } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  return (
    <div
      className={`sticky top-8 min-h-screen flex items-center justify-center text-[#C3C3C3] z-[${index + 10}] px-4 sm:px-8`}
    >
      <div
        className={`w-full max-w-5xl min-h-[600px] sm:h-[75vh] mt-12 p-6 sm:p-10 rounded-2xl shadow-2xl backdrop-blur-sm flex flex-col justify-between ${project.bgColor}`}
      >
        {/* Date & Tech */}
        <div className="flex flex-col sm:flex-row justify-between gap-2 mb-4 text-lg sm:text-2xl">
          <p>{project.date}</p>
          <p>{project.tech}</p>
        </div>

        {/* Divider */}
        <div className="w-full bg-white h-[1px] mb-6" />

        {/* Title & Descriptions */}
        <div className="flex-1">
          <p className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
            {project.title}
          </p>
          {[project.desc1, project.desc2, project.desc3].map(
            (desc, i) =>
              desc && (
                <p
                  key={i}
                  className="mb-4 text-base sm:text-lg md:text-xl leading-relaxed line-clamp-3"
                >
                  {desc}
                </p>
              )
          )}
        </div>

        {/* Divider */}
        <div className="w-full bg-white h-[1px] mt-6 mb-4" />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C3C3C3] flex items-center gap-2 hover:bg-white text-black px-4 py-2 rounded shadow transition"
          >
            <Github size={22} /> GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 py-2 rounded shadow hover:bg-gray-800 transition"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
