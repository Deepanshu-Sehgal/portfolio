import { ArrowUpRight, ArrowRight } from "lucide-react";

const SocialLinks = () => {
  const links = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/deepanshu-sehgal01/" },
    { label: "Github", href: "https://github.com/Deepanshu-Sehgal" },
    { label: "Leetcode", href: "https://leetcode.com/u/DeepanshuSehgal112/" },
  ];

  return (
    <div className="space-y-4 text-xl">
      {links.map(({ label, href }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex justify-between gap-10 items-center mr-10 w-full max-w-sm font-medium transition duration-300 ease-out hover:text-gray-500"
        >
          {/* Label */}
          <span className="transition-opacity duration-300 ease-out group-hover:opacity-60">
            {label}
          </span>

          {/* Icon Container */}
          <span className="relative w-6 h-6">
            {/* Default Icon */}
            <ArrowUpRight
              className="absolute inset-0 transition-opacity duration-300 ease-out group-hover:opacity-0"
              size={24}
            />
            {/* Hover Icon */}
            <ArrowRight
              className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
              size={24}
            />
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
