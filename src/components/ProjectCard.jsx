import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export const ProjectCard = ({ project }) => {
  const scrollRef = useRef(null);

  const scrollTags = (e) => {
    // Prevent the click from triggering parent card events
    e.stopPropagation();
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 150, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      whileTap="hover"
      className="relative w-full aspect-video rounded-2xl overflow-hidden bg-zinc-900 group cursor-pointer border border-zinc-800"
    >
      {/* 1. Background Image */}
      <motion.img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover"
        variants={{
          initial: { scale: 1, filter: "blur(0px) brightness(1)" },
          hover: { scale: 1.05, filter: "blur(4px) brightness(0.4)" },
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      />

      {/* 2. Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500" />

      {/* 3. Content Container */}
      <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end overflow-hidden">
        
        {/* Title and Project Type Row */}
        <div className="flex justify-between items-end w-full">
          <div className="flex-1">
            <motion.h3
              variants={{
                initial: { y: 0 },
                hover: { y: -5 },
              }}
              className="text-lg md:text-2xl lg:text-3xl font-bold text-white leading-tight"
            >
              {project.title}
            </motion.h3>

            <motion.p
              variants={{
                initial: { opacity: 0, height: 0, marginTop: 0 },
                hover: { opacity: 1, height: "auto", marginTop: 8 },
              }}
              transition={{ duration: 0.3 }}
              className="text-zinc-300 text-xs md:text-sm lg:text-base max-w-[100%] line-clamp-2"
            >
              {project.description}
            </motion.p>
          </div>

          <motion.div
            variants={{
              initial: { opacity: 1, scale: 1 },
              hover: { opacity: 0, scale: 0.8 },
            }}
            className="px-3 py-1 md:px-4 md:py-1.5 border border-zinc-600 rounded-full bg-zinc-800 shadow-lg shrink-0 ml-4 mb-1"
          >
            <span className="text-white text-[10px] md:text-xs font-medium uppercase tracking-wider">
              {project.type}
            </span>
          </motion.div>
        </div>

        {/* 4. Scrollable Tech Tags Row */}
        <motion.div
          variants={{
            initial: { opacity: 0, y: 20, height: 0 },
            hover: { opacity: 1, y: 0, height: "auto" },
          }}
          transition={{ delay: 0.05 }}
          className="relative flex items-center gap-2 mt-3 w-full"
        >
          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="flex flex-nowrap gap-1.5 md:gap-2 overflow-x-auto no-scrollbar scroll-smooth w-full"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 md:px-5 md:py-2 bg-zinc-800/90 border border-zinc-700 text-white rounded-full text-[10px] md:text-sm font-medium whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Chevron Tag Button (Only shows if there are many tags) */}
          {project.tags.length > 3 && (
            <button
              onClick={scrollTags}
              className="flex-shrink-0 p-1.5 md:p-2 bg-zinc-800 border border-zinc-700 text-white rounded-full hover:bg-zinc-700 transition-colors shadow-md flex items-center justify-center"
            >
              <ChevronRight size={16} />
            </button>
          )}
        </motion.div>
      </div>

      {/* Tailwind utility for hiding scrollbar (standard in global.css usually) */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </motion.div>
  );
};