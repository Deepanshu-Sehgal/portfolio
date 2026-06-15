"use client";

import React, { useState } from "react";
import ProjectCard from "../cards/ProjectCard";
import ProjectModal from "./ProjectModal";
import  projects  from "../data/projects";
import { Container } from "lucide-react";

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
    <section id="projects" className="w-full h-full px-4 sm:px-8 max-w-7xl mx-auto py-24 relative z-10">
      <div className="flex items-center justify-center sm:justify-start gap-4 mb-16">
        <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
          <Container className="text-indigo-400" size={32} />
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono tracking-tight text-white">
          ~/Active_Workloads
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            index={index} 
            project={project} 
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>
    </section>
    <ProjectModal 
      project={selectedProject} 
      onClose={() => setSelectedProject(null)} 
    />
    </>
  );
}
