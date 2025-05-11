import { motion } from "framer-motion";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const educationData = [
  {
    degree: "Master’s Of Computer Application",
    institution: "Amity University, Mohali, Punjab",
    duration: "2023–2025",
  },
  {
    degree: "Bachelor’s of Computer Application",
    institution: "Punjab Technical University, Jalandher",
    duration: "2020–2023",
  },
];

const achievementData = [
  {
    title: "Web Development Bootcamp (MERN Stack)",
    subtitle: "CodeHelp (2024)",
  },
  {
    title: "Core java + Android Programming",
    subtitle: "CBitss Chandigarh (2020)",
  },
  {
    title: "Participated in Sparkathon 2024 CONVERGE @ Walmart",
    subtitle: "Sept 2024",
  },
  {
    title: "Finalist of CyberThon 2023 Hackathon organized by Chandigarh Police & Infosys",
    subtitle: "November 2023",
  },
];
const projectData = [
  {
    title: "AI-Powered Class Attendance System",
    description: "Face detection-based attendance system using YOLOv11, React, and Flask. Deployed on AWS.",
    techStack: ["YOLOv11", "React", "Flask", "AWS", "PostgreSQL"],
    link: "https://github.com/your-repo/class-attendance-system",
    color: "blue", // background color
  },
  {
    title: "Stock Market Prediction",
    description: "Predicted trends using hybrid CNN+LSTM and BERT for technical + sentiment analysis.",
    techStack: ["CNN", "LSTM", "BERT", "Python"],
    link: "https://github.com/your-repo/stock-market-prediction",
    color: "red",
  },
  {
    title: "AI Image Generator SaaS",
    description: "Full-stack SaaS platform to generate AI images using OpenAI API. Includes Razorpay integration.",
    techStack: ["MERN", "OpenAI", "Razorpay", "AWS S3"],
    link: "https://github.com/your-repo/image-gen-saas",
    color: "yellow",
  },
];

function App() {
  return (
    <motion.div
      className="font-sans bg-[#111111] min-h-screen text-white relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Navbar />
      <Hero />
      <Education data={educationData} />
      <Achievements data={achievementData} />
      <Projects data={projectData} />
      <Skills/>
      <Contact/>
    </motion.div>
  );
}

export default App;
