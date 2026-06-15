"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Activity, Cpu, HardDrive, Network } from "lucide-react";

const AboutSection = () => {
  const counters = [
    { label: "Active_Workloads", value: 10, suffix: "", icon: <Network size={20} className="text-blue-400" /> },
    { label: "Deployed_Clusters", value: 2, suffix: "", icon: <Cpu size={20} className="text-teal-400" /> },
    { label: "System_Uptime", value: 3, suffix: " YRS", icon: <Activity size={20} className="text-green-400" /> },
    { label: "Installed_Pkgs", value: 15, suffix: "+", icon: <HardDrive size={20} className="text-purple-400" /> },
  ];

  const tabs = {
    "sys.languages": ["Python", "TypeScript", "Java", "JavaScript"],
    "sys.frameworks": ["SpringBoot", "MERN Stack", "Redux Toolkit", "FastAPI"],
    "sys.databases": ["PostgreSQL", "SQL", "MongoDB", "Redis", "Kafka", "Vector DBs"],
    "sys.cloud_devops": [
      "AWS", "Azure", "GCP",
      "Docker", "Kubernetes", "Jenkins",
      "GitHub Actions", "Argo CD",
    ],
    "sys.infrastructure": [
      "Terraform", "Ansible", "Prometheus",
      "Grafana", "Nginx",
    ],
    "sys.modules": [
      "System Design", "Linux", "Python Scripting",
      "Claude Code", "NLP", "LangChain",
    ],
  };

  const [activeTab, setActiveTab] = useState("sys.languages");
  const [countValues, setCountValues] = useState({});

  useEffect(() => {
    counters.forEach(counter => {
      let start = 0;
      const increment = Math.ceil(counter.value / 30);
      const interval = setInterval(() => {
        setCountValues(prev => ({
          ...prev,
          [counter.label]: Math.min((prev[counter.label] || 0) + increment, counter.value),
        }));
      }, 50);
      return () => clearInterval(interval);
    });
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen bg-transparent text-white px-4 sm:px-6 lg:px-20 py-28 relative z-10 font-mono"
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-16 max-w-5xl mx-auto px-4">
        <div className="p-3 bg-teal-500/10 rounded-xl border border-teal-500/20">
          <Terminal className="text-teal-400" size={32} />
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono tracking-tight text-white">
          ~/System_Diagnostics
        </h2>
      </div>

      {/* Neofetch Intro */}
      <div className="max-w-5xl mx-auto px-4 mb-20">
        <div className="bg-[#0b0c10] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col md:flex-row gap-8 items-start relative overflow-hidden">
           
           {/* Background glow */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-[80px] pointer-events-none"></div>
           
           {/* ASCII Art / Logo Placeholder */}
           <div className="text-teal-500 font-bold whitespace-pre hidden sm:block text-[10px] sm:text-xs leading-tight opacity-80 shrink-0">
{`   ____  ____ 
  |  _ \\/ ___|
  | | | \\___ \\
  | |_| |___) |
  |____/|____/

 OS: Deepanshu-OS v2.0
 Kernel: Cloud/DevOps Architect
 Shell: zsh 5.8`}
           </div>
           
           <div className="flex-1 space-y-4 text-sm sm:text-base relative z-10">
             <div className="text-teal-400 font-bold text-xl mb-4 tracking-wide">deepanshu@sehgal.dev</div>
             <div className="text-gray-400 leading-relaxed font-sans text-base sm:text-lg">
               Full Stack Developer with <span className="text-teal-300 font-semibold bg-teal-500/10 px-1 rounded">1+ years of experience</span> building scalable <span className="text-cyan-300 font-semibold">MERN</span> and <span className="text-cyan-300 font-semibold">Java</span> applications,
               complemented by strong <span className="text-blue-300 font-semibold bg-blue-500/10 px-1 rounded">DevOps</span> capabilities in CI/CD automation and cloud infrastructure
               delivering high-availability systems with measurable performance gains.
             </div>
             <div className="mt-6 pt-5 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-500">
                <div><span className="text-indigo-400 font-bold">Architecture:</span> x86_64 Cloud-Native</div>
                <div><span className="text-indigo-400 font-bold">Uptime:</span> 99.99%</div>
                <div><span className="text-indigo-400 font-bold">Location:</span> India (ap-south-1)</div>
                <div><span className="text-indigo-400 font-bold">Status:</span> Actively deploying</div>
             </div>
           </div>
        </div>
      </div>

      {/* System Telemetry Counters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-24 max-w-5xl mx-auto px-4">
        {counters.map((counter, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 + idx * 0.1 }}
            className="bg-[#0b0c10] rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 shadow-lg group flex items-center gap-4 relative overflow-hidden"
          >
            {/* Hover shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <div className="p-3 bg-black/50 rounded-xl border border-white/5 group-hover:border-white/10 transition-colors z-10">
              {counter.icon}
            </div>
            <div className="z-10">
              <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">{counter.label}</div>
              <div className="text-2xl font-extrabold text-white font-sans tracking-tight flex items-baseline">
                {countValues[counter.label] || 0}
                <span className="text-sm text-teal-500 ml-1 font-bold">{counter.suffix}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Installed Dependencies (Tabs) */}
      <div className="w-full max-w-5xl mx-auto mb-24 px-4">
        <h3 className="text-lg sm:text-xl font-bold mb-6 text-gray-400 uppercase tracking-widest border-b border-white/10 pb-4">
          <span className="text-teal-500 mr-2">#</span> Installed Dependencies
        </h3>
        
        <div className="bg-[#0b0c10] border border-white/10 rounded-2xl overflow-hidden flex flex-col md:flex-row min-h-[300px] shadow-2xl">
          {/* Sidebar */}
          <div className="w-full md:w-1/3 bg-[#050505] border-r border-white/5 flex flex-col p-3 gap-1">
            {Object.keys(tabs).map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(tab)}
                className={`text-left px-4 py-3 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-between ${
                  activeTab === tab
                    ? "bg-teal-500/10 text-teal-400 border border-teal-500/20 shadow-sm"
                    : "text-gray-500 hover:bg-white/5 hover:text-gray-300 border border-transparent"
                }`}
              >
                {tab}
                {activeTab === tab && <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.8)]"></div>}
              </button>
            ))}
          </div>
          
          {/* Main Content (JSON style) */}
          <div className="w-full md:w-2/3 p-6 sm:p-8 bg-[#0a0a0f] relative flex items-center">
            <div className="w-full">
              <div className="text-gray-500 text-sm sm:text-base mb-4">{"{"}</div>
              <div className="pl-4 sm:pl-8 space-y-3">
                <div className="text-indigo-400 text-sm sm:text-base font-bold">"{activeTab}": <span className="text-gray-500">{"["}</span></div>
                <motion.div 
                  key={activeTab}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="pl-6 sm:pl-10 flex flex-col gap-2"
                >
                  {tabs[activeTab].map((item, i) => (
                    <div key={i} className="text-green-300 text-sm sm:text-base group flex items-center">
                      <span className="opacity-50">"</span>
                      <span className="font-sans font-medium text-white">{item}</span>
                      <span className="opacity-50">"</span>
                      {i < tabs[activeTab].length - 1 && <span className="text-gray-500">,</span>}
                    </div>
                  ))}
                </motion.div>
                <div className="text-gray-500 text-sm sm:text-base font-bold">{"]"}</div>
              </div>
              <div className="text-gray-500 text-sm sm:text-base mt-4">{"}"}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Kernel Boot Logs (Timeline) */}
      <div className="w-full max-w-5xl mx-auto px-4">
        <h3 className="text-lg sm:text-xl font-bold mb-8 text-gray-400 uppercase tracking-widest border-b border-white/10 pb-4">
          <span className="text-teal-500 mr-2">#</span> Kernel Boot Logs
        </h3>
        
        <div className="bg-[#0b0c10] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-10 left-8 sm:left-10 w-[2px] h-[calc(100%-80px)] bg-gradient-to-b from-teal-500/50 via-white/10 to-transparent"></div>
          
          <div className="space-y-10 relative">
            {[
              { year: "2023.08", level: "INFO", title: "Started MCA & CyberThon Finalist", desc: "Began Master's at Amity University. Ranked Top 13 at CyberThon 2023 – NLP-based police complaint automation." },
              { year: "2024.09", level: "WARN", title: "MERN Intern & Published Author", desc: "MERN Stack Developer Intern at Insyrge, Chandigarh. Published book chapter on AI-Driven Personalized Shopping at ICISRI 2024." },
              { year: "2025.06", level: "SUCCESS", title: "Junior SE → Full Stack Developer", desc: "Junior Software Engineer at Deftsoft, then Full Stack Developer at Embtel Solutions – built 8+ production apps with CI/CD." },
              { year: "2026.01", level: "INFO", title: "DevOps & Cloud Certifications", desc: "Earned DevOps, AWS, Docker & Kubernetes certifications. Focused on building scalable, fault-tolerant cloud-native systems." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15 }}
                className="relative pl-10 sm:pl-16 group"
              >
                {/* Log Node */}
                <div className="absolute left-[2px] sm:left-[10px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0b0c10] border-2 border-white/30 group-hover:border-teal-400 group-hover:bg-teal-400 transition-colors shadow-[0_0_10px_rgba(20,184,166,0)] group-hover:shadow-[0_0_15px_rgba(45,212,191,0.8)] z-10 -ml-[5px]"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                  <span className="text-gray-400 text-xs font-bold bg-white/5 border border-white/10 px-2.5 py-1 rounded shadow-inner">[{item.year}]</span>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ${
                    item.level === 'INFO' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                    item.level === 'WARN' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                    'bg-green-500/10 text-green-400 border border-green-500/20'
                  }`}>
                    {item.level}
                  </span>
                  <span className="text-white text-base sm:text-lg font-bold font-sans tracking-tight">{item.title}</span>
                </div>
                
                <div className="text-gray-400 text-sm sm:text-base font-sans leading-relaxed border-l-2 border-white/5 pl-4 ml-1">
                  {item.desc}
                </div>
              </motion.div>
            ))}
            
            <div className="pl-10 sm:pl-16 flex items-center gap-2 text-teal-500 font-bold mt-8">
              <div className="w-2.5 h-5 bg-teal-400 animate-pulse mt-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;