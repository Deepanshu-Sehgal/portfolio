"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_SEQUENCE = [
  "INIT: version 2.88 booting",
  "[ OK ] Mounting local filesystems...",
  "[ OK ] Starting network manager...",
  "[ OK ] Starting deepanshuOS core services...",
  "Loading DevOps environment...",
  "[ OK ] Initializing Docker daemon",
  "[ OK ] Connecting to AWS (us-east-1)",
  "[ OK ] Bootstrapping Kubernetes Cluster (EKS)",
  "[ OK ] Deploying CI/CD Pipelines (Jenkins, ArgoCD)",
  "[ OK ] Starting Prometheus & Grafana Monitoring",
  "Environment successfully deployed.",
  "Launching Portfolio UI...",
];

export default function TerminalLoader({ onComplete }) {
  const [lines, setLines] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Prevent scrolling while booting
    document.body.style.overflow = "hidden";

    if (currentIndex < BOOT_SEQUENCE.length) {
      // Calculate a random delay between lines to simulate real loading
      // Make the initial lines faster, the middle lines slower
      let delay = Math.random() * 100 + 50; 
      if (currentIndex > 4 && currentIndex < 10) {
        delay = Math.random() * 200 + 150; // Slower for "heavy" DevOps tasks
      }

      const timer = setTimeout(() => {
        setLines((prev) => [...prev, BOOT_SEQUENCE[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timer);
    } else {
      // Once all lines are printed, wait a brief moment then complete
      const timer = setTimeout(() => {
        document.body.style.overflow = "unset";
        onComplete();
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] bg-black text-[#00ff00] font-mono p-4 sm:p-8 md:p-12 overflow-hidden flex flex-col justify-end"
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col justify-end h-full">
        {lines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1 }}
            className="text-xs sm:text-sm md:text-base mb-1"
          >
            {line.startsWith("[ OK ]") ? (
              <span>
                <span className="text-white">[ </span>
                <span className="text-[#00ff00]">OK</span>
                <span className="text-white"> ]</span>
                {line.substring(6)}
              </span>
            ) : (
              line
            )}
          </motion.div>
        ))}
        {/* Blinking cursor */}
        <motion.div
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="w-3 h-5 bg-[#00ff00] mt-1 inline-block"
        />
      </div>
    </motion.div>
  );
}
