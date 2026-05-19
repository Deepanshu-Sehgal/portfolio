"use client";

// src/components/AboutSection.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const counters = [
    { label: "Projects", value: 10 },
    { label: "Hackathons", value: 2 },
    { label: "Years of Coding", value: 3 },
    { label: "Tech Stack", value: 15 },
  ];

  const tabs = {
    "Languages": ["Python", "TypeScript", "Java", "JavaScript"],
    "Frameworks": ["SpringBoot", "MERN Stack", "Redux Toolkit", "FastAPI"],
    "Databases": ["PostgreSQL", "SQL", "MongoDB", "Redis", "Kafka", "Vector DBs"],
    "Cloud & DevOps": [
      "AWS", "Azure", "GCP",
      "Docker", "Kubernetes", "Jenkins",
      "GitHub Actions", "Argo CD",
    ],
    "Infrastructure": [
      "Terraform", "Ansible", "Prometheus",
      "Grafana", "Nginx",
    ],
    "Concepts": [
      "System Design", "Linux", "Python Scripting",
      "Claude Code", "NLP", "LangChain",
    ],
  };

  const [activeTab, setActiveTab] = useState("Languages");
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
      className="min-h-screen overflow-y-auto bg-transparent text-white px-4 sm:px-6 lg:px-20 py-28 relative z-10"
    >
      {/* Header */}
      <div className="text-center mb-20 px-2">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-500 tracking-tight">
          About Me
        </h2>
        <p className="text-base sm:text-lg text-gray-400 mt-4 max-w-3xl mx-auto leading-relaxed bg-[#1a1b2e]/60 p-6 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(79,70,229,0.1)]">
          Full Stack Developer with <span className="text-indigo-300 font-semibold">1+ years of experience</span> building scalable <span className="text-pink-300 font-semibold">MERN</span> and <span className="text-pink-300 font-semibold">Java</span> applications,
          complemented by strong <span className="text-purple-300 font-semibold">DevOps</span> capabilities in CI/CD automation and cloud infrastructure
          delivering high-availability systems with measurable performance gains.
        </p>
      </div>

      {/* Animated Counters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 max-w-5xl mx-auto px-4">
        {counters.map((counter, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 + idx * 0.1 }}
            className="bg-[#1a1b2e]/80 rounded-2xl p-6 text-center shadow-[0_10px_30px_rgba(79,70,229,0.1)] hover:shadow-[0_10px_40px_rgba(79,70,229,0.25)] border border-white/10 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-white to-indigo-300 group-hover:to-purple-400 transition-colors">
              {countValues[counter.label] || 0}+
            </div>
            <div className="text-sm sm:text-base text-gray-400 mt-3 font-medium tracking-wide uppercase">{counter.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Tabs / Skills Summary */}
      <div className="w-full max-w-4xl mx-auto mb-24 px-4">
        <h3 className="text-3xl font-bold mb-8 text-center text-white">Technical Overview</h3>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {Object.keys(tabs).map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 text-sm sm:text-base font-medium rounded-full transition-all whitespace-nowrap shadow-sm border ${
                activeTab === tab
                  ? "bg-indigo-600 border-indigo-400 text-white shadow-[0_0_15px_rgba(79,70,229,0.4)]"
                  : "bg-[#1a1b2e]/60 border-white/10 text-gray-400 hover:bg-[#1a1b2e] hover:text-white hover:border-indigo-500/50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[#1a1b2e]/80 p-8 rounded-2xl shadow-xl border border-white/10 min-h-[160px] flex items-center justify-center"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {tabs[activeTab].map((item, i) => (
              <span 
                key={i} 
                className="px-4 py-2 bg-black/40 border border-white/5 rounded-lg text-sm sm:text-base text-gray-200 font-medium shadow-sm hover:border-indigo-500/40 hover:bg-indigo-900/20 hover:text-indigo-200 transition-colors cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="w-full max-w-3xl mx-auto px-4">
        <h3 className="text-3xl font-bold mb-12 text-center text-white">My Journey</h3>
        <div className="relative border-l-2 border-indigo-500/30 pl-8 space-y-10 ml-2 md:ml-0">
          {[
            { year: "2023", title: "Started MCA & CyberThon Finalist", desc: "Began Master's at Amity University. Ranked Top 13 at CyberThon 2023 – NLP-based police complaint automation." },
            { year: "2024", title: "MERN Intern & Published Author", desc: "MERN Stack Developer Intern at Insyrge, Chandigarh. Published book chapter on AI-Driven Personalized Shopping at ICISRI 2024." },
            { year: "2025", title: "Junior SE → Full Stack Developer", desc: "Junior Software Engineer at Deftsoft, then Full Stack Developer at Embtel Solutions – built 8+ production apps with CI/CD." },
            { year: "2026", title: "DevOps & Cloud Certifications", desc: "Earned DevOps, AWS, Docker & Kubernetes certifications. Focused on building scalable, fault-tolerant cloud-native systems." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-[#0b0c10] border-2 border-indigo-500 shadow-[0_0_10px_rgba(79,70,229,0.5)] group-hover:bg-indigo-500 transition-colors"></div>
              
              <div className="bg-[#1a1b2e]/80 p-6 rounded-2xl border border-white/10 hover:border-indigo-500/30 hover:shadow-[0_10px_30px_rgba(79,70,229,0.15)] transition-all duration-300">
                <div className="inline-block px-3 py-1 mb-3 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold text-xs sm:text-sm border border-indigo-500/30">
                  {item.year}
                </div>
                <div className="text-white text-lg sm:text-xl font-bold mb-2">{item.title}</div>
                <div className="text-gray-400 text-sm sm:text-base leading-relaxed">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;