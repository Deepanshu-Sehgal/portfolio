"use client";

import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "DevOps & CI/CD",
    colorTheme: { border: "group-hover:border-green-500", glow: "bg-green-500/30", text: "text-green-400" },
    skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Argo CD"]
  },
  {
    category: "Cloud Platforms",
    colorTheme: { border: "group-hover:border-blue-500", glow: "bg-blue-500/30", text: "text-blue-400" },
    skills: ["AWS", "Azure", "GCP"]
  },
  {
    category: "Infrastructure",
    colorTheme: { border: "group-hover:border-orange-500", glow: "bg-orange-500/30", text: "text-orange-400" },
    skills: ["Terraform", "Ansible", "Prometheus", "Grafana", "Nginx"]
  },
  {
    category: "Databases & Messaging",
    colorTheme: { border: "group-hover:border-yellow-500", glow: "bg-yellow-500/30", text: "text-yellow-400" },
    skills: ["PostgreSQL", "SQL", "MongoDB", "Redis", "Kafka", "Vector DBs"]
  },
  {
    category: "Frameworks & Libs",
    colorTheme: { border: "group-hover:border-purple-500", glow: "bg-purple-500/30", text: "text-purple-400" },
    skills: ["SpringBoot", "MERN Stack", "Redux", "FastAPI"]
  },
  {
    category: "Languages",
    colorTheme: { border: "group-hover:border-cyan-500", glow: "bg-cyan-500/30", text: "text-cyan-400" },
    skills: ["Python", "TypeScript", "Java", "JavaScript"]
  }
];

const HexagonNode = ({ name, colorTheme, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 10) * 0.05 }}
      className="relative group w-[100px] h-[115px] sm:w-[120px] sm:h-[138px] flex items-center justify-center -m-2 sm:-m-3"
    >
      {/* Background Glow */}
      <div className={`absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 ${colorTheme.glow}`}></div>
      
      {/* Hexagon Shape Container */}
      <div 
        className={`w-full h-full bg-[#111218] border-[3px] border-[#232530] ${colorTheme.border} transition-all duration-300 flex items-center justify-center z-10 group-hover:-translate-y-2 group-hover:scale-110 shadow-2xl relative overflow-hidden`}
        style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
      >
        {/* Inner glow effect */}
        <div className={`absolute inset-0 ${colorTheme.glow} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
        
        <span className={`font-bold text-xs sm:text-sm text-center px-3 z-10 text-gray-400 group-hover:${colorTheme.text} transition-colors duration-300`}>
          {name}
        </span>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="w-full py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="text-center mb-20 relative">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-white tracking-tight">
              Cluster <span className="text-teal-400">Nodes</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto bg-black/40 backdrop-blur-md p-5 rounded-2xl border border-white/5 shadow-2xl">
              A visualization of my technical stack. Each node represents a microservice or tool in my development architecture.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col gap-16">
          {skillsData.map((category, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {/* Category Header */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-8 flex flex-col items-center gap-3"
              >
                <div className={`px-4 py-1.5 rounded-full border border-white/10 ${category.colorTheme.glow.replace('/30', '/10')} backdrop-blur-sm`}>
                  <h3 className={`text-lg sm:text-xl font-bold tracking-widest uppercase ${category.colorTheme.text}`}>
                    {category.category}
                  </h3>
                </div>
              </motion.div>

              {/* Hexagon Cluster */}
              <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 max-w-4xl mx-auto">
                {category.skills.map((skill, skillIdx) => (
                  <HexagonNode 
                    key={skillIdx} 
                    name={skill} 
                    colorTheme={category.colorTheme} 
                    index={skillIdx} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
