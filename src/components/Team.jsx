import React, { useState } from 'react';
import ag from '../assets/ag.jpg'
import agg from '../assets/agg.jpg'
import aggg from '../assets/aggg.jpg'
import log from '../assets/log.png'
import { motion } from "framer-motion";
import '../styles/Team.css'

const teamMembers = [
  { fname: 'HIREN',lname:'THUMMAR', role: 'Founder and CEO', image: agg },
  { fname: 'DHRUV',lname:'THUMMAR', role: 'CTO', image: aggg },
  { fname: 'GAUTAM',lname:'SUDANI', role: 'COO', image: ag },
  { fname: 'MITEN',lname:'GAJERA', role: 'SALES COORDINATOR', image: agg },
  { fname: 'DHRUVI',lname:'SUDANI', role: 'CFO', image: ag },
];

function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleHover = (e) => {
    setHovered(true);
    const rect = e.target.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  return (
    <div className='team-main bg-[#004D43] rounded-tr-2xl rounded-tl-2xl   lg:h-auto lg:pb-0 py-20'>
        <div className="text border-t-[1px] border-b-[1px] border-slate-400 flex overflow-hidden whitespace-nowrap border-opacity-50">
        <motion.div
          className="flex "
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 200,
          }}
        >
         {[1, 2, 3].map((index) => (
            <h1 
              key={index}
              className="text-[25vw] md:text-[12vw] lg:text-[12vw] uppercase font-semibold tracking-tight text-slate-50 px-4 md:px-10 
                        -mb-[3.5vw] md:-mb-[5.5vw] lg:-mb-[3vw] 
                        -mt-[1vw] md:-mt-[1.5vw] lg:-mt-[3vw]"
            >
              Discover properties that match your dreams - Midtown Property
            </h1>
          ))}
        </motion.div>
      </div>

      <div className="team-titlecon w-full px-10 lg:px-5 pt-14 border-b-[1px] border-gray-500 border-opacity-50 pb-1">
          <h1 className="stitle text-[4vw] font-['Founders_Grotesk'] tracking-tight text-white  ">Our Executive Team</h1>
        </div>
        <div className="team-titlecon service-section px-10 lg:px-5 py-5">
          <h2 className=" text-2xl md:text-3xl font-light mb-4 text-white uppercase"><span className='text-yellow-600'>→</span>   Real peoples, real results</h2>
      </div>

    <div className="p-10   flex items-center justify-center min-h-screen ">
      {/* Card Container */}
      <div className="relative w-[90%] max-w-[900px] h-auto  -mt-[70vh] ">
        {teamMembers.map((member, index) => {
          const isVisible = index === currentIndex;
          const isNext = (index - currentIndex + teamMembers.length) % teamMembers.length === 1;

          return (
            <div
              key={index}
              onClick={isVisible ? handleNextCard : null}
              onMouseMove={handleHover}
              onMouseLeave={() => setHovered(false)}
              className={`absolute transition-all duration-1000 ease-in-out ${
                isVisible
                  ? 'opacity-100 translate-x-0 z-20'
                  : isNext
                  ? 'opacity-70 translate-x-[10%] z-5'
                  : 'opacity-0 translate-x-[40%] z-0'
              } bg-white rounded-xl shadow-lg w-full flex items-center cursor-pointer`}
              style={{
                transform: isVisible
                  ? 'scale(1)'
                  : isNext
                  ? 'scale(0.87) translateX(10%)'
                  : 'scale(0.89) translateY(60%)',
              }}
            >
            {/* Hover Effect */}
            {hovered && isVisible && (
            <>
                {/* Small Circular Pointer */}
                <div
                className="absolute bg-black rounded-full w-20 h-20 pointer-events-none opacity-25 flex items-center justify-center"
                style={{
                    top: cursorPos.y - 32, // Half of the circle's height (16px * 2 = 32px)
                    left: cursorPos.x - 32, // Half of the circle's width
                }}
                >
                {/* Text */}
                <span className="text-white text-center text-sm font-light pointer-events-none mt-2">
                    NEXT
                </span>
                </div>  
            </>
            )}



              {/* Content */}
              <div className="flex flex-col  p-5 pb-0 w-full">
                <div className='flex justify-between'>
                    <span> <img src={log} alt="LOGO" className='w-auto h-12 lg:h-20 lg:-ml-[6vw] -ml-[4.5vw] -mt-2'  /></span>
                    <img
                    src={member.image}
                    alt={member.fname}
                    className="w-50 h-50 md:w-[22vw] md:h-[22vw] object-cover rounded-lg "
                    />
                    
                </div>

                <p className="text-gray-600 mt-1 text-end">{member.role}</p>
                <h1 className="fname name text-7xl lg:text-[4.5vw] font-extrabold text-black leading-3 tracking-tight mt-10 pt-5">
                  {member.fname}
                </h1>
                <h1 className="lname name text-7xl lg:text-[4.5vw] font-extrabold text-black leading-none tracking-tight  mt-2  ">
                  {member.lname}
                </h1>
                <p className="index absolute bottom-5 right-5 text-4xl font-bold text-black">
                  {index + 1}/{teamMembers.length}
                </p>
              </div>
            </div>
          );
        })}
        
      </div>
    </div>
    </div>
  );
}

export default Team;
