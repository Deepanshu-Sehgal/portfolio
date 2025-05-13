import React, { useState } from "react";
import AnimatedLink from "./AnimatedLink";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  return (
    <nav className="bg-[#111111] text-white fixed w-full z-50 top-0 left-0 shadow-md">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="text-4xl font-bold">D.S.</div>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-6 items-center">
          <div className="bg-[#111111] rounded-md px-5 py-2 border-2 border-gray-400 animate-slow-blink hover:opacity-100 transition">
            <AnimatedLink
              defaultText="Download CV"
              href="https://drive.google.com/file/d/10Y8cus7tSlN5d3SRWvDBI7_bNbQc1iaY/view?usp=sharing"
            />
          </div>
          <Link className="overflow-hidden text-xl font-semibold" to="/">Home</Link>

          {/* Only show these if NOT on /about page */}
          {!isAboutPage && (
            <>
              <Link className="overflow-hidden text-xl font-semibold" to="/about">About</Link>
              <AnimatedLink defaultText="Achievements" href="#achivements" />
              <AnimatedLink defaultText="Projects" href="#projects" />
              <AnimatedLink defaultText="Skills" href="#skills" />
              <AnimatedLink defaultText="Contacts" href="#contacts" />
            </>
          )}
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-[#111111]">
          <div className="bg-[#111111] rounded-md px-5 py-2 border-2 border-gray-400 animate-slow-blink hover:opacity-100 transition">
            <AnimatedLink
              defaultText="Download CV"
              href="https://drive.google.com/file/d/10Y8cus7tSlN5d3SRWvDBI7_bNbQc1iaY/view?usp=sharing"
            />
          </div>
          <Link to="/">Home</Link>
          {!isAboutPage && (
            <>
              <Link to="/about">About</Link>
              <AnimatedLink defaultText="Achievements" href="#achivements" />
              <AnimatedLink defaultText="Projects" href="#projects" />
              <AnimatedLink defaultText="Skills" href="#skills" />
              <AnimatedLink defaultText="Contacts" href="#contacts" />
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
