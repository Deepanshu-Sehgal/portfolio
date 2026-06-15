"use client";

import React, { useEffect } from "react";
import { Github, X, ExternalLink, Calendar, Code2 } from "lucide-react";
import PipelineVisualizer from "./PipelineVisualizer";
import ImageSlider from "./ImageSlider";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  // Prevent scrolling on the body when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 md:p-8 overflow-hidden">
          
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container - Transparent Wrapper for Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full sm:h-[90vh] max-w-7xl flex flex-col z-10 overflow-y-auto custom-scrollbar"
          >
            {/* Close Button - Sticky to Top Right of Scrolling Area */}
            <div className="sticky top-0 z-50 flex justify-end mb-4 pt-2 pr-2 sm:pt-0 sm:pr-0">
              <button 
                onClick={onClose}
                className="p-3 bg-black/60 hover:bg-white/10 border border-white/10 rounded-full text-white backdrop-blur-md transition-colors shadow-xl"
              >
                <X size={24} />
              </button>
            </div>

            {/* BENTO GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 pb-20">
              
              {/* BENTO 1: Main Info (Col Span 2) */}
              <div className="col-span-1 lg:col-span-2 bg-[#0a0a0f] border border-white/10 rounded-[2rem] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 text-indigo-400 font-mono text-sm font-bold tracking-widest uppercase mb-6">
                    <Calendar size={18} />
                    {project.date}
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-8 leading-[1.15] tracking-tight">
                    {project.title}
                  </h2>

                  <div className="flex items-center gap-3 text-gray-400 font-bold uppercase tracking-widest text-xs mb-4">
                    <Code2 size={16} /> Tech Stack
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tech.split(",").map((tech, i) => (
                      <span key={i} className="text-xs sm:text-sm font-semibold px-4 py-2 bg-white/5 text-gray-200 border border-white/10 rounded-xl backdrop-blur-sm shadow-inner">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap sm:flex-nowrap gap-4 relative z-10 mt-auto pt-6 border-t border-white/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white text-black hover:bg-gray-200 flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    <Github size={20} /> Source Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-indigo-600/20 text-indigo-400 hover:bg-indigo-600/30 border border-indigo-500/30 flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:-translate-y-1"
                    >
                      <ExternalLink size={20} /> Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* BENTO 2: Hero Image (Col Span 1) */}
              <div className="col-span-1 bg-[#0a0a0f] border border-white/10 rounded-[2rem] overflow-hidden relative min-h-[300px] lg:min-h-full group shadow-2xl">
                <ImageSlider images={project.image} altTitle={project.title} />
              </div>

              {/* BENTO 3: The Story (Col Span 3) */}
              <div className="col-span-1 lg:col-span-3 bg-[#0a0a0f] border border-white/10 rounded-[2rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
                
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-indigo-500 rounded-full"></span>
                  Project Details
                </h3>
                
                {/* Magazine style columns for text on large screens */}
                <div className="columns-1 md:columns-2 gap-12 text-gray-300 text-lg leading-relaxed space-y-8 md:space-y-0">
                  {[project.desc1, project.desc2, project.desc3].map(
                    (desc, i) =>
                      desc && (
                        <p key={i} className="break-inside-avoid mb-8">
                          {desc}
                        </p>
                      )
                  )}
                </div>
              </div>

              {/* BENTO 4: Pipeline Visualizer (Col Span 3) */}
              {project.pipeline && (
                <div className="col-span-1 lg:col-span-3 bg-[#0a0a0f] border border-white/10 rounded-[2rem] p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/10 to-transparent pointer-events-none"></div>
                  
                  <div className="mb-10 flex flex-col items-center text-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Pipeline Architecture</h3>
                    <p className="text-gray-400 max-w-2xl text-sm sm:text-base">
                      Interactive visualization of the CI/CD workflow engineered for this project.
                    </p>
                  </div>
                  
                  <div className="w-full bg-black/50 rounded-2xl p-4 sm:p-8 border border-white/5 backdrop-blur-sm">
                    <PipelineVisualizer pipeline={project.pipeline} />
                  </div>
                </div>
              )}

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
