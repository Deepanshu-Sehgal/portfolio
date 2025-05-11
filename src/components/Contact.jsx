import React from "react";
import { ArrowUpRight } from "lucide-react";
import AnimatedLink from "./AnimatedLink";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  return (
    <section className="min-h-screen bg-[#111111] text-black py-10 px-6 sm:px-10 md:px-16 lg:px-28">
      <div className="bg-white w-full max-w-7xl mx-auto p-6 sm:p-10 rounded-xl">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mt-9">
          {/* Left Text */}
          <div className="w-full lg:w-[40%] space-y-8 text-center lg:text-left">
            <p className="text-lg sm:text-xl font-medium">Contact</p>
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider leading-tight">
              Let{"'"}s start <br />
              creating <br />
              together
            </p>
            <a
              href="mailto:deepanshusehgal1506@gmail.com"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-base sm:text-lg font-medium hover:scale-105 transition"
            >
              Let{"'"}s talk <ArrowUpRight size={20} />
            </a>
          </div>

          {/* Right Nav + Socials */}
          <div className="w-full lg:w-[60%] flex flex-col sm:flex-row justify-around gap-10 text-center sm:text-left">
            {/* Navigation */}
            <div className="space-y-3">
              <AnimatedLink defaultText="Home" href="#home" />
              <AnimatedLink defaultText="Work" href="#work" />
              <AnimatedLink defaultText="About" href="#about" />
              <AnimatedLink defaultText="Contact" href="#contact" />
            </div>

            {/* Socials */}
            <SocialLinks />
          </div>
        </div>

        {/* Footer */}
        <p className="text-gray-500 text-sm sm:text-base mt-20 text-center">
          Developed by Deepanshu Sehgal & Designed by Vimal Sehgal
        </p>
      </div>
    </section>
  );
};

export default Contact;
