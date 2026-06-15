import React from "react";
import { Award, ExternalLink } from "lucide-react";

const Achievements = ({ data }) => {
  return (
    <section id="achievements" data-aos="zoom-in" className="text-white py-20 px-6 sm:px-8 md:px-16">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center sm:text-left">
        Achievements
      </h2>
      <div className="space-y-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 bg-[#1a1b2e]/80 border border-white/10 rounded-xl hover:shadow-[0_0_20px_rgba(20,184,166,0.2)] hover:border-teal-500/30 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="bg-teal-500 text-white p-3 rounded-full self-start shadow-[0_0_15px_rgba(20,184,166,0.5)] flex-shrink-0">
                <Award size={20} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-teal-300 text-sm sm:text-base mt-1">
                  {item.subtitle}
                </p>
              </div>
            </div>
            
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 sm:mt-0 flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-teal-600/80 hover:bg-teal-500 text-white text-sm font-medium rounded-lg transition-colors border border-teal-500/50 shadow-sm hover:shadow-[0_0_15px_rgba(20,184,166,0.4)]"
              >
                View <ExternalLink size={16} />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
