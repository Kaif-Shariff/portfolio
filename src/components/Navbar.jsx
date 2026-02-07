export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 px-4 md:px-10 py-4 md:py-6">
      <div className="flex items-center justify-between">
        
        {/* Spacer instead of logo */}
        <div className="w-45 md:w-55" />

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-6 px-6 py-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
            <a href="#home" className="font-montserrat font-semibold text-[#DCDCDC] text-sm hover:opacity-70">
              Home
            </a>
            <span className="h-4 w-px bg-white/20" />
            <a href="#projects" className="font-montserrat font-semibold text-[#DCDCDC] text-sm hover:opacity-70">
              Projects
            </a>
            <span className="h-4 w-px bg-white/20" />
            <a href="#experience" className="font-montserrat font-semibold text-[#DCDCDC] text-sm hover:opacity-70">
              Experience
            </a>
            <span className="h-4 w-px bg-white/20" />
            <a href="#contact" className="font-montserrat font-semibold text-[#DCDCDC] text-sm hover:opacity-70">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
