import React from 'react'
import { Linkedin, Instagram, Github } from 'lucide-react'

export const Footer = () => {
  // 1. Define social links in a clean array
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: <Linkedin size={20} strokeWidth={1.5} />, 
      href: 'https://linkedin.com/in/yourprofile' 
    },
    { 
      name: 'Instagram', 
      icon: <Instagram size={20} strokeWidth={1.5} />, 
      href: 'https://instagram.com/yourprofile' 
    },
    { 
      name: 'Github', 
      icon: <Github size={20} strokeWidth={1.5} />, 
      href: 'https://github.com/yourprofile' 
    },
  ];

  return (
    <footer className="w-full py-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Date */}
        <div className="order-2 md:order-1">
          <p className="text-zinc-500 font-medium tracking-widest text-sm uppercase">
            Since 2003
          </p>
        </div>

        {/* Right Side: Social Icons Mapping */}
        <div className="flex items-center gap-6 order-1 md:order-2">
          {socialLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={link.name} // Essential for accessibility
              className="transition-all duration-300 hover:text-white text-zinc-500 hover:scale-110"
            >
              {link.icon}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};