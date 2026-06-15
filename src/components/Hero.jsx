"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { Canvas, useFrame } from "@react-three/fiber";
import { TorusKnot, Float, MeshDistortMaterial } from "@react-three/drei";
import { MapPin, Briefcase, Code, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import profile from "../assets/profile.png";
import AnimatedLink from "./AnimatedLink";

const AbstractShape = () => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
      <TorusKnot ref={meshRef} args={[1.6, 0.15, 64, 16]} scale={1.1}>
        <MeshDistortMaterial
          color="#818cf8"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.1}
          metalness={0.9}
          transparent={true}
          opacity={0.25}
        />
      </TorusKnot>
    </Float>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto h-full py-10 px-6 sm:px-10 text-gray-300 z-10 gap-12 lg:gap-8">
        {/* Left Column - Text and Actions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 w-full"
        >
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-teal-300 to-blue-600 drop-shadow-lg leading-tight tracking-tight">
              Deepanshu
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-500 leading-tight tracking-tight">
              Sehgal
            </h1>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-6 w-full max-w-lg">
            {/* Description */}
            <h2 className="sr-only">About Deepanshu Sehgal - DevOps & Full Stack Developer</h2>
            <p className="text-sm sm:text-base lg:text-lg tracking-wide  bg-[#1a1b2e]/80 p-5 lg:p-6 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(20,184,166,0.15)] text-gray-300 leading-relaxed w-full">
              I am a{" "}
              <strong className="text-teal-400 font-bold text-lg">
                DevOps Engineer & Full Stack Developer
              </strong>{" "}
              specializing in robust cloud architectures, <strong className="text-teal-400 font-bold">CI/CD automation</strong>, and Infrastructure as Code (IaC). With expertise building highly scalable applications using the{" "}
              <strong className="text-blue-400 font-bold">MERN stack (MongoDB, Express, React, Node.js)</strong>{" "}
              and <strong className="text-blue-400 font-bold">Java</strong>, I seamlessly bridge software engineering with IT operations. My core focus is on containerization, deployment pipelines, and cloud infrastructure to deliver high-availability, zero-downtime systems.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 w-full">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1a1b2e]/80 border border-white/10 rounded-full text-xs sm:text-sm text-gray-300  shadow-sm">
                <MapPin size={14} className="text-teal-400" /> Mohali, Punjab
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1a1b2e]/80 border border-white/10 rounded-full text-xs sm:text-sm text-gray-300  shadow-sm">
                <Briefcase size={14} className="text-blue-400" /> 1+ Years Exp
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1a1b2e]/80 border border-white/10 rounded-full text-xs sm:text-sm text-gray-300  shadow-sm">
                <Code size={14} className="text-teal-400" /> 8+ Projects
              </div>
            </div>

            {/* Social & Action Links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-2 w-full">
              <a
                href="https://github.com/deepanshu-sehgal01"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#1a1b2e]/80 hover:bg-white/15 border border-white/10 rounded-full transition-all hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(45,212,191,0.3)]"
              >
                <Github size={20} className="text-white" />
              </a>
              <a
                href="https://linkedin.com/in/Deepanshu-Sehgal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#1a1b2e]/80 hover:bg-white/15 border border-white/10 rounded-full transition-all hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(45,212,191,0.3)]"
              >
                <Linkedin size={20} className="text-white" />
              </a>
              <a
                href="mailto:deepanshusehgal1506@gmail.com"
                className="p-3 bg-[#1a1b2e]/80 hover:bg-white/15 border border-white/10 rounded-full transition-all hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(45,212,191,0.3)]"
              >
                <Mail size={20} className="text-white" />
              </a>

              <MagneticButton
                as="a"
                href="https://drive.google.com/file/d/1zFMtFYLpwyIRxs_B-0qqgyRqjHJWaOSP/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-teal-600/80 hover:bg-teal-500 text-white font-medium  rounded-full px-6 py-2.5 border border-teal-400/50 shadow-[0_0_15px_rgba(45,212,191,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(45,212,191,0.5)]"
              >
                Download CV
              </MagneticButton>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Profile Image + 3D */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="flex-1 flex justify-center lg:justify-end w-full lg:w-auto"
        >
          <div className="relative group flex items-center justify-center w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            {/* 3D Ring Framing the image */}
            <div className="absolute inset-[-4rem] z-0">
              <Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 1.5]}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} />
                <AbstractShape />
              </Canvas>
            </div>

            {/* Glowing Effects */}
            <div className="absolute inset-4 bg-gradient-to-r from-teal-500/40 via-cyan-500/40 to-blue-500/40 rounded-tl-xl rounded-tr-full rounded-br-full rounded-bl-full blur-lg opacity-40 group-hover:opacity-60 group-hover:blur-xl animate-pulse transition-all duration-700"></div>

            <div className="relative z-10 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-[#111] border-2 border-white/20 rounded-tl-xl rounded-tr-full rounded-br-full rounded-bl-full flex items-center justify-center overflow-hidden shadow-2xl">
              <Image
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
