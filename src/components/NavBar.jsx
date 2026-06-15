"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, TerminalSquare } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const NavItem = ({ href, text, isMobile, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`font-mono text-sm sm:text-base transition-colors group flex items-center gap-1.5 ${
        isMobile ? 'py-3 border-b border-white/5 w-full justify-start' : ''
      }`}
    >
      <span className="text-teal-500 font-bold group-hover:text-teal-400">~/</span>
      <span className="text-gray-400 group-hover:text-white transition-colors">{text}</span>
      {/* Blinking cursor effect on hover */}
      <span className="w-2 h-4 bg-teal-400 opacity-0 group-hover:animate-pulse group-hover:opacity-100 hidden sm:inline-block"></span>
    </Link>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 font-mono ${
        scrolled
          ? "bg-[#0b0c10]/95 backdrop-blur-md border-b border-teal-500/20 shadow-[0_4px_30px_rgba(20,184,166,0.1)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="flex justify-between items-center px-4 md:px-10 max-w-7xl mx-auto">
        {/* Logo / Terminal Prompt */}
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group">
            {/* Physical Logo */}
            <img 
              src="/logo.png" 
              alt="DS Logo" 
              className="h-10 sm:h-12 w-auto group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(79,70,229,0.4)]" 
            />
            {/* Terminal Prompt Text */}
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-500 font-bold tracking-widest hidden sm:block">SESSION: DEEPANSHU-OS</span>
              <div className="flex items-center gap-1.5 text-sm sm:text-base">
                <span className="text-green-500 font-bold">root@dev</span>
                <span className="text-white">:</span>
                <span className="text-blue-400 font-bold">~</span>
                <span className="text-white font-bold group-hover:text-teal-400 transition-colors">$</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Hamburger for mobile */}
        <div className="lg:hidden z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 hover:text-teal-400 transition-colors p-2 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex gap-8 items-center bg-black/40 px-6 py-2.5 rounded-lg border border-white/5 shadow-inner">
          <div className="flex gap-6 items-center">
            <NavItem text="home" href="/" />

            {!isAboutPage && (
              <>
                <NavItem text="about" href="/about" />
                <NavItem text="experience" href="#experience" />
                <NavItem text="projects" href="#projects" />
                <NavItem text="skills" href="#skills" />
              </>
            )}
          </div>

          {/* Divider */}
          <div className="w-px h-6 bg-white/10"></div>

          {/* Download CV (wget command) */}
          <a
            href="https://drive.google.com/file/d/1zFMtFYLpwyIRxs_B-0qqgyRqjHJWaOSP/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 font-bold rounded px-4 py-1.5 border border-teal-500/30 transition-colors group"
          >
            <TerminalSquare size={16} />
            <span>wget resume.pdf</span>
          </a>
        </div>
      </div>

      {/* Mobile Nav Links - Animated Slide Down */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#0b0c10]/95 backdrop-blur-xl border-b border-teal-500/30 shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden font-mono"
          >
            <div className="flex flex-col py-6 px-6 bg-gradient-to-b from-transparent to-teal-900/10">
              <div className="text-[10px] text-gray-500 font-bold tracking-widest mb-4 uppercase">Available Directories</div>
              
              <NavItem text="home" href="/" isMobile onClick={() => setIsOpen(false)} />

              {!isAboutPage && (
                <>
                  <NavItem text="about" href="/about" isMobile onClick={() => setIsOpen(false)} />
                  <NavItem text="experience" href="#experience" isMobile onClick={() => setIsOpen(false)} />
                  <NavItem text="achievements" href="#achievements" isMobile onClick={() => setIsOpen(false)} />
                  <NavItem text="projects" href="#projects" isMobile onClick={() => setIsOpen(false)} />
                  <NavItem text="skills" href="#skills" isMobile onClick={() => setIsOpen(false)} />
                  <NavItem text="contacts" href="#contacts" isMobile onClick={() => setIsOpen(false)} />
                </>
              )}

              <a
                href="https://drive.google.com/file/d/1zFMtFYLpwyIRxs_B-0qqgyRqjHJWaOSP/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-6 flex items-center justify-center gap-2 bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 font-bold rounded-lg px-8 py-3.5 border border-teal-500/30 transition-all w-full"
              >
                <TerminalSquare size={18} />
                <span>wget resume.pdf</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
