import React, { useState } from 'react';
import '../styles/ProjectCard.css';

function ProjectCard({ title, subtitle, images, category, index, details }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="cardmain space-y-2 font-['Founders_Grotesk']">
      {/* Title with bullet point */}
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-black rounded-full" />
        <h3 className="cardtitle text-xl  pt-[6px] uppercase">{title}</h3>
      </div>

      <div
        className="imgage relative w-full h-[500px] overflow-hidden group cursor-pointer rounded-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/60 z-10 transition-all duration-500 ease-in-out
                     ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Image */}
        <img
          src={images}
          alt={title}
          className={` w-full h-full object-cover transition-all duration-700 ease-in-out
                     ${isHovered ? 'scale-105' : 'scale-100'} 
                     ${isHovered ? 'border-none' : ''}`}
        />

        {/* Center Content with Wave Animation */}
        <div
          className={`absolute inset-0 flex flex-col justify-center items-center z-20 transition-all duration-500`}
        >
          <h2
            className={`text-4xl font-light text-white text-center mb-2 
                    transition-all duration-700 ease-in-out
                    ${isHovered 
                      ? 'opacity-100 transform translate-y-0 animate-wave' 
                      : 'opacity-0 transform translate-y-10'}`}
          >
            {title}
          </h2>
          <p
            className={`text-lg text-zinc-400 text-center
                    transition-all duration-700 delay-100 ease-in-out
                    ${isHovered 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform translate-y-10'}`}
          >
            {subtitle}
          </p>
        </div>

        {/* Bottom Content */}
        <div
          className={`absolute bottom-0 left-0 w-full p-8 z-20 flex justify-between items-center
                     transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          <span className="font-light text-white">0{index + 1}</span>
          <button className="text-white transition-transform duration-300 group">
            More Information
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 text-white">→</span>
          </button>
        </div>
      </div>

      {/* Property Details Section - Outside the Card */}
      <div
        className={`flex flex-wrap gap-3 justify-start mt-4 transition-all duration-500`}
      >
        {details?.length > 0 ? (
          details.map((detail, index) => (
            <span
              key={index}
              className="px-4 pt-[7px] text-sm bg-transparent border-[1px] border-black rounded-full 
                         hover:bg-black hover:text-white transition-all duration-300 cursor-pointer font-['Founders_Grotesk']"
            >
              {detail}
            </span>
          ))
        ) : (
          <span className="text-black">No details available</span>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
