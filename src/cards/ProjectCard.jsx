"use client";

import React, { useRef } from "react";
import { Github } from "lucide-react";
import useIsMobile from "../hooks/useIsMobile";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const ProjectCard = ({ project, index }) => {
  const isMobile = useIsMobile();
  const cardRef = useRef(null);

  // Framer Motion 3D Tilt values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (isMobile || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className="md:sticky md:top-8 flex items-center justify-center text-[#C3C3C3] px-4 sm:px-8 perspective-1000 mb-16 md:mb-0 md:min-h-screen"
      style={{ zIndex: index + 10 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: isMobile ? 0 : rotateX,
          rotateY: isMobile ? 0 : rotateY,
          transformStyle: "preserve-3d",
          backgroundColor: "rgba(15, 15, 25, 1)",
          backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 100%)`,
        }}
        className="w-full h-auto md:min-h-[75vh] max-w-7xl md:h-[75vh] mt-4 md:mt-12 p-5 sm:p-8 md:p-10 rounded-2xl shadow-2xl border border-white/10 flex flex-col justify-between transition-colors duration-500 hover:border-white/30 overflow-hidden"
      >
        {/* Date & Tech */}
        <div 
          className="flex flex-col sm:flex-row justify-between gap-3 mb-5 items-start sm:items-center"
          style={{ transform: "translateZ(30px)" }}
        >
          <p className="text-sm sm:text-lg md:text-xl text-gray-400 font-medium whitespace-nowrap">{project.date}</p>
          <div className="flex flex-wrap gap-2 justify-start sm:justify-end">
            {project.tech.split(",").map((tech, i) => (
              <span key={i} className="text-xs sm:text-sm font-semibold px-2 py-1 bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 rounded-md shadow-[0_0_10px_rgba(79,70,229,0.1)]">
                {tech.trim()}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full bg-gradient-to-r from-transparent via-white/20 to-transparent h-[1px] mb-6" />

        {/* Title & Descriptions */}
        <div className="flex-1" style={{ transform: "translateZ(40px)" }}>
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400">
            {project.title}
          </div>

          {/* 👉 Move buttons here if mobile */}
          {isMobile && (
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 border border-white/20 flex items-center justify-center gap-2 hover:bg-white text-white hover:text-black px-4 py-2.5 rounded-lg shadow transition w-full sm:w-auto"
              >
                <Github size={20} /> GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600/80 border border-indigo-400/50 text-white flex items-center justify-center px-4 py-2.5 rounded-lg shadow hover:bg-indigo-500 transition w-full sm:w-auto"
                >
                  Live Demo
                </a>
              )}
            </div>
          )}

          <div className="space-y-4">
            {[project.desc1, project.desc2, project.desc3].map(
              (desc, i) =>
                desc && (
                  <p
                    key={i}
                    className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300"
                  >
                    {desc}
                  </p>
                )
            )}
          </div>
        </div>

        {/* Divider */}
        {!isMobile && <div className="w-full bg-gradient-to-r from-transparent via-white/20 to-transparent h-[1px] mt-6 mb-4" />}

        {/* 👉 Show buttons at bottom only on non-mobile */}
        {!isMobile && (
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center"
            style={{ transform: "translateZ(50px)" }}
          >
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 border border-white/20 flex items-center gap-2 hover:bg-white text-white hover:text-black px-6 py-3 rounded-xl shadow-lg transition duration-300  font-medium"
            >
              <Github size={22} /> View Code
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600/80 border border-indigo-400/50 text-white px-6 py-3 rounded-xl shadow-[0_0_15px_rgba(79,70,229,0.5)] hover:shadow-[0_0_25px_rgba(79,70,229,0.7)] hover:bg-indigo-500 transition duration-300  font-medium"
              >
                Live Demo
              </a>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectCard;
