import { ProjectImages } from "../assets/projects";
import { ProjectCard } from "../components/ProjectCard";
import { motion } from "framer-motion";

export const ProjectSection = () => {
  const projects = [
    {
      title: "Deal Done Properties",
      description:
        "Real Estate property showcase and purchase website built for high-end clients.",
      image: ProjectImages.dealdone,
      industry: "Real Estate",
      type: "Website",
      tags: ["React", "Tailwind", "Firebase", "Framer Motion"],
    },
    {
      title: "S1Media",
      description:
        "A premium media agency platform focusing on video production and branding.",
      image: ProjectImages.s1media,
      industry: "Media Agency",
      type: "Website",
      tags: ["React", "Tailwind", "Firebase", "Framer Motion"],
    },
    {
      title: "Gojaunt",
      description: "A tours and traveling website",
      image: ProjectImages.gojaunt,
      industry: "Tours & Travel",
      type: "Website",
      tags: ["React", "Tailwind", "Firebase", "Framer Motion"],
    },
    {
      title: "RG Movies",
      description:
        "A premium media agency platform focusing on video production and branding.",
      image: ProjectImages.rgmovies,
      industry: "Movies",
      type: "Website",
      tags: ["ASP.NET", "Tailwind", "SQL"],
    },
    {
      title: "Vortexa",
      description: "I.T service provider website",
      image: ProjectImages.vortexa,
      industry: "Service",
      type: "Website",
      tags: ["React", "Tailwind", "Firebase", "Framer Motion"],
    },
    {
      title: "Rock Paper Scissors",
      description: "A rock scissors paper game",
      image: ProjectImages.rps,
      industry: "Game",
      type: "Mobile",
      tags: ["Java", "XML", "Android SDK", "Figma"],
    },
    {
      title: "Bakalaa Website",
      description: "A rock scissors paper game",
      image: ProjectImages.rps,
      industry: "Ecommerce",
      type: "Website",
      tags: ["React", "Tailwind", "Firebase", "Framer Motion"],
    },
    {
      title: "Bakalaa: Grocery in minutes*",
      description: "A quick-commerse app which delivers to your doorstep",
      image: ProjectImages.rps,
      industry: "Ecommerce App",
      type: "Mobile",
      tags: ["Flutter", "Bloc", "Firebase", "Payment Gateway", "SMS Auth"],
    },
    {
      title: "S1media App",
      description: "A rock scissors paper game",
      image: ProjectImages.rps,
      industry: "Showcase App",
      type: "Mobile",
      tags: ["Flutter", "Figma", "Firebase", "Auth"],
    },
    {
      title: "Bakalaa Restaurant",
      description: "A rock scissors paper game",
      image: ProjectImages.rps,
      industry: "Restaurant Management App",
      type: "Mobile",
      tags: ["Flutter", "Bloc", "Firebase", "Realtime Order Tracking", "REST"],
    },
    {
      title: "Bakalaa Admin",
      description: "A rock scissors paper game",
      image: ProjectImages.rps,
      industry: "CMS",
      type: "Mobile",
      tags: ["Flutter", "Bloc", "Firebase", "Realtime Data", "REST"],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.97,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full py-20 px-6 md:px-12 lg:px-24 flex flex-col items-center">
      {/* Heading */}
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
          PROJECTS
        </h2>
      </div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-8xl"
      >
        {projects.map((project, idx) => (
          <motion.div key={idx} variants={cardVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
