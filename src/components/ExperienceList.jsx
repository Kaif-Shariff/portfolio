import { motion } from "framer-motion";

export const ExperienceList = ({ experiences }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="flex flex-col w-full"
    >
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="group flex flex-col w-full py-[1em] first:pt-0"
        >
          {/* Header Row: Role and Date */}
          {/* We use flex-col on mobile to prevent overlapping, md:flex-row for desktop */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-1 md:gap-0 mb-[0.5em]">
            <h3 className="text-[1.5em] md:text-[2.5em] font-bold text-white tracking-tight leading-tight">
              {exp.role}
            </h3>
            <span className="text-[1.1em] md:text-[1.8em] font-bold text-white/90 tracking-tight">
              {exp.duration}
            </span>
          </div>

          {/* Company Row */}
          <div className="mb-[0.8em]">
            <h4 className="text-[1em] md:text-[1.4em] font-semibold text-[#D5D5D5] opacity-80">
              {exp.company}
            </h4>
          </div>

          {/* Description Row */}
          <div className="mb-[1.5em]">
            <p className="text-[#8A8A8A] text-[0.9em] md:text-[1.15em] leading-relaxed max-w-4xl italic md:not-italic">
              {exp.description}
            </p>
          </div>

          {/* Separator Line */}
          <div className="w-full h-[1px] bg-white/10 group-hover:bg-white/30 transition-colors duration-300" />
        </motion.div>
      ))}
    </motion.div>
  );
};