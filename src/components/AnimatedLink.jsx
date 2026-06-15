"use client";

import React from "react";
import Link from "next/link";

const AnimatedLink = ({ defaultText, href = "#" }) => {
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        className="group relative flex flex-col items-start justify-start h-7 overflow-hidden text-[17px] font-medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="transition-all duration-300 ease-in group-hover:-translate-y-7 group-hover:opacity-0 text-gray-200">
          {defaultText}
        </span>
        <span className="text-teal-400 opacity-0 transition-all duration-300 ease-out group-hover:-translate-y-7 group-hover:opacity-100">
          {defaultText}
        </span>
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="group relative flex flex-col items-start justify-start h-7 overflow-hidden text-[17px] font-medium"
    >
      <span className="transition-all duration-300 ease-in group-hover:-translate-y-7 group-hover:opacity-0 text-gray-200">
        {defaultText}
      </span>
      <span className="text-teal-400 opacity-0 transition-all duration-300 ease-out group-hover:-translate-y-7 group-hover:opacity-100">
        {defaultText}
      </span>
    </Link>
  );
};

export default AnimatedLink;
