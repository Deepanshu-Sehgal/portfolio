"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitCommit, GitMerge, GitBranch } from "lucide-react";

// Generate fake commit hashes based on string
const generateHash = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hex = (hash >>> 0).toString(16);
  return hex.substring(0, 7).padStart(7, '0');
};

const Experience = ({ data }) => {
  return (
    <section id="experience" className="text-white py-24 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-16">
        <div className="p-3 bg-teal-500/10 rounded-xl border border-teal-500/20">
          <GitBranch className="text-teal-400" size={32} />
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono tracking-tight">
          ~/Experience
        </h2>
      </div>

      <div className="relative font-mono">
        {/* The main git branch line */}
        <div className="absolute left-[27px] top-6 bottom-0 w-[2px] bg-[#2a2c3a] hidden md:block" />

        <div className="space-y-16">
          {data.map((item, index) => {
            const hash = generateHash(item.company + item.role);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col md:flex-row items-start gap-6 md:gap-10 relative group"
              >
                {/* Commit Node */}
                <div className="hidden md:flex flex-shrink-0 z-10 w-14 h-14 rounded-full bg-[#0a0a0f] border-[3px] border-[#2a2c3a] items-center justify-center group-hover:border-teal-500 transition-colors duration-500 shadow-xl mt-1">
                  <GitCommit size={24} className="text-[#4a4c5a] group-hover:text-teal-400 transition-colors duration-500" />
                </div>

                {/* Commit Content Container */}
                <div className="w-full">
                  
                  {/* Commit Meta Info */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-xs sm:text-sm text-gray-500 bg-black/40 inline-flex px-4 py-2 rounded-full border border-white/5 backdrop-blur-sm shadow-sm">
                    <span className="text-yellow-500 font-bold tracking-wider">commit {hash}</span>
                    <span className="hidden sm:inline opacity-50">|</span>
                    <span className="text-teal-400/80">Author: Deepanshu Sehgal</span>
                    <span className="hidden sm:inline opacity-50">|</span>
                    <span className="text-blue-400/80">Date: {item.duration}</span>
                  </div>

                  {/* Terminal Window Card */}
                  <div className="bg-[#111218] border border-white/5 rounded-2xl overflow-hidden shadow-2xl group-hover:border-white/10 group-hover:shadow-[0_0_30px_rgba(20,184,166,0.1)] transition-all duration-500">
                    
                    {/* Fake Window Header */}
                    <div className="bg-[#1a1b26] px-5 py-3 border-b border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3.5 h-3.5 rounded-full bg-red-500/80"></div>
                        <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3.5 h-3.5 rounded-full bg-green-500/80"></div>
                      </div>
                      <div className="text-xs text-gray-500 truncate font-semibold tracking-wide">
                        {item.role.toLowerCase().replace(/\s+/g, '-')}.md
                      </div>
                    </div>

                    <div className="p-6 sm:p-8">
                      <div className="mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-white/5 pb-6">
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight font-sans">
                            {item.role}
                          </h3>
                          <p className="text-teal-400 font-medium font-sans text-lg">
                            @ {item.company}
                          </p>
                        </div>
                        <div className="mt-4 sm:mt-0 text-gray-400 text-sm flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                          <GitMerge size={16} /> {item.location}
                        </div>
                      </div>

                      {/* Git Diff Content */}
                      <ul className="space-y-4">
                        {item.points.map((point, i) => {
                          const highlightedPoint = point.split(/(\d+(?:\.\d+)?%?|\d+\+|RESTful APIs|CI\/CD|AWS|Jenkins|Docker|Spring Boot|Node\.js|MERN|MongoDB)/g).map((part, index) => {
                            if (/(\d+(?:\.\d+)?%?|\d+\+)/.test(part)) {
                              return <span key={index} className="text-green-300 font-bold bg-green-900/30 px-1.5 py-0.5 rounded shadow-sm">{part}</span>;
                            } else if (/(RESTful APIs|CI\/CD|AWS|Jenkins|Docker|Spring Boot|Node\.js|MERN|MongoDB)/.test(part)) {
                              return <span key={index} className="text-blue-300 font-semibold">{part}</span>;
                            }
                            return part;
                          });

                          return (
                            <li key={i} className="flex items-start gap-4 text-sm sm:text-base leading-relaxed hover:bg-white/5 p-3 -mx-3 rounded-xl transition-colors duration-300">
                              <span className="text-green-500 font-black select-none mt-0.5 text-lg">+</span>
                              <span className="text-gray-300 tracking-wide">{highlightedPoint}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
