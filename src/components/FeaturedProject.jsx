import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { residentialProjects } from './ProjectsData';
import "../styles/FeaturedProject.css";

function FeaturedProject() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full py-20 pt-24 pb-10 font-['Founders_Grotesk']">
      <div className="w-full px-10 border-b-[1px] border-gray-500 border-opacity-25 pb-1">
        <h1 className='ftitle text-[4vw] font-["Founders_Grotesk"] tracking-tight'>
          Featured Projects
        </h1>
      </div>
      
      <div className="cardsec px-20 mt-10">
        <div className="card grid grid-cols-2 gap-x-10 gap-y-16">
          {residentialProjects.slice(0, 4).map((project, index) => (
            <ProjectCard key={project.id || index} {...project} />
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          <Link to="/Projects">
            <button
              className="group px-5 py-2 bg-black text-white rounded-full text-sm flex items-center space-x-3 transition-all duration-500"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="pr-3 pt-2">VIEW MORE</span>
              <div className="relative flex items-center justify-center w-6 h-6">
                {/* Dot */}
                <div
                  className={`absolute w-2 h-2 rounded-full bg-white transition-all duration-500 transform ${
                    isHovered ? "scale-0 opacity-0" : "scale-100 opacity-100"
                  }`}
                />
                {/* Arrow */}
                <BiRightArrowAlt
                  className={`absolute text-white text-2xl transition-all duration-500 transform ${
                    isHovered ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  }`}
                />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProject;
