import React from "react";
import { motion } from "framer-motion";

export const ExperienceSection = () => {
  const experiences = [
    {
      role: "Software Developer",
      company: "Kodeinnovate Solution Private Limited",
      description:
        "Leading the development of flagship product called 'Bakalaa' a ecommerce app",
      duration: "2024 - Present",
    },
    {
      role: "Software Developer",
      company: "Gojaunt",
      description:
        "Managed the development of gojaunt website and mobile app for booking flights and visa application",
      duration: "2024 - 2025",
    },
    {
      role: "Full Stack Developer",
      company: "Freelancing",
      description:
        "Developed numerous website and mobile applications for multiple clients",
      duration: "2023 - 2024",
    },
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center overflow-hidden">
      {/* 1. Metallic Heading */}
      <div className="w-full max-w-[1400px] mb-10">
        <h2
          className="text-6xl font-anek md:text-[10rem] font-bold tracking-tighter
          bg-clip-text text-transparent select-none filter contrast-125 leading-none"
          style={{
            backgroundImage: `linear-gradient(135deg, #999999 0%, #ffffff 20%, #999999 40%, #ffffff 50%, #999999 70%, #ffffff 100%)`,
          }}
        >
          EXPERIENCE
        </h2>
      </div>

      {/* 2. Timeline Container */}
      <div className="relative w-full max-w-[1400px]">
        {/* The Vertical Main Line (Dynamic Height) */}
        <div className="absolute left-[35%] md:left-[20%] top-0 bottom-0 w-[1px] bg-zinc-800" />

        <div className="flex flex-col gap-16 md:gap-24">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative grid grid-cols-[1fr_auto_3fr] md:grid-cols-[1.5fr_auto_4fr_1fr] items-start gap-4 md:gap-12"
            >
              {/* Left Column: Role Title */}
              <div className="text-right pt-1">
                <h3 className="text-lg md:text-2xl font-bold text-zinc-400 leading-tight">
                  {exp.role.split(" ").map((word, i) => (
                    <span key={i} className="block">
                      {word}
                    </span>
                  ))}
                </h3>
              </div>

              {/* Middle Column: The Connector Node & Line */}
              <div className="relative flex items-center justify-center h-full pt-4">
                {/* Horizontal branch line */}
                <div className="w-8 md:w-16 h-[1px] bg-zinc-800" />
              </div>

              {/* Right Column: Company Details */}
              <div className="flex flex-col gap-2">
                <h4 className="text-xl md:text-3xl font-bold text-white tracking-tight">
                  {exp.company}
                </h4>
                <p className="text-zinc-500 text-sm md:text-lg max-w-xl leading-relaxed">
                  {exp.description}
                </p>

                {/* Mobile Date (Visible only on small screens) */}
                <span className="md:hidden text-zinc-600 text-xs font-medium mt-1">
                  {exp.duration}
                </span>
              </div>

              {/* Far Right Column: Date (Desktop only) */}
              <div className="hidden md:block text-right pt-2">
                <span className="text-zinc-600 text-sm font-medium whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
