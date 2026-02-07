import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ProjectImages } from "../assets/projects";
import { ProjectCard } from "../components/ProjectCard";

export const ProjectSection = () => {
  const INITIAL_COUNT = 6;

  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const cardsRef = useRef([]);
  cardsRef.current = [];

  const setCardRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const projects = [
    {
      title: "Gojaunt",
      description: "A tours and traveling website",
      image: ProjectImages.gojaunt,
      industry: "Tours & Travel",
      type: "Website",
      tags: ["React", "Tailwind", "Firebase", "Framer Motion"],
    },
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
      title: "Vortexa",
      description: "I.T service provider website",
      image: ProjectImages.vortexa,
      industry: "Service",
      type: "Website",
      tags: ["React", "Tailwind", "Firebase", "Framer Motion"],
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
      title: "S1Media",
      description:
        "A premium media agency platform focusing on video production and branding.",
      image: ProjectImages.s1media,
      industry: "Media Agency",
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
      title: "Rock Paper Scissors",
      description: "A rock scissors paper game",
      image: ProjectImages.rps,
      industry: "Game",
      type: "Mobile",
      tags: ["Java", "XML", "Android SDK", "Figma"],
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

  useEffect(() => {
    if (visibleCount <= INITIAL_COUNT) return;

    const newCards = cardsRef.current.slice(INITIAL_COUNT);

    gsap.fromTo(
      newCards,
      {
        opacity: 0,
        y: 30,
        scale: 0.95,
        filter: "blur(8px)",
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.08,
      },
    );
  }, [visibleCount]);

  const handleToggle = () => {
    if (visibleCount === INITIAL_COUNT) {
      setVisibleCount(projects.length);
    } else {
      const extraCards = cardsRef.current.slice(INITIAL_COUNT);

      gsap.to(extraCards.reverse(), {
        opacity: 0,
        y: 30,
        scale: 0.95,
        filter: "blur(8px)",
        duration: 0.4,
        ease: "power2.inOut",
        stagger: 0.08,
        onComplete: () => {
          setVisibleCount(INITIAL_COUNT);
          cardsRef.current = cardsRef.current.slice(0, INITIAL_COUNT);
        },
      });
    }
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full py-10 px-6 md:px-12 lg:px-24 flex flex-col items-center"
    >
      <div className="relative z-10 px-2 md:px-4 lg:px-2 w-full">
        <div className="flex flex-col items-start bg-[linear-gradient(110deg,#ffffff_0%,#e6e6e6_18%,#9f9f9f_35%,#f5f5f5_55%,#bdbdbd_75%,#ffffff_100%)] bg-clip-text text-transparent">
          <div className="flex flex-col w-fit overflow-visible pb-6 md:pb-10">
            <span className="font-birthstone text-[38px] sm:text-[42px] md:text-[60px] self-start -mb-4.5 md:-mb-7 -ml-0.5 md:-ml-px leading-none pb-5">
              The
            </span>
            <h1 className="font-anek font-extrabold uppercase tracking-[-0.05em] text-left leading-none">
              <span className="block text-[60px] sm:text-[88px] md:text-[90px] leading-[0.8]">
                Projects
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-8xl">
        {projects.slice(0, visibleCount).map((project) => (
          <div key={project.title} ref={setCardRef}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center w-full">
        <button
          onClick={handleToggle}
          className="border border-[#393838] bg-[#101010] px-6 py-2.5 rounded-full text-[10px] uppercase tracking-widest text-white/90 hover:bg-[#151515] transition-colors"
        >
          {visibleCount === INITIAL_COUNT ? "Show More" : "Show Less"}
        </button>
      </div>
    </section>
  );
};
