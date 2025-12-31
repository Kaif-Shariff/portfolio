import LightRays from "../components/LightRays";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#f2f2f2"
          raysSpeed={1.5}
        />
      </div>

      <div className="relative z-10 px-4">
        <div
          className="
      flex flex-col items-center
      bg-[linear-gradient(110deg,#ffffff_0%,#e6e6e6_18%,#9f9f9f_35%,#f5f5f5_55%,#bdbdbd_75%,#ffffff_100%)]
      bg-clip-text text-transparent
    "
        >
          <div className="flex flex-col w-fit overflow-visible pb-6 md:pb-10">
            <span
              className="
          font-birthstone
          text-[32px] sm:text-[42px] md:text-[60px]
          self-start
          mb-[-18px] md:mb-[-28px]
          ml-[-6px] md:ml-[-8px]
          leading-none
          pb-5
          pl-3
        "
            >
              The
            </span>

            <h1 className="font-anek font-extrabold uppercase tracking-[-0.05em] text-center leading-none">
              <span className="block text-[56px] sm:text-[88px] md:text-[160px] leading-[0.8]">
                SOFTWARE
              </span>
              <span className="block text-[56px] sm:text-[88px] md:text-[160px] leading-[0.8] -mt-[0.08em]">
                DEVELOPER
              </span>
            </h1>

            <span
              className="
          font-birthstone
          text-[32px] sm:text-[42px] md:text-[60px]
          self-end
          mt-[-18px] md:mt-[-30px]
          mr-[-6px] md:mr-[-10px]
          leading-none
          pb-2
          pt-5
          pr-5
        "
            >
              you need!
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-1 flex flex-col items-center gap-2 animate-bounce">
        <div className="border bg-[#101010] font-montserrat border-[#393838] px-4 py-2 rounded-full text-[10px] uppercase tracking-widest">
          Scroll
        </div>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>
    </section>
  );
};
