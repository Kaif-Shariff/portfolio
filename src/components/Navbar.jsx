export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 px-4 md:px-10 py-4 md:py-6">
      <div className="flex items-center justify-between">
        <h1
          className="
            font-bold uppercase tracking-tighter whitespace-nowrap
            text-[clamp(18px,5vw,22px)] md:text-xl
            bg-[linear-gradient(110deg,#ffffff_0%,#e6e6e6_35%,#bdbdbd_65%,#ffffff_100%)]
            bg-clip-text text-transparent
          "
        >
          KAIF SHARIFF
        </h1>

        <div className="hidden md:flex items-center gap-4">
          <div
            className="
              flex items-center gap-6
              px-6 py-3
              rounded-full
              bg-black/40
              backdrop-blur-md
              border border-white/10
            "
          >
            <a
              href="#"
              className="font-montserrat font-semibold text-[#DCDCDC] text-sm hover:opacity-70 transition-opacity"
            >
              Home
            </a>
            <span className="h-4 w-px bg-white/20" />
            <a
              href="#"
              className="font-montserrat font-semibold text-[#DCDCDC] text-sm hover:opacity-70 transition-opacity"
            >
              Experience
            </a>
            <span className="h-4 w-px bg-white/20" />
            <a
              href="#"
              className="font-montserrat font-semibold text-[#DCDCDC] text-sm hover:opacity-70 transition-opacity"
            >
              Projects
            </a>
          </div>

          <button
            className="
              bg-white
              text-black
              px-4 py-2
              rounded-full
              text-md 
              hover:bg-gray-200
              transition-colors
            font-semibold
            font-montserrat
            "
          >
            Contact
          </button>
        </div>

        <button
          className="
            md:hidden
            bg-white text-black
            px-3 py-2
            rounded-full
            text-sm 
            font-montserrat
            font-bold
            hover:bg-gray-200
            transition-colors
          "
        >
          Contact
        </button>
      </div>
    </nav>
  );
};
