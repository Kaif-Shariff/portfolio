import { ExperienceList } from "../components/ExperienceList";

export const ExperienceSection = () => {
  const experiences = [
    {
      role: "Software Developer",
      company: "Kodeinnovate Solution Private Limited",
      description: `Develop and maintain mobile applications for Android & iOS using React Native/Flutter, focusing on responsive UI and smooth user experience. Manage complex application state using Redux, Zustand, Bloc, GetX or Provider based on project requirements to maintain predictable UI behavior and scalable logic. Deploy and maintain applications on the Google Play Store and Apple App Store.`,
      duration: "2024 - Present",
    },
    {
      role: "Freelancer",
      company: "Gojaunt",
      description:
        "I led the development of GoJaunt, a travel and tours platform featuring a React web interface with Framer-driven animations and a cross-platform React Native app that aggregates real-time flight data via the TravelBoutique API and automated visa requirements through the Atlas API.",
      duration: "2025",
    },
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen w-full py-10 px-6 md:px-12 lg:px-24 flex flex-col items-center"
    >
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
