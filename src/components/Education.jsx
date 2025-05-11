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
              <div className="bg-white text-black p-3 rounded-full">
                <GraduationCap size={22} />
              </div>
              {index < data.length - 1 && (
                <div className="h-12 sm:h-full w-[2px] bg-white mt-2" />
              )}
            </div>

            {/* Textual content */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold">{item.degree}</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                {item.institution}
              </p>
              <span className="mt-2 inline-block px-4 py-1 bg-gray-800 rounded-full text-xs sm:text-sm">
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
