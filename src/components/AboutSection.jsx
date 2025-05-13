// src/components/AboutSection.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const counters = [
    { label: "Projects", value: 20 },
    { label: "Hackathons", value: 10 },
    { label: "Years of Coding", value: 3 },
    { label: "Tech Stack", value: 15 },
  ];

  const tabs = {
    "Tech Stack": ["React", "Node.js", "Spring Boot", "MongoDB", "Tailwind CSS"],
    Tools: ["Git", "Docker", "Postman", "Swagger", "Figma"],
    Domains: ["AI/ML", "Computer Vision", "NLP", "Cloud", "Full-Stack Dev"],
  };

  const [activeTab, setActiveTab] = useState("Tech Stack");
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
      className="min-h-screen overflow-y-auto bg-[#111111] text-white px-4 sm:px-6 lg:px-20 py-20"
    >
      {/* Header */}
      <div className="text-center mb-16 px-2">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-wide">About Me</h2>
        <p className="text-gray-400 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
          Passionate full-stack developer combining clean architecture with AI to solve real-world problems.
        </p>
      </div>

      {/* Animated Counters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 px-4">
        {counters.map((counter, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 + idx * 0.2 }}
            className="bg-black rounded-lg p-6 text-center shadow-lg shadow-gray-500/50 border-b-2 border-gray-500"
          >
            <div className="text-2xl sm:text-3xl font-bold">{countValues[counter.label] || 0}+</div>
            <div className="text-xs sm:text-sm text-gray-100 mt-2">{counter.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Tabs */}
      <div className="w-full max-w-3xl mx-auto mb-20 px-4">
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {Object.keys(tabs).map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm rounded-full transition whitespace-nowrap ${
                activeTab === tab
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-gray-800 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="bg-black p-6 rounded-md shadow-lg shadow-gray-500/50 border-gray-500 border-b-2">
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm sm:text-base">
            {tabs[activeTab].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Timeline */}
      <div className="w-full max-w-3xl mx-auto px-4">
        <h3 className="text-2xl font-semibold mb-6 text-center">My Journey</h3>
        <div className="border-l-2 border-white pl-6 space-y-6">
          {[
            { year: "2022", title: "Started Full-Stack Development", desc: "Learned MERN and Java Spring Boot" },
            { year: "2023", title: "Built AI & NLP Projects", desc: "Top 13 in CyberThon by Chandigarh Police" },
            { year: "2024", title: "YOLOv8 & GPT-4 Projects", desc: "Real-time hospital system & HR automation" },
            { year: "2025", title: "Advanced AI + Cloud", desc: "Built scalable systems with AWS, Docker, and FastAPI" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              <div className="text-sky-500 font-semibold text-sm sm:text-base">{item.year}</div>
              <div className="text-white text-base sm:text-lg font-bold">{item.title}</div>
              <div className="text-gray-400 text-xs sm:text-sm">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;