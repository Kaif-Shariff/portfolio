import { ExperienceList } from "../components/ExperienceList";

export const ExperienceSection = () => {
  const experiences = [
    {
      role: "Software Developer",
      company: "Kodeinnovate Solution Private Limited",
      description:
        'Leading the development of company\'s flagship ecommerce app called "Bakalaa". A platform to delivery goods and items to doorstep. Also managing the suite of application required to manage and operate the platform',
      duration: "2024 - Present",
    },
    {
      role: "Frontend Developer",
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
    <section 
    id="experience"
    className="relative min-h-screen w-full py-10 px-6 md:px-12 lg:px-24 flex flex-col items-center">
      {/* Heading Logic */}
      <div className="relative z-10 px-2 md:px-4 lg:px-2 w-full ">
        <div className="flex flex-col items-start bg-[linear-gradient(110deg,#ffffff_0%,#e6e6e6_18%,#9f9f9f_35%,#f5f5f5_55%,#bdbdbd_75%,#ffffff_100%)] bg-clip-text text-transparent">
          <div className="flex flex-col w-fit overflow-visible pb-6 md:pb-10">
            <span className="font-birthstone text-[38px] sm:text-[42px] md:text-[60px] self-start mb-[-25px] md:mb-[-28px] ml-[2px] md:ml-[1px] leading-none pb-9">
              My
            </span>
            <h1 className="font-anek font-extrabold uppercase tracking-[-0.05em] text-left leading-none">
              <span className="block text-[50px] sm:text-[88px] md:text-[90px] leading-[0.8]">
                Experience
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* The List Component - We pass the array here */}
      <div className="relative w-full px-2 pt-10">
        <ExperienceList experiences={experiences} />
      </div>
    </section>
  );
};
