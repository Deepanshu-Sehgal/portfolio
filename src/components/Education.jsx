"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Terminal } from "lucide-react";

// Generate a fake sha256 hash
const generateSha = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hex = (hash >>> 0).toString(16);
  return "sha256:" + hex.padStart(16, '0') + Math.random().toString(16).substring(2, 10);
};

const EducationLine = ({ item, index }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Waiting");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Format the degree into a docker image name
  const imageName = item.degree.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

  useEffect(() => {
    if (isInView) {
      setStatus("Pulling fs layer");
      // Start animation with a delay based on index
      const startDelay = setTimeout(() => {
        setStatus("Downloading");
        
        const interval = setInterval(() => {
          setProgress(prev => {
            if (prev >= 100) {
              clearInterval(interval);
              setStatus("Pull complete");
              return 100;
            }
            return prev + Math.floor(Math.random() * 15) + 5;
          });
        }, 150);

        return () => clearInterval(interval);
      }, 500 + (index * 1200)); // Stagger downloads
      
      return () => clearTimeout(startDelay);
    }
  }, [isInView, index]);

  const progressBar = "=".repeat(Math.floor(progress / 4)) + (progress > 0 && progress < 100 ? ">" : "");
  const emptyBar = " ".repeat(Math.max(0, 25 - Math.floor(progress / 4) - (progress > 0 && progress < 100 ? 1 : 0)));

  return (
    <div ref={ref} className="mb-10 font-mono text-sm sm:text-base border-l-2 border-teal-500/20 pl-4 py-1 relative group hover:border-teal-400 transition-colors duration-300">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-gray-300 mb-2 gap-1 sm:gap-4">
        <div>
          <span className="text-teal-400 font-bold tracking-wide">docker pull</span>{" "}
          <span className="text-white font-semibold">deepanshu/education:{imageName}</span>
        </div>
        <div className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-0 font-bold bg-white/5 px-2 py-0.5 rounded">
          tag: {item.duration}
        </div>
      </div>
      
      {/* Progress Bar simulation */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-400 my-3 bg-black/40 p-3 sm:px-4 sm:py-3 rounded-lg border border-white/5 shadow-inner">
        <div className="w-full sm:w-28 flex-shrink-0 text-blue-400 font-semibold tracking-widest">{generateSha(item.degree).substring(7, 19)}</div>
        <div className="flex-1 flex items-center justify-between sm:justify-start gap-3">
          <span className="w-24 sm:w-32 text-left truncate">{status}</span>
          <span className="hidden sm:inline-block text-teal-500 tracking-widest font-black flex-1 min-w-[200px]">
            [{progressBar}{emptyBar}]
          </span>
          <span className="w-12 text-right font-bold text-white bg-white/5 px-2 py-0.5 rounded">
            {progress >= 100 ? "100" : progress}%
          </span>
        </div>
      </div>

      {/* Extracted Data */}
      {progress >= 100 && (
        <motion.div 
          initial={{ opacity: 0, height: 0, marginTop: 0 }}
          animate={{ opacity: 1, height: "auto", marginTop: 16 }}
          transition={{ duration: 0.4 }}
          className="bg-teal-900/10 border border-teal-500/20 rounded-xl p-5 shadow-lg backdrop-blur-sm"
        >
          <div className="text-green-400 font-bold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
            <span className="bg-green-500/20 p-0.5 rounded text-green-400">✓</span> Successfully extracted layers
          </div>
          <div className="text-white text-xl font-bold font-sans tracking-tight mt-3">
            {item.degree}
          </div>
          <div className="text-teal-300 font-sans font-medium mt-1">
            {item.institution}
          </div>
        </motion.div>
      )}
    </div>
  );
};

const Education = ({ data }) => {
  return (
    <section id="education" className="text-white py-24 px-4 sm:px-8 md:px-16 max-w-5xl mx-auto relative z-10">
      <div className="flex items-center gap-4 mb-16">
        <div className="p-3 bg-teal-500/10 rounded-xl border border-teal-500/20">
          <Terminal className="text-teal-400" size={32} />
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono tracking-tight">
          ~/Education_Base_Images
        </h2>
      </div>

      {/* Main Terminal Window */}
      <div className="bg-[#0b0c10] border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {/* Fake Window Header */}
        <div className="bg-[#1a1b26] px-5 py-4 border-b border-white/5 flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer"></div>
          </div>
          <div className="text-xs sm:text-sm text-gray-500 font-mono flex-1 text-center font-semibold tracking-wider">
            root@deepanshu-os: ~/portfolio
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-5 sm:p-8 min-h-[400px]">
          {data.map((item, index) => (
            <EducationLine key={index} item={item} index={index} />
          ))}
          
          <div className="mt-12 font-mono text-teal-400 font-bold border-t border-white/5 pt-6">
            root@deepanshu-os: ~/portfolio $ <span className="animate-pulse w-2.5 h-5 inline-block bg-teal-400 ml-1 translate-y-1"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
