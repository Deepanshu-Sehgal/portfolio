"use client";

import React from 'react';
import { Activity } from "lucide-react";
import { motion } from "framer-motion";

const iframeSrcs = [
  "https://www.linkedin.com/embed/feed/update/urn:li:share:7274402553889529856?collapsed=1",
  "https://www.linkedin.com/embed/feed/update/urn:li:share:7274405552519045120?collapsed=1",
  "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7319235511162740737?compact=1",
  "https://www.linkedin.com/embed/feed/update/urn:li:share:7377047166399393792?collapsed=1",
  "https://www.linkedin.com/embed/feed/update/urn:li:share:7253662087439081472?collapsed=1",
  "https://www.linkedin.com/embed/feed/update/urn:li:share:7204114240675143682?collapsed=1"
];

const FeaturedPosts = () => {
  return (
    <section id="featured-posts" className="w-full py-24 relative z-10 overflow-hidden bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-center sm:justify-start gap-4 mb-16">
          <div className="p-3 bg-teal-500/10 rounded-xl border border-teal-500/20">
            <Activity className="text-teal-400" size={32} />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono tracking-tight text-white">
            ~/Network_Activity
          </h2>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto pb-16 pt-4 px-4 sm:px-8 gap-8 sm:gap-10 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        
        {/* Empty padding block for the start to align with max-w-7xl on very large screens */}
        <div className="w-[calc((100vw-80rem)/2)] shrink-0 hidden xl:block"></div>

        {iframeSrcs.map((src, index) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={index} 
            className="snap-center shrink-0 w-[320px] sm:w-[400px] flex flex-col group"
          >
            {/* Server Monitor Hardware Container */}
            <div className="bg-[#111218] p-3 sm:p-4 rounded-xl border border-white/5 shadow-2xl relative">
              {/* Inner bezel */}
              <div className="bg-[#050505] border-[4px] border-[#1a1b26] rounded-lg overflow-hidden h-[500px] sm:h-[550px] relative shadow-inner">
                {/* Screen Reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-10 opacity-50"></div>
                
                {/* 
                  The LinkedIn iframe is naturally white/bright. 
                  By framing it inside this dark bezel, we isolate it so it doesn't break our dark theme.
                */}
                <iframe 
                  src={src} 
                  height="100%" 
                  width="100%" 
                  frameBorder="0" 
                  allowFullScreen="" 
                  loading="lazy"
                  title={`Embedded LinkedIn post ${index + 1}`}
                  className="w-full h-full relative z-0 bg-white"
                ></iframe>
              </div>

              {/* Hardware Status LEDs */}
              <div className="mt-4 flex items-center justify-between px-2">
                <div className="flex gap-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.8)]"></div>
                    <span className="text-[10px] text-gray-500 font-mono tracking-widest font-bold">PWR</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.8)] animate-pulse"></div>
                    <span className="text-[10px] text-gray-500 font-mono tracking-widest font-bold">NET</span>
                  </div>
                </div>
                <div className="text-[10px] text-gray-600 font-mono tracking-widest font-bold">
                  NODE-0{index + 1}
                </div>
              </div>
            </div>
            
            {/* Server Rack mounting brackets (visual only) */}
            <div className="w-full h-4 flex justify-between mt-1 px-4 opacity-50">
               <div className="w-6 h-full border-l-2 border-r-2 border-[#111218] bg-[#0a0a0f] rounded-b flex flex-col justify-evenly items-center py-1">
                 <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
               </div>
               <div className="w-6 h-full border-l-2 border-r-2 border-[#111218] bg-[#0a0a0f] rounded-b flex flex-col justify-evenly items-center py-1">
                 <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
               </div>
            </div>
          </motion.div>
        ))}

        {/* Empty padding block for the end */}
        <div className="w-[5vw] shrink-0 xl:w-[calc((100vw-80rem)/2)]"></div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
