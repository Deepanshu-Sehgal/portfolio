import React from "react";
import { GraduationCap } from "lucide-react";

const Education = ({ data }) => {
  return (
    <section className="text-white py-20 px-6 sm:px-8 md:px-16">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center sm:text-left">
        Education
      </h2>
      <div className="space-y-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
          >
            {/* Icon and vertical line */}
            <div className="flex flex-col items-center">
              <div className="bg-indigo-500 text-white p-3 rounded-full shadow-[0_0_15px_rgba(79,70,229,0.5)]">
                <GraduationCap size={22} />
              </div>
              {index < data.length && (
                <div className="h-8 sm:h-5 md:h-8 w-[2px] lg:h-10 bg-gradient-to-b from-indigo-500 to-transparent mt-2" />
              )}
            </div>

            {/* Textual content */}
            <div className="bg-[#1a1b2e]/80  border border-white/10 p-5 rounded-xl w-full sm:w-auto flex-1 hover:shadow-[0_0_20px_rgba(79,70,229,0.2)] hover:border-indigo-500/30 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-white">{item.degree}</h3>
              <p className="text-indigo-300 font-medium text-sm sm:text-base mt-1">
                {item.institution}
              </p>
              <span className="mt-3 inline-block px-4 py-1 bg-white/10 text-white border border-white/20 rounded-full text-xs sm:text-sm">
                {item.duration}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
