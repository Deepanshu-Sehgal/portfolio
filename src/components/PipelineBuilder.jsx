"use client";

import React, { useState, useEffect } from "react";
import { motion, Reorder } from "framer-motion";
import { GitBranch, Package, CheckSquare, Box, Server, Play, XCircle, CheckCircle, Loader2, GripVertical } from "lucide-react";

const EXPECTED_ORDER = ["checkout", "install", "test", "build", "deploy"];

const INITIAL_STEPS = [
  { id: "deploy", name: "Deploy to EKS", icon: Server, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30" },
  { id: "test", name: "Run Unit Tests", icon: CheckSquare, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/30" },
  { id: "install", name: "NPM Install", icon: Package, color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/30" },
  { id: "checkout", name: "Git Checkout", icon: GitBranch, color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/30" },
  { id: "build", name: "Docker Build", icon: Box, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30" },
];

export default function PipelineBuilder() {
  const [items, setItems] = useState(INITIAL_STEPS);
  const [isExecuting, setIsExecuting] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [stepStatuses, setStepStatuses] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const resetPipeline = () => {
    setIsExecuting(false);
    setCurrentStepIndex(-1);
    setStepStatuses({});
    setErrorMessage(null);
    setIsSuccess(false);
  };

  const triggerPipeline = () => {
    resetPipeline();
    setIsExecuting(true);
    setCurrentStepIndex(0);
  };

  // Pipeline Execution Logic
  useEffect(() => {
    if (!isExecuting || currentStepIndex === -1) return;

    if (currentStepIndex >= items.length) {
      setIsExecuting(false);
      setIsSuccess(true);
      return;
    }

    const currentItem = items[currentStepIndex];

    // Mark current as running
    setStepStatuses((prev) => ({ ...prev, [currentItem.id]: "running" }));

    // Simulate execution time
    const timer = setTimeout(() => {
      // Validation Check
      if (currentItem.id !== EXPECTED_ORDER[currentStepIndex]) {
        // Failed!
        setStepStatuses((prev) => ({ ...prev, [currentItem.id]: "error" }));
        setIsExecuting(false);
        
        // Generate contextual error message
        const expected = EXPECTED_ORDER[currentStepIndex];
        const expectedName = INITIAL_STEPS.find(s => s.id === expected).name;
        setErrorMessage(`Execution Failed: Attempted to run '${currentItem.name}' out of order. Expected '${expectedName}' first.`);
      } else {
        // Success
        setStepStatuses((prev) => ({ ...prev, [currentItem.id]: "success" }));
        setCurrentStepIndex(currentStepIndex + 1);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [currentStepIndex, isExecuting, items]);

  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-4 sm:px-8 relative z-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 tracking-tight flex items-center justify-center gap-3">
          <GitBranch size={36} className="text-purple-400" /> Sort the Pipeline
        </h2>
        <p className="text-gray-400">Drag and drop the blocks into the logically correct CI/CD sequence. Then, trigger the execution!</p>
      </div>

      <div className="bg-[#0f172a]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-10 shadow-[0_0_50px_rgba(168,85,247,0.15)] flex flex-col items-center">
        
        {/* Header & Controls */}
        <div className="w-full max-w-2xl flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${isExecuting ? 'bg-yellow-400 animate-pulse' : isSuccess ? 'bg-emerald-500' : 'bg-gray-500'}`}></div>
            <span className="font-mono text-sm text-gray-300">
              {isExecuting ? 'PIPELINE RUNNING...' : isSuccess ? 'DEPLOYMENT SUCCESSFUL' : 'PIPELINE IDLE'}
            </span>
          </div>
          
          <button
            onClick={triggerPipeline}
            disabled={isExecuting}
            className={`px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-all duration-300
              ${isExecuting 
                ? 'bg-gray-800 text-gray-500 cursor-not-allowed border border-gray-700' 
                : 'bg-purple-500 hover:bg-purple-400 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]'
              }`}
          >
            {isExecuting ? <Loader2 size={18} className="animate-spin" /> : <Play size={18} />}
            Trigger Execution
          </button>
        </div>

        {/* Pipeline Builder Area */}
        <div className="w-full max-w-2xl relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-6 top-6 bottom-6 w-1 bg-gray-800 rounded-full z-0">
            {isExecuting && (
              <motion.div 
                className="w-full bg-purple-500"
                initial={{ height: "0%" }}
                animate={{ height: `${(currentStepIndex / (items.length - 1)) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            )}
          </div>

          <Reorder.Group 
            axis="y" 
            values={items} 
            onReorder={(newOrder) => {
              if (!isExecuting) {
                setItems(newOrder);
                resetPipeline();
              }
            }}
            className="relative z-10 flex flex-col gap-4"
          >
            {items.map((item, index) => {
              const Icon = item.icon;
              const status = stepStatuses[item.id];
              const isRunning = status === "running";
              const isError = status === "error";
              const isSuccessStatus = status === "success";

              return (
                <Reorder.Item 
                  key={item.id} 
                  value={item}
                  drag={!isExecuting}
                  className={`relative flex items-center p-4 rounded-xl border-2 transition-all duration-300 select-none
                    ${!isExecuting ? 'cursor-grab active:cursor-grabbing hover:border-purple-500/50' : 'cursor-default'}
                    ${isError ? 'border-red-500 bg-red-500/10' : 
                      isSuccessStatus ? 'border-emerald-500 bg-emerald-500/10' : 
                      isRunning ? 'border-yellow-400 bg-yellow-400/10 shadow-[0_0_15px_rgba(250,204,21,0.2)]' : 
                      'border-gray-700 bg-[#1e293b]/80'}
                  `}
                >
                  {/* Status Node on the line */}
                  <div className={`absolute -left-[14px] w-8 h-8 rounded-full border-4 border-[#0f172a] flex items-center justify-center z-20 transition-colors duration-300
                    ${isError ? 'bg-red-500' : isSuccessStatus ? 'bg-emerald-500' : isRunning ? 'bg-yellow-400' : 'bg-gray-700'}
                  `}>
                    {isRunning && <Loader2 size={12} className="text-[#0f172a] animate-spin" />}
                    {isSuccessStatus && <CheckCircle size={12} className="text-[#0f172a]" />}
                    {isError && <XCircle size={12} className="text-[#0f172a]" />}
                    {!status && <div className="w-2 h-2 rounded-full bg-[#0f172a]" />}
                  </div>

                  <div className="flex-1 ml-6 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg ${item.bg} ${item.color} ${item.border} border`}>
                        <Icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{item.name}</h4>
                        <p className="text-xs text-gray-400 font-mono">Step {index + 1}</p>
                      </div>
                    </div>
                    
                    {!isExecuting && (
                      <div className="text-gray-500 group-hover:text-gray-300 transition-colors">
                        <GripVertical size={20} />
                      </div>
                    )}
                  </div>
                </Reorder.Item>
              );
            })}
          </Reorder.Group>
        </div>

        {/* Console Output Box */}
        <div className="w-full max-w-2xl mt-8">
          <div className="bg-black/60 rounded-xl border border-gray-800 p-4 font-mono text-sm min-h-[100px]">
            <p className="text-gray-500">{"// Pipeline Console Output"}</p>
            {isExecuting && currentStepIndex !== -1 && !errorMessage && !isSuccess && (
              <p className="text-yellow-400 mt-2">
                &gt; Executing {items[currentStepIndex]?.name}...
                <span className="animate-pulse">_</span>
              </p>
            )}
            {isSuccess && (
              <p className="text-emerald-400 mt-2 flex items-center gap-2">
                &gt; <CheckCircle size={16} /> CI/CD Pipeline executed successfully! Code deployed.
              </p>
            )}
            {errorMessage && (
              <p className="text-red-400 mt-2 flex items-start gap-2">
                &gt; <XCircle size={16} className="mt-0.5 shrink-0" /> {errorMessage}
              </p>
            )}
            {!isExecuting && !errorMessage && !isSuccess && (
              <p className="text-gray-400 mt-2">&gt; Ready. Awaiting trigger...</p>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
