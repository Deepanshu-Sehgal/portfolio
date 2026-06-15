"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Server, Cpu, Box, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

const INITIAL_QUEUE = [
  { id: "java-1", name: "Java Spring Boot", weight: 40, color: "bg-red-500", icon: Server },
  { id: "ml-1", name: "ML Worker", weight: 30, color: "bg-purple-500", icon: Cpu },
  { id: "node-1", name: "Node.js API", weight: 20, color: "bg-green-500", icon: Box },
  { id: "next-1", name: "Next.js SSR", weight: 30, color: "bg-blue-500", icon: Box },
  { id: "redis-1", name: "Redis Cache", weight: 10, color: "bg-orange-500", icon: Database },
  { id: "nginx-1", name: "Nginx Proxy", weight: 10, color: "bg-teal-500", icon: Server },
];

export default function ContainerTetris() {
  const [queue, setQueue] = useState(INITIAL_QUEUE);
  const [nodeContainers, setNodeContainers] = useState([]);
  const [errorText, setErrorText] = useState(null);
  const [shakeNode, setShakeNode] = useState(false);

  const currentUsage = nodeContainers.reduce((sum, container) => sum + container.weight, 0);
  const isOptimized = currentUsage === 100;

  const handleSchedule = (container) => {
    if (currentUsage + container.weight > 100) {
      // OOMKill Error
      setErrorText(`Failed to schedule ${container.name}: Insufficient CPU/Memory!`);
      setShakeNode(true);
      setTimeout(() => setShakeNode(false), 500);
      setTimeout(() => setErrorText(null), 3000);
      return;
    }

    setQueue((prev) => prev.filter((c) => c.id !== container.id));
    setNodeContainers((prev) => [...prev, container]);
    setErrorText(null);
  };

  const handleEvict = (container) => {
    setNodeContainers((prev) => prev.filter((c) => c.id !== container.id));
    setQueue((prev) => [...prev, container]);
  };

  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-4 sm:px-8 relative z-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 tracking-tight flex items-center justify-center gap-3">
          <Box size={36} className="text-orange-400" /> Container Tetris
        </h2>
        <p className="text-gray-400">Schedule containers onto the Node without exceeding 100% capacity. Optimize perfectly to win!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Pending Queue */}
        <div className="bg-[#0f172a]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col h-[500px]">
          <h3 className="text-lg font-bold text-gray-300 mb-4 font-mono flex items-center gap-2">
            PENDING PODS
            <span className="bg-gray-800 text-gray-400 px-2 py-0.5 rounded text-xs">{queue.length}</span>
          </h3>
          
          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar flex flex-col gap-3">
            <AnimatePresence>
              {queue.map((container) => {
                const Icon = container.icon;
                return (
                  <motion.div
                    layoutId={container.id}
                    key={container.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => handleSchedule(container)}
                    className={`${container.color}/20 border ${container.color.replace('bg-', 'border-')} hover:${container.color}/40 p-4 rounded-xl cursor-pointer transition-colors flex items-center justify-between group shadow-lg`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${container.color} text-white shadow-md group-hover:scale-110 transition-transform`}>
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm">{container.name}</p>
                        <p className="text-xs text-gray-400">Click to Schedule</p>
                      </div>
                    </div>
                    <div className="font-mono font-bold text-lg text-white/90">
                      {container.weight}%
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
            
            {queue.length === 0 && (
              <div className="h-full flex items-center justify-center text-gray-500 font-mono text-sm border-2 border-dashed border-gray-700 rounded-xl">
                Queue Empty
              </div>
            )}
          </div>
        </div>

        {/* Kubernetes Node */}
        <div className="bg-[#0f172a]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col h-[500px] relative overflow-hidden">
          
          {/* Header */}
          <div className="flex justify-between items-end mb-4 border-b border-white/10 pb-4 relative z-20">
            <div>
              <h3 className="text-lg font-bold text-white mb-1 font-mono flex items-center gap-2">
                KUBERNETES NODE <Server size={18} className="text-blue-400" />
              </h3>
              <p className="text-xs text-gray-400">Total Capacity: 100% CPU/Mem</p>
            </div>
            <div className="text-right">
              <span className={`text-2xl font-black font-mono ${currentUsage > 80 ? 'text-orange-400' : 'text-emerald-400'}`}>
                {currentUsage}%
              </span>
            </div>
          </div>

          {/* Usage Bar */}
          <div className="w-full h-3 bg-gray-800 rounded-full mb-6 overflow-hidden relative z-20">
            <motion.div 
              animate={{ width: `${currentUsage}%` }}
              className={`h-full ${isOptimized ? 'bg-emerald-400' : currentUsage > 80 ? 'bg-orange-400' : 'bg-blue-500'}`}
            />
          </div>

          {/* Node Container (Stacking Area) */}
          <motion.div 
            animate={shakeNode ? { x: [-10, 10, -10, 10, 0] } : {}}
            transition={{ duration: 0.4 }}
            className={`flex-1 w-full bg-black/40 border-2 rounded-xl flex flex-col-reverse overflow-hidden relative
              ${shakeNode ? 'border-red-500 bg-red-500/10' : isOptimized ? 'border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.2)]' : 'border-gray-800'}
            `}
          >
            {nodeContainers.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-mono text-sm pointer-events-none">
                Node is empty.
              </div>
            )}
            
            <AnimatePresence>
              {nodeContainers.map((container) => {
                const Icon = container.icon;
                return (
                  <motion.div
                    layoutId={container.id}
                    key={container.id}
                    style={{ height: `${container.weight}%` }}
                    onClick={() => handleEvict(container)}
                    className={`${container.color} border-y border-white/20 w-full flex items-center justify-between px-6 cursor-pointer hover:brightness-110 transition-all group overflow-hidden`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={18} className="text-white/90" />
                      <span className="font-bold text-white whitespace-nowrap">{container.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-mono font-bold text-white/90">{container.weight}%</span>
                      <XCircle size={16} className="text-white/50 group-hover:text-white transition-colors" />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Error Message Overlay */}
          <AnimatePresence>
            {errorText && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-lg font-bold shadow-[0_0_20px_rgba(239,68,68,0.5)] flex items-center gap-2 z-50 whitespace-nowrap"
              >
                <AlertTriangle size={18} />
                {errorText}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Success Overlay */}
          <AnimatePresence>
            {isOptimized && (
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500/90 backdrop-blur-md text-white px-8 py-6 rounded-2xl font-bold shadow-[0_0_50px_rgba(16,185,129,0.8)] flex flex-col items-center gap-3 z-50 pointer-events-none"
              >
                <CheckCircle size={48} className="text-white" />
                <span className="text-2xl text-center">Cluster Optimized!</span>
                <span className="text-sm font-normal text-emerald-100 text-center">100% Resource Efficiency</span>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
