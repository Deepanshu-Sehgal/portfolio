"use client";

import React from "react";
import { Server, TerminalSquare, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Achievements = ({ data }) => {
  return (
    <section id="achievements" className="text-white py-24 px-4 sm:px-8 md:px-16 max-w-5xl mx-auto relative z-10">
      <div className="flex items-center gap-4 mb-16">
        <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
          <Server className="text-blue-400" size={32} />
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono tracking-tight">
          ~/Production_Deployments
        </h2>
      </div>

      <div className="space-y-6">
        {data.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 sm:p-8 bg-[#0a0a0f] border border-white/10 rounded-2xl hover:border-blue-500/40 transition-all duration-300 group shadow-lg relative overflow-hidden"
          >
            {/* Background scanning line effect on hover */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-400/50 -translate-y-full group-hover:translate-y-[400px] transition-transform duration-1000 ease-linear shadow-[0_0_15px_rgba(96,165,250,0.8)]"></div>

            <div className="flex flex-col sm:flex-row items-start gap-5 w-full">
              {/* Status Indicator */}
              <div className="flex-shrink-0 flex flex-col items-center gap-2 mt-1 hidden sm:flex">
                <CheckCircle size={28} className="text-green-400 bg-green-500/10 rounded-full" />
              </div>

              {/* Log Content */}
              <div className="flex-1 font-mono w-full">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="px-2.5 py-1 bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-bold rounded shadow-sm flex items-center gap-1.5">
                    <span className="sm:hidden block w-2 h-2 rounded-full bg-green-400"></span> [DEPLOY SUCCESS]
                  </span>
                  <span className="text-gray-500 text-xs sm:text-sm font-bold bg-white/5 px-2 py-0.5 rounded">
                    timestamp: {item.subtitle}
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 font-sans tracking-wide leading-relaxed">
                  {item.title}
                </h3>
                
                <div className="text-gray-400 text-xs sm:text-sm flex items-center gap-2 bg-[#111218] px-3 py-2 rounded-lg border border-white/5 inline-flex shadow-inner">
                  <TerminalSquare size={16} className="text-blue-400" />
                  pipeline_status: <span className="text-green-400 font-bold">passing</span>
                </div>
              </div>
            </div>
            
            {/* Build Logs Button */}
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 md:mt-0 flex-shrink-0 flex items-center gap-2 px-5 py-3 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 text-sm font-bold font-mono rounded-xl transition-all duration-300 border border-blue-500/30 group-hover:border-blue-500/60 shadow-sm w-full md:w-auto justify-center"
              >
                cat build_logs.txt <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            ) : (
              <div className="mt-4 md:mt-0 flex-shrink-0 flex items-center gap-2 px-5 py-3 bg-white/5 text-gray-500 text-sm font-bold font-mono rounded-xl border border-white/5 w-full md:w-auto justify-center cursor-not-allowed">
                logs_archived
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
