"use client";

import React, { useEffect, useState } from "react";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";

const PipelineVisualizer = ({ pipeline }) => {
  const [activeStage, setActiveStage] = useState(0);

  // Simulate pipeline execution
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev >= pipeline.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [pipeline.length]);

  return (
    <div className="w-full mt-8 pt-6 border-t border-white/10" style={{ transform: "translateZ(40px)" }}>
      <h4 className="text-xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
        CI/CD Pipeline Architecture
      </h4>

      {/* Pipeline Container */}
      <div className="relative w-full overflow-x-auto pb-4 custom-scrollbar">
        <div className="flex items-center min-w-max px-2">
          {pipeline.map((stage, index) => {
            const IconComponent = Icons[stage.icon] || Icons.Circle;
            const isActive = index === activeStage;
            const isCompleted = index < activeStage;
            
            return (
              <React.Fragment key={index}>
                {/* Node */}
                <div className="relative flex flex-col items-center justify-center group z-10 w-24">
                  <motion.div
                    animate={{
                      scale: isActive ? 1.2 : 1,
                      boxShadow: isActive 
                        ? "0 0 20px rgba(45, 212, 191, 0.6)" 
                        : "0 0 0px rgba(0,0,0,0)",
                    }}
                    transition={{ duration: 0.3 }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300
                      ${isCompleted ? 'bg-teal-500/20 border-teal-400' : 
                        isActive ? 'bg-indigo-500/30 border-indigo-400' : 'bg-black/40 border-white/20'}
                    `}
                  >
                    <IconComponent 
                      size={20} 
                      className={`
                        ${isCompleted ? 'text-teal-400' : 
                          isActive ? 'text-white' : 'text-gray-500'}
                      `} 
                    />
                  </motion.div>
                  
                  {/* Tooltip / Label */}
                  <span className={`mt-3 text-[10px] sm:text-xs text-center font-mono transition-colors duration-300 px-1
                    ${isActive ? 'text-teal-300 font-bold' : isCompleted ? 'text-gray-300' : 'text-gray-500'}
                  `}>
                    {stage.name}
                  </span>
                  
                  {/* Status Indicator */}
                  {isCompleted && (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 bg-teal-500 rounded-full p-0.5 border border-black"
                    >
                      <Icons.Check size={10} className="text-white" />
                    </motion.div>
                  )}
                  {isActive && (
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                      className="absolute -top-1 -right-1 bg-indigo-500 rounded-full p-0.5 border border-black"
                    >
                      <Icons.Loader size={10} className="text-white" />
                    </motion.div>
                  )}
                </div>

                {/* Connecting Line */}
                {index < pipeline.length - 1 && (
                  <div className="flex-1 w-8 sm:w-16 h-[2px] bg-white/10 mx-1 relative overflow-hidden mt-[-30px]">
                    {/* Glowing pulse animation that runs across the line */}
                    {(isCompleted || isActive) && (
                      <motion.div 
                        initial={{ x: "-100%" }}
                        animate={isCompleted ? { x: "100%" } : { x: ["-100%", "100%"] }}
                        transition={isCompleted ? { duration: 0 } : { repeat: Infinity, duration: 1, ease: "linear" }}
                        className={`absolute top-0 bottom-0 w-1/2 ${isCompleted ? 'bg-teal-400' : 'bg-gradient-to-r from-transparent via-indigo-400 to-transparent'}`}
                      />
                    )}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PipelineVisualizer;
