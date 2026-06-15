"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { MapPin, Briefcase, Code, Github, Linkedin, Mail, Terminal } from "lucide-react";
import Image from "next/image";
import profile from "../assets/profile.png";

// Terminal typing effect component
const MiniTerminal = () => {
  const [text, setText] = useState("");
  const fullText = "const deepanshu = {\n  role: 'DevOps Engineer',\n  stack: ['AWS', 'K8s', 'Docker', 'Jenkins'],\n  mission: 'Automate Everything'\n};";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#050505] rounded-xl p-4 sm:p-6 border border-white/10 font-mono text-sm sm:text-base text-green-400 shadow-inner h-full flex flex-col relative overflow-hidden min-h-[200px]">
      <div className="absolute top-0 left-0 w-full h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="mt-8 overflow-hidden">
        <pre className="whitespace-pre-wrap">{text}<span className="animate-pulse">_</span></pre>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center relative pt-24 pb-12 sm:pt-32 sm:pb-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[minmax(200px,_auto)]">
          
          {/* BENTO 1: MAIN INFO (Spans 2-3 columns depending on screen) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 lg:col-span-3 bg-[#0a0a0f] border border-white/10 rounded-[2rem] p-8 sm:p-10 flex flex-col justify-center relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-600/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-teal-300 to-blue-600 drop-shadow-lg leading-tight tracking-tight mb-2">
                Deepanshu Sehgal
              </h1>
              <h2 className="text-xl sm:text-2xl text-teal-400 font-bold tracking-wide mb-6">
                DevOps Engineer & Full Stack Developer
              </h2>
              
              <p className="text-gray-300 leading-relaxed max-w-3xl text-sm sm:text-base lg:text-lg mb-8">
                Specializing in robust cloud architectures, <strong className="text-teal-400 font-bold">CI/CD automation</strong>, and Infrastructure as Code. Bridging the gap between software engineering and IT operations to deliver high-availability, zero-downtime systems.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <MagneticButton
                  as="a"
                  href="https://drive.google.com/file/d/1zFMtFYLpwyIRxs_B-0qqgyRqjHJWaOSP/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-teal-600/80 hover:bg-teal-500 text-white font-bold rounded-xl px-6 py-3 border border-teal-400/50 shadow-[0_0_15px_rgba(20,184,166,0.3)] transition-all"
                >
                  Download CV
                </MagneticButton>
                
                <a href="https://github.com/deepanshu-sehgal01" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/15 border border-white/10 rounded-xl transition-all shadow-md">
                  <Github size={22} className="text-white" />
                </a>
                <a href="https://linkedin.com/in/Deepanshu-Sehgal" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/15 border border-white/10 rounded-xl transition-all shadow-md">
                  <Linkedin size={22} className="text-white" />
                </a>
                <a href="mailto:deepanshusehgal1506@gmail.com" className="p-3 bg-white/5 hover:bg-white/15 border border-white/10 rounded-xl transition-all shadow-md">
                  <Mail size={22} className="text-white" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* BENTO 2: PROFILE IMAGE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-1 lg:col-span-1 bg-[#0a0a0f] border border-white/10 rounded-[2rem] overflow-hidden relative min-h-[300px] shadow-2xl group flex items-center justify-center p-6"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-700"></div>
            <Image
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out shadow-2xl"
              priority
            />
          </motion.div>

          {/* BENTO 3: TERMINAL */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1 lg:col-span-2 bg-[#0a0a0f] border border-white/10 rounded-[2rem] p-6 sm:p-8 shadow-2xl flex flex-col"
          >
             <MiniTerminal />
          </motion.div>

          {/* BENTO 4: QUICK STATS */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 lg:col-span-2 bg-[#0a0a0f] border border-white/10 rounded-[2rem] p-8 sm:p-10 shadow-2xl flex flex-col justify-center relative overflow-hidden group"
          >
             {/* Subtle background pattern */}
             <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }}></div>
             
             <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
               <Terminal size={22} className="text-teal-400" /> System Status
             </h3>
             <div className="flex flex-col sm:flex-row gap-4 w-full">
                <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-3 hover:bg-white/10 transition-colors">
                  <MapPin className="text-teal-400" size={24} />
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Location</div>
                    <div className="font-bold text-white mt-1">Mohali, IN</div>
                  </div>
                </div>
                <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-3 hover:bg-white/10 transition-colors">
                  <Briefcase className="text-blue-400" size={24} />
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Experience</div>
                    <div className="font-bold text-white mt-1">1+ Years</div>
                  </div>
                </div>
                <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-3 hover:bg-white/10 transition-colors">
                  <Code className="text-indigo-400" size={24} />
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Projects</div>
                    <div className="font-bold text-white mt-1">8+ Deployed</div>
                  </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
