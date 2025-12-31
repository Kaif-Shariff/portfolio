import React from "react";
import { motion } from "framer-motion";

export const ExperienceSection = () => {
  const experiences = [
    {
      role: "Software Developer",
      company: "Kodeinnovate Solution Private Limited",
      description:
        "Leading the development of flagship product called 'Bakalaa' an ecommerce app",
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
    <section className="relative min-h-screen w-full py-20 px-6 md:px-12 lg:px-24 flex flex-col items-center">
      <div className="w-full mb-12">
        <h2
          className="text-7xl font-anek md:text-[10rem] font-bold tracking-tighter
            bg-clip-text text-transparent select-none filter contrast-125"
          style={{
            backgroundImage: `linear-gradient(
                135deg,
                #999999 0%,
                #ffffff 20%,
                #999999 40%,
                #ffffff 50%,
                #999999 70%,
                #ffffff 100%
              )`,
          }}
        >
          EXPERIENCE
        </h2>
      </div>

      {/* 2. Timeline Container */}
      <div className="relative w-full">
        {/* Vertical Line: Positioned to the right of the job titles. 
              On desktop, it sits at 25% to give the titles room to breathe.
          */}
        <div className="absolute left-[30%] md:left-[21.5%] top-0 bottom-0 w-[1px] bg-[#8A8A8A]" />

        <div className="flex flex-col gap-20 md:gap-32">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // Grid layout: Role | Connector | Company & Description | Date
              className="relative grid grid-cols-[1.2fr_auto_3fr] md:grid-cols-[1fr_auto_4fr_0.5fr] items-start gap-4 md:gap-10"
            >
              {/* Left Column: Role Title - Aligned with the 'E' */}
              <div className="text-left pt-1">
                <h3 className="text-sm md:text-2xl font-bold text-[#8A8A8A] font-montserrat leading-tight uppercase tracking-tight">
                  {exp.role.split(" ").map((word, i) => (
                    <span key={i} className="block">
                      {word}
                    </span>
                  ))}
                </h3>
              </div>

              {/* Middle Column: The Connector */}
              <div className="relative flex items-start justify-center h-full pt-3 md:pt-4">
                {/* The horizontal dot/line connecting to the vertical spine */}
                <div className="w-4 md:w-12 h-[1px] bg-[#8A8A8A]" />
              </div>

              {/* Right Column: Company Details */}
              <div className="flex flex-col gap-3">
                <h4 className="text-lg font-montserrat md:text-4xl font-bold text-[#D5D5D5] tracking-tight leading-none">
                  {exp.company}
                </h4>
                <p className="text-[#8A8A8A] text-xs md:text-lg max-w-2xl leading-relaxed">
                  {exp.description}
                </p>

                {/* Mobile Date */}
                <span className="md:hidden font-montserrat text-[#D5D5D5] text-[10px] font-medium mt-1">
                  {exp.duration}
                </span>
              </div>

              {/* Far Right Column: Date (Desktop) */}
              <div className="hidden md:block text-right pt-2">
                <span className="text-[#D5D5D5] font-montserrat text-sm font-medium whitespace-nowrap opacity-50">
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
