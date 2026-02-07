import React from "react";

import linkedinIcon from "../assets/icons/linkedin.svg";
import instaIcon from "../assets/icons/insta.svg";
import githubIcon from "../assets/icons/github.svg";

export const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: linkedinIcon,
      href: "https://www.linkedin.com/in/kaif-shariff-67a0921b0/",
    },
    {
      name: "Instagram",
      icon: instaIcon,
      href: "https://www.instagram.com/_kaif_shariff/",
    },
    {
      name: "Github",
      icon: githubIcon,
      href: "https://github.com/Kaif-Shariff",
    },
  ];

  return (
    <footer className="w-full py-10 px-6 md:px-4 lg:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left */}
        <div className="order-2 md:order-1">
          <p className="text-zinc-400 font-bold tracking-widest text-sm uppercase">
            Since 2003
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6 order-1 md:order-2">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="transition-transform duration-300 hover:scale-110"
            >
              <img
                src={link.icon}
                alt={link.name}
                className="w-5 h-5 opacity-70 hover:opacity-100"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
