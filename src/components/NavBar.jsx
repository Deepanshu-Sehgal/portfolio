"use client";

import React, { useState, useEffect } from "react";
import AnimatedLink from "./AnimatedLink";
import { Menu, X, Download } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0c10]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-10 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/">
          <div className="text-3xl font-extrabold tracking-tighter cursor-pointer group">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:to-white transition-all">
              D
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 group-hover:from-teal-300 group-hover:to-blue-400 transition-all">
              S.
            </span>
          </div>
        </Link>

        {/* Hamburger for mobile */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-teal-400 transition-colors p-2 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8 items-center">
          <div className="flex gap-8 items-center">
            <Link
              className="text-[17px] font-medium text-gray-200 hover:text-teal-400 transition-colors"
              href="/"
            >
              Home
            </Link>

            {!isAboutPage && (
              <>
                <Link
                  className="text-[17px] font-medium text-gray-200 hover:text-teal-400 transition-colors"
                  href="/about"
                >
                  About
                </Link>
                <AnimatedLink defaultText="Experience" href="#experience" />
                <AnimatedLink defaultText="Achievements" href="#achievements" />
                <AnimatedLink defaultText="Projects" href="#projects" />
                <AnimatedLink defaultText="Skills" href="#skills" />
                <AnimatedLink defaultText="Contact" href="#contacts" />
              </>
            )}
          </div>

          <a
            href="https://drive.google.com/file/d/1zFMtFYLpwyIRxs_B-0qqgyRqjHJWaOSP/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-teal-600/80 hover:bg-teal-500 text-white font-medium rounded-full px-5 py-2 border border-teal-400/50 shadow-[0_0_15px_rgba(20,184,166,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(20,184,166,0.5)]"
          >
            <Download size={16} /> CV
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
            className="md:hidden absolute top-full left-0 w-full bg-[#0f111a]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6 py-8 px-6">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-white hover:text-teal-400"
              >
                Home
              </Link>

              {!isAboutPage && (
                <>
                  <Link
                    href="/about"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-white hover:text-teal-400"
                  >
                    About
                  </Link>
                  <div onClick={() => setIsOpen(false)}>
                    <AnimatedLink defaultText="Experience" href="#experience" />
                  </div>
                  <div onClick={() => setIsOpen(false)}>
                    <AnimatedLink
                      defaultText="Achievements"
                      href="#achievements"
                    />
                  </div>
                  <div onClick={() => setIsOpen(false)}>
                    <AnimatedLink defaultText="Projects" href="#projects" />
                  </div>
                  <div onClick={() => setIsOpen(false)}>
                    <AnimatedLink defaultText="Skills" href="#skills" />
                  </div>
                  <div onClick={() => setIsOpen(false)}>
                    <AnimatedLink defaultText="Contact" href="#contacts" />
                  </div>
                </>
              )}

              <a
                href="https://drive.google.com/file/d/1zFMtFYLpwyIRxs_B-0qqgyRqjHJWaOSP/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 flex items-center gap-2 bg-teal-600/80 hover:bg-teal-500 text-white font-medium rounded-full px-8 py-3 border border-teal-400/50 shadow-[0_0_15px_rgba(20,184,166,0.3)] transition-all"
              >
                <Download size={18} /> Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
