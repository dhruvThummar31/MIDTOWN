// import React, { useEffect, useState } from 'react'; 
// import { FaArrowUpLong } from "react-icons/fa6"; 
// import '../styles/Landing.css'; 
// import { motion } from 'framer-motion';
// import Back from '../assets/back.jpg';

// function LandingPage() { 
//   const [isMediumOrLargeScreen, setIsMediumOrLargeScreen] = useState(window.innerWidth >= 768);

//   useEffect(() => {
//     const handleResize = () => setIsMediumOrLargeScreen(window.innerWidth >= 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return ( 
//     <div 
//       className="w-full h-screen pt-12 font-['Founders_Grotesk']"
//       {...(isMediumOrLargeScreen && { 'data-scroll': true, 'data-scroll-section': true, 'data-scroll-speed': "-0.3" })}
//     > 
//         <div className='textstructure mt-32 lg:mt-40 mb-8 lg:mb-48 px-6 md:px-10'>
//             <div className='masker'> 
//                 <div className='w-fit flex items-center'> 
//                     <h1 className='uppercase text-[8vw] md:text-[6vw]  leading-[6vw] md:leading-[5.3vw] tracking-tight   font-bold'>We Belive</h1> 
//                 </div> 
//             </div> 

//             <div className='masker'> 
//                 <div className='w-fit flex items-center'> 
                    
//                 <motion.div  
//                     initial={{ width: 0 }} 
//                     animate={{ width: "8vw" }} 
//                     transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5 }} 
//                     className='box mr-[1vw] ml-1 w-[8vw] rounded-sm h-[5vw] md:h-[4.3vw]  lg:-top-[0vw] relative bg-green-500'> 
//                 </motion.div>

                    
//                     <h1 className='uppercase text-[8vw] md:text-[6vw] leading-[6vw] md:leading-[5.3vw] tracking-tight font-bold'>our presence</h1> 
//                 </div> 
//             </div> 

//             <div className='masker'> 
//                 <div className='w-fit flex items-center'> 
//                      <h1 className='uppercase text-[8vw] md:text-[6vw]  leading-[6vw] md:leading-[5.3vw] tracking-tight font-bold'>Create Lasting Impact</h1> 
//                 </div> 
//             </div> 
//         </div> 

//         <div className='three border-t-[1px] border-zinc-400 mt-24 flex flex-col md:flex-row justify-between items-start md:items-center py-5 px-6 md:px-10 font-"FoundersGrotesk"'> 
//             {["For public and private companies", "From the first pitch to IPO"].map((item, index) => ( 
//                 <p key={index} className='text-md tracking-tight leading-none lg:text-lg'>{item}</p> 
//             ))} 
//             <div className='btn start flex flex-col md:flex-row items-start md:items-center gap-2'> 
//                 <div className='btnIn px-5 pt-1 border-[1px] border-zinc-400 font-light text-md capitalize rounded-full lg:text-lg'>Start from here</div> 
//                 <div className='w-7 h-7 rounded-full border-[1px] border-zinc-500 flex items-center justify-center md:flex hidden'> 
//                     <span className='rotate-[45deg]'> 
//                         <FaArrowUpLong /> 
//                     </span> 
//                 </div> 
//             </div> 
//         </div> 

//         {/* Scroll Indicator - Visible only on md and larger screens */}
//         {isMediumOrLargeScreen && (
//           <div className='scroll flex items-center justify-center'> 
//               <div className='mouse mt-5'> 
//                   <span className='mouse-wheel w'>Scroll</span> 
//               </div> 
//           </div>
//         )}
//     </div> 
//   ); 
// } 

// export default LandingPage;


import React, { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import "../styles/Landing.css"; 
import Back from "../assets/back.jpg"; // Background image
import Logo from "../assets/logo.png"; // Logo image

function LandingPage() {
  const [isMediumOrLargeScreen, setIsMediumOrLargeScreen] = useState(window.innerWidth >= 1008);

  useEffect(() => {
    const handleResize = () => setIsMediumOrLargeScreen(window.innerWidth >= 1008);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="relative w-full h-screen pt-12 font-['Founders_Grotesk']"
      {...(isMediumOrLargeScreen && {
        "data-scroll": true,
        "data-scroll-section": true,
        "data-scroll-speed": "-0.3",
      })}
      style={{
        backgroundImage: isMediumOrLargeScreen ? `url(${Back})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "end",
      }}
    >
      {/* Overlay Gradient */}
      {isMediumOrLargeScreen && <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/10"></div>}

      {/* Text Section */}
      <div className="textstructure mt-32 lg:mt-40 mb-8 lg:mb-48 px-6 md:px-10">
        {["We Believe", "Our Presence", "Create Impact"].map((text, index) => (
          <div className="masker" key={index}>
            <div className="w-fit flex items-center">
              {index === 1 && ( // Add logo only for 'Our Presence'
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "8vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5 }}
                  className="box mr-[1vw] ml-1 w-[8vw] rounded-sm h-[5vw] md:h-[4.3vw] lg:-top-[0vw] relative"
                  style={{
                    backgroundImage: `url(${Logo})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></motion.div>
              )}
              <h1 className="h1-three uppercase text-[8vw] md:text-[6vw] leading-[6vw] md:leading-[5.3vw] tracking-tight font-bold">
                {text}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* Info Section */}
      <div className="three border-t-[1px] border-zinc-400 mt-24 flex flex-col md:flex-row justify-between items-start md:items-center py-5 px-3 lg:px-6 md:px-10">
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
          <p key={index} className="text-md tracking-tight leading-none lg:text-lg">
            {item}
          </p>
        ))}
        <div className="btn start flex flex-col md:flex-row items-start md:items-center gap-2">
          <div className="btnIn px-5 pt-1 border-[1px] border-zinc-400 font-light text-md capitalize rounded-full lg:text-lg">
            Start from here
          </div>
          <div className="w-7 h-7 rounded-full border-[1px] border-black flex items-center justify-center hidden md:flex">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator (Visible on Medium+ Screens) */}
      {isMediumOrLargeScreen && (
        <div className="scroll flex items-center justify-center">
          <div className="mouse mt-5">
            <span className="mouse-wheel">Scroll</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default LandingPage;





