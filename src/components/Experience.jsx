"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Experience = ({ data }) => {
  return (
    <section id="experience" className="text-white py-20 px-6 sm:px-8 md:px-16">
      <h2 className="text-3xl sm:text-4xl font-bold mb-14 text-center sm:text-left">
        Experience
      </h2>
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 via-white to-transparent hidden sm:block" />

        <div className="space-y-14">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 relative"
            >
              {/* Icon */}
              <div className="flex-shrink-0 z-10 bg-indigo-500 text-white p-3 rounded-full shadow-lg shadow-indigo-500/30">
                <Briefcase size={20} />
              </div>

              {/* Content card */}
              <div className="bg-[#1a1b2e]/80  border border-white/10 rounded-xl p-6 w-full shadow-lg hover:shadow-[0_0_25px_rgba(79,70,229,0.3)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {item.role}
                    </h3>
                    <p className="text-indigo-400 font-medium text-sm sm:text-base">
                      {item.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full text-xs sm:text-sm border border-indigo-500/20">
                      {item.duration}
                    </span>
                    <p className="text-gray-500 text-xs mt-1">{item.location}</p>
                  </div>
                </div>

                <ul className="space-y-3 mt-4">
                  {item.points.map((point, i) => {
                    // Highlight metrics (numbers, %, +) and key terms
                    const highlightedPoint = point.split(/(\d+(?:\.\d+)?%?|\d+\+|RESTful APIs|CI\/CD|AWS|Jenkins|Docker|Spring Boot|Node\.js|MERN|MongoDB)/g).map((part, index) => {
                      if (/(\d+(?:\.\d+)?%?|\d+\+)/.test(part)) {
                        return <span key={index} className="text-green-400 font-bold">{part}</span>;
                      } else if (/(RESTful APIs|CI\/CD|AWS|Jenkins|Docker|Spring Boot|Node\.js|MERN|MongoDB)/.test(part)) {
                        return <span key={index} className="text-pink-300 font-semibold">{part}</span>;
                      }
                      return part;
                    });

                    return (
                      <li
                        key={i}
                        className="text-gray-300 text-sm sm:text-base leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-indigo-400 mt-1 flex-shrink-0">▸</span>
                        <span>{highlightedPoint}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
