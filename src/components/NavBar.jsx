import React, { useState } from 'react';
import AnimatedLink from './AnimatedLink';
import { Menu, X } from 'lucide-react'; // Or use any icon set you prefer

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

        {/* Links for medium and up */}
        <div className="hidden md:flex gap-6">
          <AnimatedLink defaultText="CV" href="#cv" />
          <AnimatedLink defaultText="Projects" href="#project" />
          <AnimatedLink defaultText="Achievements" href="#achivements" />
          <AnimatedLink defaultText="Contacts" href="#contacts" />
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-black">
          <AnimatedLink defaultText="CV" href="#cv" />
          <AnimatedLink defaultText="Projects" href="#project" />
          <AnimatedLink defaultText="Achievements" href="#achivements" />
          <AnimatedLink defaultText="Contacts" href="#contacts" />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
