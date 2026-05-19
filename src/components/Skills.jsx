import React from "react";
import SkillsCard from "../cards/SkillsCard";

const Languages = ["Python", "TypeScript", "Java", "JavaScript"];

const Frameworks = ["SpringBoot", "MERN Stack", "Redux Toolkit", "FastAPI"];

const Databases = [
  "PostgreSQL",
  "SQL",
  "MongoDB",
  "Redis",
  "Kafka",
  "Vector DBs",
];

const Cloud = ["AWS", "Azure", "GCP"];

const DevOps = [
  "Docker",
  "Kubernetes",
  "Jenkins",
  "GitHub Actions",
  "Argo CD",
];

const Infrastructure = [
  "Terraform",
  "Ansible",
  "Prometheus",
  "Grafana",
  "Nginx",
];

const Concepts = [
  "System Design",
  "Linux",
  "Python Scripting",
  "Claude Code",
  "NLP",
  "LangChain",
];

const Skills = () => {
  return (
    <section
      id="skills"
      data-aos="fade-up"
      className="w-full max-w-7xl mx-auto py-24 px-6 sm:px-10 z-10 relative"
    >
      <div className="text-center mb-16">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-500 tracking-tight">
          Technical Arsenal
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed  bg-[#1a1b2e]/80 p-4 rounded-xl border border-white/10">
          Full Stack Developer with strong DevOps capabilities — building scalable MERN and Java applications, automating CI/CD pipelines, and managing modern cloud infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <SkillsCard label="Languages" icons={Languages} />
        <SkillsCard label="Frameworks & Libs" icons={Frameworks} />
        <SkillsCard label="Databases & Messaging" icons={Databases} />
        <SkillsCard label="Cloud Platforms" icons={Cloud} />
        <SkillsCard label="DevOps & CI/CD" icons={DevOps} />
        <SkillsCard label="Infrastructure" icons={Infrastructure} />
        <div className="md:col-span-2 lg:col-span-3 flex justify-center mt-4">
          <div className="w-full max-w-3xl">
            <SkillsCard label="Concepts & Tools" icons={Concepts} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
