import React from "react";

export default function SkillCard({ label, icons }) {
  return (
    <div className="card-container w-full mb-4 sm:mb-6">
      <div className="card-wrapper h-24 sm:h-28">
        <div className="front-card px-6 py-4">
          <p className="text-sm sm:text-base md:text-lg tracking-widest">{label}</p>
        </div>
        <div className="back-card text-sm sm:text-base md:text-lg px-4 flex-wrap gap-2">
          {icons.map((icon, idx) => (
            <span className="text-black" key={idx}>
              {icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
