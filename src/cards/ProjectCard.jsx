"use client";

import React from "react";
import { TerminalSquare, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import ImageSlider from "../components/ImageSlider";

// Generate a fake container ID
const generateContainerId = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return (hash >>> 0).toString(16).padStart(12, '0').substring(0, 12);
};

const ProjectCard = ({ project, index, onClick }) => {
  const techList = project.tech.split(",").map(t => t.trim());
  const displayTech = techList.slice(0, 4);
  const containerId = generateContainerId(project.title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onClick={onClick}
      className="cursor-pointer group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b0c10] shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-[0_15px_40px_rgba(79,70,229,0.25)] font-mono"
    >
      {/* Container Dashboard Header */}
      <div className="bg-[#1a1b26] p-3 sm:px-4 border-b border-white/5 flex flex-col gap-2 text-[10px] sm:text-xs">
         <div className="flex justify-between items-center text-gray-500">
           <span className="font-bold tracking-widest text-indigo-400">CONTAINER_ID</span>
           <span className="text-white bg-white/5 px-2 py-0.5 rounded">{containerId}</span>
         </div>
         <div className="flex justify-between items-center text-gray-500">
           <span className="font-bold tracking-widest text-indigo-400">STATUS</span>
           <div className="flex items-center gap-1.5 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">
             <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.8)]"></div>
             <span className="text-green-400 font-bold tracking-wide">Up {index + 2} days</span>
           </div>
         </div>
      </div>

      {/* Image Cover */}
      <div className="h-48 sm:h-56 w-full overflow-hidden relative bg-black border-b border-white/5">
        <ImageSlider images={project.image} altTitle={project.title} />
        {/* Terminal Overlay effect on hover */}
        <div className="absolute inset-0 bg-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay"></div>
      </div>
      
      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 relative z-10">
        
        {/* Project Title as Image Name */}
        <div className="flex items-center gap-2 mb-4">
           <span className="text-gray-500 text-[10px] font-bold tracking-widest">IMAGE:</span>
           <h3 className="text-lg font-bold text-white leading-tight truncate font-sans tracking-tight">
             deepanshu/{project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}
           </h3>
        </div>
        
        <p className="text-gray-400 text-sm line-clamp-3 mb-6 flex-1 leading-relaxed font-sans">
          {project.desc1}
        </p>

        {/* Tech Stack Tags (ENV Variables) */}
        <div className="mb-6 mt-auto">
          <div className="text-[10px] text-gray-600 font-bold tracking-widest mb-2 border-b border-white/5 pb-1 inline-block">ENVIRONMENT_VARIABLES</div>
          <div className="flex flex-wrap gap-2">
            {displayTech.map((t, i) => (
              <span key={i} className="text-[10px] sm:text-xs font-semibold px-2 py-1 bg-black text-indigo-300 border border-indigo-500/20 rounded flex items-center gap-1">
                <span className="text-indigo-600 opacity-60">ENV=</span>{t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button (Exec bash) */}
        <div className="pt-4 border-t border-white/5 flex items-center justify-between group/btn bg-white/5 -mx-5 sm:-mx-6 -mb-5 sm:-mb-6 px-5 sm:px-6 pb-5 sm:pb-6 mt-4">
          <div className="flex items-center gap-2 text-gray-500 text-[10px] sm:text-xs font-bold group-hover/btn:text-indigo-400 transition-colors pt-2">
            <TerminalSquare size={14} />
            <span className="truncate max-w-[200px]">docker exec -it {containerId.substring(0, 4)} /bin/sh</span>
          </div>
          <div className="pt-2">
            <PlayCircle size={20} className="text-indigo-500 group-hover/btn:scale-110 group-hover/btn:text-indigo-400 transition-all drop-shadow-[0_0_8px_rgba(99,102,241,0.5)] bg-black rounded-full" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
