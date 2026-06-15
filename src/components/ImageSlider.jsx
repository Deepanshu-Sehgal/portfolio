"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageSlider({ images, altTitle = "" }) {
  // Normalize images to an array
  const imageArray = Array.isArray(images) ? images : (images ? [images] : []);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (imageArray.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageArray.length);
    }, 4000); // Auto scroll every 4 seconds
    return () => clearInterval(interval);
  }, [imageArray.length]);

  if (imageArray.length === 0) {
    return (
      <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-mono text-sm border-b border-white/5 bg-black/40">
        No Image Available
      </div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Dark overlay for better text contrast if needed */}
      <div className="absolute inset-0 bg-indigo-500/10 z-10 pointer-events-none mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700"></div>
      
      <AnimatePresence initial={false}>
        <motion.img 
          key={currentIndex}
          src={imageArray[currentIndex]}
          alt={`${altTitle} Screenshot ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-1000 ease-in-out"
          style={{ filter: "var(--theme-inverse-filter, none)" }}
        />
      </AnimatePresence>
      
      {/* Dots Indicator */}
      {imageArray.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
          {imageArray.map((_, i) => (
            <div 
              key={i} 
              className={`w-2 h-2 rounded-full transition-colors duration-300 shadow-sm ${i === currentIndex ? 'bg-white scale-110' : 'bg-white/30'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
