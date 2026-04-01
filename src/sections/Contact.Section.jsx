import { useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import BlurText from "../components/BlurText";

const MagneticCTA = ({ email }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) / 8;
      const moveY = (clientY - window.innerHeight / 2) / 8;

      mouseX.set(moveX);
      mouseY.set(moveY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.a
      href={`mailto:${email}`}
      style={{ x, y }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="
        relative z-10
        flex items-center justify-center
        w-24 h-24 md:w-32 md:h-32 
        rounded-full border border-[#393838]
        bg-white/5 backdrop-blur-sm
        transition-colors duration-300 hover:bg-white hover:text-black
        group
      "
    >
      {/* Arrow Icon */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transform -rotate-45 transition-transform duration-300 group-hover:rotate-0"
      >
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
      </svg>
    </motion.a>
  );
};

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="
        relative
        w-full
        px-6 md:px-12 lg:px-24
        flex flex-col items-center justify-center
        min-h-[70svh]
        md:min-h-screen
        overflow-hidden
      "
    >
      <div className="w-full flex flex-col items-center justify-center">
        <BlurText
          text="LET'S GET IN CONTACT"
          delay={200}
          animateBy="words"
          direction="top"
          className="
            block w-full
            font-anek font-bold text-white mb-12
            text-center
            text-6xl md:text-8xl lg:text-[10rem]
            leading-[1.05] md:leading-none lg:leading-[0.95]
          "
        />

        {/* The Magnetic CTA Button */}
        <MagneticCTA email="kaif.shariff1234@gmail.com" />
      </div>
    </section>
  );
};
