import React from "react";
import { Award } from "lucide-react";

const Achievements = ({ data }) => {
  return (
    <section id="achivements" data-aos="zoom-in" className="text-white py-20 px-6 sm:px-8 md:px-16">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center sm:text-left">
        Achievements
      </h2>
      <div className="space-y-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <div className="bg-white text-black p-2 rounded-full self-start">
              <Award size={20} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold">
                {item.title}
              </h3>
              <p className="text-white text-sm sm:text-base">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
