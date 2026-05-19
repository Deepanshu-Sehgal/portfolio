import { ArrowUpRight, ArrowRight } from "lucide-react";

const SocialLinks = ({links}) => {
  

  return (
    <div className="space-y-4 text-lg">
      {links.map(({ label, href }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex justify-between gap-10 items-center w-full min-w-[150px] font-medium transition duration-300 ease-out hover:text-indigo-400"
        >
          {/* Label */}
          <span className="transition-opacity duration-300 ease-out group-hover:opacity-80">
            {label}
          </span>

          {/* Icon Container */}
          <span className="relative w-5 h-5 text-gray-400 group-hover:text-indigo-400 transition-colors">
            {/* Default Icon */}
            <ArrowUpRight
              className="absolute inset-0 transition-all duration-300 ease-out group-hover:opacity-0 group-hover:scale-50 group-hover:-translate-y-2 group-hover:translate-x-2"
              size={20}
            />
            {/* Hover Icon */}
            <ArrowRight
              className="absolute inset-0 opacity-0 -translate-x-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0"
              size={20}
            />
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
