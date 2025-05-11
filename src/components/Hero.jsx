import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import profile from "../assets/profile.png";

const Hero = () => {
  const { scrollY } = useScroll();

  const xLeft = useTransform(scrollY, [0, 300], [0, -200]);
  const xRight = useTransform(scrollY, [0, 300], [0, 200]);

  return (
    <section className="h-screen w-full flex items-center justify-center relative overflow-hidden">
      <div className="flex flex-col justify-center w-full h-full py-16 px-6 sm:px-10 text-gray-300">
        {/* Top Section - Name + Description */}
        <motion.div
          style={{ x: xLeft }}
          className="flex flex-col lg:flex-row items-center lg:items-start leading-none gap-6"
        >
          <h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-extrabold text-center lg:text-left">
            Deepanshu
          </h1>
          <p className="mt-2 lg:mt-6 text-md sm:text-lg text-center lg:text-left tracking-wide max-w-md">
            Developer with a Full Stack Development skill set <br />
            and 1 year of hands-on experience.
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
      </div>
    </section>
  );
};

export default Hero;
