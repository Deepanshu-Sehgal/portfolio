import React from "react";

const AnimatedLink = ({ defaultText, href = "#" }) => {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      className="group relative flex flex-col items-start justify-start h-7 overflow-hidden text-xl font-semibold"
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {/* Top Text (fades out & moves up) */}
      <span className="transition-all duration-300 ease-in group-hover:-translate-y-7 group-hover:opacity-0">
        {defaultText}
      </span>

      {/* Bottom Text (moves up & fades in with grey color) */}
      <span className="text-gray-600 opacity-0 transition-all duration-300 ease-out group-hover:-translate-y-7 group-hover:opacity-100">
        {defaultText}
      </span>
    </a>
  );
};

export default AnimatedLink;
