import LightRays from "../components/LightRays";
import DecryptedText from "../components/DecryptedText";
import titleSVG from "../assets/headings/title.svg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full z-40 px-4 md:px-10 py-4 md:py-6 pointer-events-none">
        <svg viewBox="0 0 200 30" className="w-45 md:w-55">
          <defs>
            <linearGradient
              id="metallic-hero"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="35%" stopColor="#e6e6e6" />
              <stop offset="65%" stopColor="#bdbdbd" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>
          <text
            x="0"
            y="22"
            fill="url(#metallic-hero)"
            fontWeight="bold"
            fontSize="20"
            fontFamily="sans-serif"
            letterSpacing="-1"
          >
            KAIF SHARIFF
          </text>
        </svg>
      </div>

      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#f2f2f2"
          rayLength={20}
          raysSpeed={1.5}
        />
      </div>

      <div className="relative z-10 px-4 mb-20">
        <img
          src={titleSVG}
          alt="Software Developer you need"
          className="w-[85%] sm:w-[70%] md:w-[80%] lg:w-full max-w-300 mx-auto"
        />
      </div>
    </section>
  );
};
