"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Server, Activity, AlertTriangle, Zap } from "lucide-react";

const NODES = [
  { id: 1, name: "Node-Alpha" },
  { id: 2, name: "Node-Beta" },
  { id: 3, name: "Node-Gamma" },
];

export default function KubernetesSimulator() {
  const [pods, setPods] = useState([]);
  const [desiredPods, setDesiredPods] = useState(5);
  const [traffic, setTraffic] = useState(25);
  const [isSpiking, setIsSpiking] = useState(false);

  // Initialize cluster
  useEffect(() => {
    const initialPods = Array.from({ length: 5 }).map((_, i) => ({
      id: `pod-init-${i}`,
      nodeId: (i % 3) + 1,
      state: "running",
      createdAt: Date.now(),
    }));
    setPods(initialPods);
  }, []);

  // Kubernetes Control Plane Loop (Self-Healing & Auto-Scaling)
  useEffect(() => {
    const interval = setInterval(() => {
      setPods((currentPods) => {
        let newPods = [...currentPods];
        const now = Date.now();

        // 1. Clean up terminated pods
        newPods = newPods.filter((p) => !(p.state === "terminating" && now - p.stateChangeTime > 800));

        // 2. Transition creating -> running
        newPods = newPods.map((p) => {
          if (p.state === "creating" && now - p.stateChangeTime > 1500) {
            return { ...p, state: "running" };
          }
          return p;
        });

        const activePods = newPods.filter((p) => p.state !== "terminating");

        // 3. Auto-scale UP (Scale out)
        if (activePods.length < desiredPods) {
          // Find node with least pods
          const nodeCounts = { 1: 0, 2: 0, 3: 0 };
          activePods.forEach((p) => nodeCounts[p.nodeId]++);
          const leastLoadedNode = Object.keys(nodeCounts).reduce((a, b) => (nodeCounts[a] < nodeCounts[b] ? a : b));

          newPods.push({
            id: `pod-${Math.random().toString(36).substr(2, 6)}`,
            nodeId: parseInt(leastLoadedNode),
            state: "creating",
            stateChangeTime: now,
          });
        }

        // 4. Auto-scale DOWN (Scale in)
        if (activePods.length > desiredPods) {
          const runningPodIndex = newPods.findIndex((p) => p.state === "running");
          if (runningPodIndex !== -1) {
            newPods[runningPodIndex] = { ...newPods[runningPodIndex], state: "terminating", stateChangeTime: now };
          }
        }

        return newPods;
      });
    }, 600); // K8s Control Plane ticks every 600ms

    return () => clearInterval(interval);
  }, [desiredPods]);

  // Traffic & HPA Simulation Loop
  useEffect(() => {
    if (!isSpiking) {
      // Natural traffic fluctuation
      const trafficInterval = setInterval(() => {
        setTraffic((t) => Math.max(15, Math.min(45, t + (Math.random() * 10 - 5))));
      }, 2000);
      return () => clearInterval(trafficInterval);
    } else {
      // Viral Spike Logic
      setTraffic(98);
      setDesiredPods(18); // HPA triggers

      // Check if cluster has stabilized
      const checkStable = setInterval(() => {
        setPods((currentPods) => {
          const runningCount = currentPods.filter((p) => p.state === "running").length;
          if (runningCount >= 18) {
            // Cluster stabilized, cooldown
            setTraffic(30);
            setTimeout(() => {
              setDesiredPods(5); // Scale back down
              setIsSpiking(false);
            }, 3000);
            clearInterval(checkStable);
          }
          return currentPods;
        });
      }, 1000);

      return () => clearInterval(checkStable);
    }
  }, [isSpiking]);

  const killPod = (id) => {
    setPods((currentPods) =>
      currentPods.map((p) => (p.id === id ? { ...p, state: "terminating", stateChangeTime: Date.now() } : p))
    );
  };

  const activePodCount = pods.filter(p => p.state !== "terminating").length;

  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-4 sm:px-8 relative z-10">
      <div className="text-center mb-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 tracking-tight flex items-center justify-center gap-3">
          <Server size={40} className="text-blue-400" /> DevOps Playground
        </h2>
        <p className="text-gray-400">Interactive Kubernetes Cluster. Act as Chaos Monkey by clicking Pods, or simulate viral traffic!</p>
      </div>

      <div className="bg-[#0f172a]/90 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-6 shadow-[0_0_50px_rgba(59,130,246,0.15)] overflow-hidden relative">
        
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 bg-black/40 p-4 rounded-xl border border-white/5">
          <div className="flex items-center gap-6 w-full md:w-auto">
            <div>
              <p className="text-xs text-gray-500 font-mono mb-1">CLUSTER STATUS</p>
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${isSpiking && traffic > 90 ? 'bg-red-500 animate-pulse' : 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]'}`}></div>
                <span className="font-bold text-white">{isSpiking && traffic > 90 ? 'CRITICAL LOAD' : 'HEALTHY'}</span>
              </div>
            </div>
            <div className="h-10 w-[1px] bg-white/10 hidden md:block"></div>
            <div>
              <p className="text-xs text-gray-500 font-mono mb-1">ACTIVE PODS</p>
              <p className="font-bold text-xl text-blue-400">{activePodCount} / {desiredPods}</p>
            </div>
          </div>

          <div className="w-full md:w-64">
            <div className="flex justify-between mb-1">
              <span className="text-xs text-gray-400 font-mono">TRAFFIC LOAD</span>
              <span className={`text-xs font-bold ${traffic > 80 ? 'text-red-400' : 'text-emerald-400'}`}>{Math.round(traffic)}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
              <motion.div 
                animate={{ width: `${traffic}%`, backgroundColor: traffic > 80 ? '#ef4444' : '#10b981' }}
                transition={{ duration: 0.5 }}
                className="h-full"
              />
            </div>
          </div>

          <button 
            onClick={() => !isSpiking && setIsSpiking(true)}
            disabled={isSpiking}
            className={`w-full md:w-auto px-6 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300
              ${isSpiking 
                ? 'bg-gray-800 text-gray-500 cursor-not-allowed border border-gray-700' 
                : 'bg-red-500/20 text-red-400 border border-red-500/50 hover:bg-red-500 hover:text-white hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]'
              }`}
          >
            {isSpiking ? <Zap size={18} className="animate-pulse" /> : <AlertTriangle size={18} />}
            {isSpiking ? "HPA Scaling..." : "Trigger Auto-Scaler (HPA)"}
          </button>
        </div>

        {/* Nodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NODES.map((node) => {
            const nodePods = pods.filter(p => p.nodeId === node.id);
            const cpuUsage = Math.min(100, Math.max(10, nodePods.length * (isSpiking ? 15 : 8) + (Math.random() * 5)));
            
            return (
              <div key={node.id} className="bg-[#1e293b]/80 border border-slate-700 rounded-xl p-4 flex flex-col">
                <div className="flex justify-between items-center mb-4 border-b border-slate-700 pb-2">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Server size={16} />
                    <span className="font-mono text-sm">{node.name}</span>
                  </div>
                  <span className={`text-xs font-mono ${cpuUsage > 85 ? 'text-red-400' : 'text-slate-400'}`}>
                    CPU: {Math.round(cpuUsage)}%
                  </span>
                </div>
                
                <div className="flex-1 min-h-[160px] flex flex-wrap content-start gap-3 p-2 bg-black/20 rounded-lg">
                  <AnimatePresence>
                    {nodePods.map(pod => (
                      <motion.div
                        key={pod.id}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                          scale: 1, 
                          opacity: 1,
                          rotate: pod.state === 'terminating' ? [-10, 10, -10, 10, 0] : 0,
                          backgroundColor: pod.state === 'creating' ? '#eab308' : pod.state === 'terminating' ? '#ef4444' : '#3b82f6'
                        }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => pod.state === 'running' && killPod(pod.id)}
                        className={`
                          w-10 h-10 rounded-md flex items-center justify-center cursor-crosshair shadow-lg
                          ${pod.state === 'running' ? 'hover:bg-red-500 hover:scale-110 transition-transform' : ''}
                        `}
                        title={pod.state === 'running' ? "Click to Kill (Chaos Monkey)" : pod.state}
                      >
                        {pod.state === 'creating' && <Activity size={18} className="text-white animate-spin" />}
                        {pod.state === 'running' && <Box size={20} className="text-white" />}
                        {pod.state === 'terminating' && <AlertTriangle size={18} className="text-white" />}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  
                  {nodePods.length === 0 && (
                    <div className="w-full h-full flex items-center justify-center text-slate-600 text-xs font-mono">
                      No Pods Scheduled
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
