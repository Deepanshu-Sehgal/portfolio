"use client";

import Hero from "../components/Hero";
import Education from "../components/Education";
import Achievements from "../components/Achievements";
import FeaturedPosts from "../components/FeaturedPosts";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import dynamic from "next/dynamic";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import TerminalLoader from "./TerminalLoader";

const TerminalSection = dynamic(() => import("../components/TerminalSection"), { ssr: false });
const KubernetesSimulator = dynamic(() => import("../components/KubernetesSimulator"), { ssr: false });
const ContainerTetris = dynamic(() => import("../components/ContainerTetris"), { ssr: false });
const PipelineBuilder = dynamic(() => import("../components/PipelineBuilder"), { ssr: false });

const educationData = [
  {
    degree: "Master's Of Computer Application",
    institution: "Amity University, Mohali, Punjab",
    duration: "2023–2025",
  },
  {
    degree: "Bachelor's of Computer Application",
    institution: "Punjab Technical University, Jalandher",
    duration: "2020–2023",
  },
];

const experienceData = [
  {
    company: "Embtel Solutions Ltd",
    role: "Full Stack Developer",
    location: "Zirakpur, Punjab",
    duration: "Aug 2025 – Mar 2026",
    points: [
      "Developed 8+ full-stack applications with RESTful APIs leveraging Node.js, deploying on AWS with CI/CD pipelines, reducing deployment time by 60% and enabling 5+ monthly releases",
      "Streamlined release workflows leveraging Jenkins and Docker, achieving 99.8% uptime, zero-downtime deployments, and 45% reduction in production incidents through automated testing and rollback mechanisms",
    ],
  },
  {
    company: "Deftsoft Informatics Pvt. Ltd",
    role: "Junior Software Engineer",
    location: "Mohali, Punjab",
    duration: "June 2025 – Sept 2025",
    points: [
      "Developed 15+ high-performance RESTful APIs leveraging Spring Boot, Node.js, and Express.js, handling 10K+ requests/minute, and collaborated with senior engineers to optimize backend architecture, improving response time by 40%",
      "Enhanced system scalability and reliability through architectural improvements, reducing downtime by 25% and achieving 99.5% uptime across production environments",
    ],
  },
  {
    company: "Insyrge",
    role: "MERN Stack Developer Intern",
    location: "Chandigarh, India",
    duration: "Sept 2024 – Feb 2025",
    points: [
      "Engineered CRM and HR dashboards leveraging MERN stack with role-based access control (RBAC) for 5+ user roles, implementing JWT-based authentication and secure RESTful APIs for data protection and controlled access",
      "Improved system scalability by 40% and performance by 30% through modular backend architecture, MongoDB query optimization, and reduced API response times from 800ms to 560ms",
    ],
  },
];

const achievementData = [
  {
    title: "DevOps | AWS | Docker | Kubernetes (K8s) Certifications",
    subtitle: "2026",
    link: "https://drive.google.com/drive/folders/102lWXZaTnScb9QsC3ykD1kshiXvyGzCz?usp=sharing",
  },
  {
    title:
      "Authored a book chapter on AI-Driven Personalized Shopping Assistance, published at ICISRI 2024",
    subtitle: "2024",
    link: "https://www.linkedin.com/posts/deepanshu-sehgal01_ai-machinelearning-iot-activity-7274402555860819968-uDJY?utm_source=share&utm_medium=member_desktop&rcm=ACoAADLTVGUBMUAQfMSRQndJXVE18K-_0BF2PKY",
  },
  {
    title:
      "Finalist at CyberThon 2023 (Top 13) – NLP-based police complaint automation (FastAPI + Twilio)",
    subtitle: "November 2023",
    link: "",
  },
];

const Home = () => {
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    // Only init AOS after booting finishes
    if (!isBooting) {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
      });
      // Refresh to ensure elements catch up
      AOS.refresh();
    }
  }, [isBooting]);

  return (
    <div className="font-sans bg-transparent text-white relative select-none w-full relative">
      <AnimatePresence>
        {isBooting && <TerminalLoader onComplete={() => setIsBooting(false)} />}
      </AnimatePresence>
      
      {/* The main content mounts and loads behind the terminal overlay, preventing stutter later */}
      <Hero />
      <TerminalSection />
      <KubernetesSimulator />
      <ContainerTetris />
      <PipelineBuilder />
      <Experience data={experienceData} />
      <Skills />
      <Projects />
      <Education data={educationData} />
      <Achievements data={achievementData} />
      <FeaturedPosts />
    </div>
  );
};

export default Home;
