import React from "react";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";
import AnimatedLink from "./AnimatedLink";
import SocialLinks from "./SocialLinks";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/deepanshu-sehgal01/" },
  { label: "Github", href: "https://github.com/Deepanshu-Sehgal" },
  { label: "Leetcode", href: "https://leetcode.com/u/DeepanshuSehgal112/" },
];

const Contact = () => {
  return (
    <section id="contacts" data-aos="fade-up" className="relative z-10 bg-transparent text-white py-24 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="relative bg-gradient-to-br from-[#061e38]/90 to-black/90 backdrop-blur-xl border border-white/10 rounded-[2.5rem] mx-auto p-8 sm:p-14 lg:p-20 shadow-[0_20px_60px_rgba(20,184,166,0.2)] overflow-hidden">
        
        {/* Background Glowing Orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-[80px] -z-10 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] -z-10 pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 relative z-10">
          
          {/* Left Text */}
          <div className="w-full lg:w-[45%] space-y-8 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 font-medium text-sm tracking-widest uppercase mb-2">
              Get in touch
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
              Let{"'"}s start <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                creating
              </span> <br />
              together.
            </h2>
            <div className="pt-4">
              <MagneticButton
                as="a"
                href="mailto:deepanshusehgal1506@gmail.com"
                className="inline-flex items-center gap-3 bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-full text-lg font-medium shadow-[0_0_20px_rgba(20,184,166,0.4)] hover:shadow-[0_0_30px_rgba(20,184,166,0.6)] hover:-translate-y-1 transition-all duration-300"
              >
                Start a conversation <ArrowUpRight size={22} />
              </MagneticButton>
            </div>
          </div>

          {/* Right Nav + Socials */}
          <div className="w-full lg:w-[50%] flex flex-col sm:flex-row justify-around lg:justify-end gap-16 text-center sm:text-left">
            {/* Navigation */}
            <div className="space-y-6">
              <h3 className="text-gray-500 font-semibold tracking-widest uppercase text-sm mb-2">Navigation</h3>
              <div className="space-y-4 flex flex-col items-center sm:items-start">
                <AnimatedLink defaultText="Home" href="/" />
                <AnimatedLink defaultText="About" href="/about" />
                <AnimatedLink defaultText="Projects" href="/#projects" />
              </div>
            </div>

            {/* Socials */}
            <div className="space-y-6">
              <h3 className="text-gray-500 font-semibold tracking-widest uppercase text-sm mb-2">Socials</h3>
              <SocialLinks links={links} />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500 text-sm font-medium">
          <p>© {new Date().getFullYear()} Deepanshu Sehgal.</p>
          <p className="flex items-center gap-1">
            Engineered with <span className="text-red-500">❤️</span> & Coffee
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
