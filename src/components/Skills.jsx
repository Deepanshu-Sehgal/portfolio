import React from "react";
import SkillsCard from "../cards/SkillsCard";

const Frameworks = [
  "Spring Boot",
  "ReactJS",
  "FastAPI",
  "NodeJS",
  "Flask",
  "Django",
  "ExpressJS",
];

const Cloud = [
  "AWS RDS",
  "AWS EC2",
  "AWS S3",
  "AWS Lambda",
  "Docker",
  "Kubernetes",
];

const Databases = [
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "SQLite",
  "Redis",
  "OracleDB",
];

const Languages = ["Java", "Python", "JavaScript", "HTML", "CSS", "PHP", "C++"];

const webDev = [
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "Tailwind CSS",
  "NodeJS",
  "Flask",
  "Django",
];

const os = ["Windows", "Linux", "MacOS", "Ubuntu"];

const Skills = () => {
  return (
    <section id="skills" data-aos="zoom-in" className="flex flex-col lg:flex-row justify-center items-center gap-10 text-white py-20 px-6 sm:px-10">
      {/* Left */}
      <div className="w-full lg:w-[40%]">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 text-center lg:text-left">
          Skills
        </h2>
        <p className="text-sm sm:text-base text-center lg:text-left leading-relaxed max-w-md mx-auto lg:mx-0">
          "Versatile developer skilled in backend, cloud, web solutions, &
          database management across Linux and Windows."
        </p>
      </div>

      {/* Right */}
      <div className="w-full lg:w-[60%] space-y-6">
        <SkillsCard label="Languages" icons={Languages} />
        <SkillsCard label="Frameworks" icons={Frameworks} />
        <SkillsCard label="Cloud Technology" icons={Cloud} />
        <SkillsCard label="Databases" icons={Databases} />
        <SkillsCard label="Web Development (Basic)" icons={webDev} />
        <SkillsCard label="Operating Systems" icons={os} />
      </div>
    </section>
  );
};

export default Skills;
