import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import profile from "../assets/profile.png";
import AnimatedLink from "./AnimatedLink";

const Hero = () => {
  const { scrollY } = useScroll();

  const xLeft = useTransform(scrollY, [0, 300], [0, -200]);
  const xRight = useTransform(scrollY, [0, 300], [0, 200]);

  return (
    <section
      id="home"
      className="h-screen w-full flex items-center justify-center relative overflow-hidden"
    >
      <div className="flex flex-col justify-center w-full h-full py-16 px-6 sm:px-10 text-gray-300">
        {/* Top Section - Name + Description */}
        <motion.div
          style={{ x: xLeft }}
          className="flex flex-col lg:flex-row lg:items-center leading-none gap-10"
        >
          <h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-extrabold text-center lg:text-left">
            Deepanshu
          </h1>
          <p className="text-center lg:mt-8 lg:ml-20 text-md sm:text-lg lg:text-center tracking-wide">
            Developer with a Full Stack <br /> Development skill set with 1 year{" "}
            <br />
            of hands-on experience.
          </p>
        </motion.div>

        {/* Bottom Section - Profile Image + Last Name */}
        <motion.div
          style={{ x: xRight }}
          className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-end gap-6 mt-10"
        >
          <div className="w-[7rem] sm:w-[8rem] md:w-[9rem] h-[7rem] sm:h-[8rem] md:h-[9rem] bg-[#DDDDDD] rounded-tl-xl rounded-tr-full rounded-br-full rounded-bl-full flex items-center justify-center">
            <img
              src={profile}
              alt="Profile"
              className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-full"
            />
          </div>
          <h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[12rem] font-extrabold leading-none text-center lg:text-right">
            Sehgal
          </h1>
        </motion.div>

        <div className="max-w-max self-center bg-black md:hidden  rounded-md px-5 py-2 mt-20 border-2 border-white animate-slow-blink hover:opacity-100 transition">
          <AnimatedLink
            defaultText="Downlaod CV"
            href="https://drive.google.com/file/d/10Y8cus7tSlN5d3SRWvDBI7_bNbQc1iaY/view?usp=sharing"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
