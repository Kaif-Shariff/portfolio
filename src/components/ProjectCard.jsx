import React from "react";
export const ProjectCard = ({ project }) => {
  return (
    <div className="w-full">
      {/* Main Card: Solid background, 1px stroke, 20px radius */}
      <div 
        className="flex flex-col rounded-[20px] p-2 border overflow-hidden"
        style={{ 
          backgroundColor: '#0C0C0C', 
          borderColor: '#393838', 
          borderWidth: '1px' 
        }}
      >
        {/* Top Section: Rectangular Website Image */}
        <div className="relative w-full aspect-video rounded-[12px] overflow-hidden bg-white">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Bottom Section: Single Line Title & Tag */}
        <div className="mt-4 mb-1 px-1">
          <div className="flex justify-between items-center gap-4">
            {/* Title & Subtitle Group */}
            <div className="flex flex-col min-w-0">
              <h3 className="text-xl md:text-2xl font-bold text-white truncate leading-tight">
                {project.title || "Title"}
              </h3>
              <p className="text-zinc-500 text-sm md:text-base font-medium truncate">
                {project.industry || "Type"}
              </p>
            </div>

            {/* Website Tag: Single line alignment */}
            <div 
              className="shrink-0 px-3 py-1.5 rounded-lg border"
              style={{ borderColor: '#393838', backgroundColor: 'rgba(255,255,255,0.05)' }}
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