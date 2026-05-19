import React from "react";

export default function SkillCard({ label, icons }) {
  return (
    <div className="w-full h-full  bg-[#1a1b2e]/80 border border-white/10 rounded-2xl p-6 shadow-[0_0_15px_rgba(79,70,229,0.05)] hover:shadow-[0_0_25px_rgba(79,70,229,0.2)] hover:-translate-y-1 hover:border-indigo-500/30 transition-all duration-300 flex flex-col group">
      <h3 className="text-xl font-bold text-indigo-300 mb-5 tracking-wide group-hover:text-indigo-200 transition-colors">
        {label}
      </h3>
      <div className="flex flex-wrap gap-2.5 mt-auto">
        {icons.map((icon, idx) => (
          <span 
            key={idx} 
            className="px-3 py-1.5 bg-black/40 border border-white/10 rounded-lg text-sm text-gray-300 font-medium hover:border-indigo-400 hover:text-white hover:bg-indigo-500/20 transition-all cursor-default shadow-sm hover:shadow-indigo-500/20"
          >
            {icon}
          </span>
        ))}
      </div>
    </div>
  );
}
