import { ExternalLink } from "lucide-react"; // Common icon library, or use your own SVG

export const ProjectCard = ({ project }) => {
  return (
    <div className="w-full">
      <div
        className="flex flex-col rounded-[20px] p-2 border overflow-hidden"
        style={{
          backgroundColor: "#0C0C0C",
          borderColor: "#393838",
          borderWidth: "1px",
        }}
      >
        {/* Top Section: Image with Hover Overlay */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-full aspect-video rounded-xl overflow-hidden bg-[#1A1A1A] block cursor-pointer"
        >
          {/* The Image */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500"
          />

          {/* Hover Overlay & Icon */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-start justify-end p-4">
            <div className="bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <ExternalLink size={20} className="text-white" />
            </div>
          </div>
        </a>

        {/* Bottom Section */}
        <div className="mt-4 mb-1 px-1">
          <div className="flex justify-between items-center gap-4">
            <div className="flex flex-col min-w-0">
              <h3 className="text-xl md:text-2xl font-bold text-white truncate leading-tight">
                {project.title || "Title"}
              </h3>
              <p className="text-zinc-500 text-sm md:text-base font-medium truncate">
                {project.industry || "Type"}
              </p>
            </div>

            <div
              className="shrink-0 px-3 py-1.5 rounded-xl border"
              style={{
                borderColor: "#393838",
                backgroundColor: "rgba(255,255,255,0.05)",
              }}
            >
              <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase">
                {project.type}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
