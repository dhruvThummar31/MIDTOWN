// import React, { useEffect,useState } from "react";
// import { motion } from "framer-motion";
// import ResBrand from "./ResBrand";
// import ProjectCard from './ProjectCard';
// import { Link } from 'react-router-dom';
// import { residentialProjects } from './ProjectsData';

// function Residential() {
//   const [isHovered, setIsHovered] = useState(false);

//   // Scroll to top when this component is rendered
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   // Variants for animation
//   const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         staggerChildren: 0.5, // Delay between child animations
//         duration: 2, // Animation duration
//       },
//     },
//   };

//   const textVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   return (
//     <div  className="font-['Founders_Grotesk']">
//       <motion.div
//         className="pt-[32vh] px-10 text-[6vw] leading-[6vw] tracking-tight rounded-xl "
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <motion.p
//           className="text-center font-light uppercase"
//           variants={textVariants}
//         >
//           Explore a collection
//         </motion.p>
//         <motion.p
//           className="text-center font-light tracking-normal uppercase text-[5.6vw]"
//           variants={textVariants}
//         >
//           of our standout
//         </motion.p>
//         <motion.p
//           className="text-center uppercase font-semibold text-[#004D43]"
//           variants={textVariants}
//         >
//           Residential Projects
//         </motion.p>
//       </motion.div>

//       <div>
//         <ResBrand/>
//       </div>

//       <div className="w-full py-20 pt-16 pb-20 font-['Founders_Grotesk']">
//       <div className="w-full px-10 border-b-[1px] border-gray-500 border-opacity-25 pb-1">
//         <h1 className='text-[4vw] font-["Founders_Grotesk"] tracking-tight'>
//            Projects
//         </h1>
//       </div>
      
//       <div className="px-20 mt-10">
//         <div className="grid grid-cols-2 gap-x-10 gap-y-16">
//           {residentialProjects.map((project, index) => (
//             <ProjectCard key={project.id || index} project={project} />
//           ))}
//         </div>
        
      
//       </div>
//     </div>
//     </div>
//   );
// }

// export default Residential;


import React, { useEffect,useState } from "react";
import { motion } from "framer-motion";
import ResBrand from "./ResBrand";
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';
import { residentialProjects } from './ProjectsData';
import '../styles/RCPI.css'

function Residential() {
  const [isHovered, setIsHovered] = useState(false);

  // Scroll to top when this component is rendered
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Variants for animation
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.5, // Delay between child animations
        duration: 2, // Animation duration
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div  className="font-['Founders_Grotesk']">
      <motion.div
        className="rcpi-main pt-[32vh] lg:pb-[3vw] px-10 text-[6vw] leading-[6vw] tracking-tight rounded-xl "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="rcpi-para text-center font-light uppercase"
          variants={textVariants}
        >
          Explore a collection
        </motion.p>
        <motion.p
          className="
          rcpi-mini-para text-center font-light tracking-normal uppercase text-[5.6vw]"
          variants={textVariants}
        >
          of our standout
        </motion.p>
        <motion.p
          className="rcpi-para text-center uppercase font-semibold text-[#004D43]"
          variants={textVariants}
        >
          Residential Projects
        </motion.p>
      </motion.div>

      <div>
        <ResBrand/>
      </div>

      <div className="rcpi-pro-main w-full py-20 pt-16 pb-20 font-['Founders_Grotesk']">
      <div className="rcpi-pro-sub w-full px-10 border-b-[1px] border-gray-500 border-opacity-25 pb-1">
        <h1 className='rcpi-h1 text-[4vw] font-["Founders_Grotesk"] tracking-tight'>
           Projects
        </h1>
      </div>
      
      <div className="rcpi-cardsec px-20 mt-10">
        <div className="rcpi-card grid grid-cols-2 gap-x-10 gap-y-16">
          {residentialProjects.map((project, index) => (
              <Link
              key={project.id}
              to={`/property/${project.id}`}
              state={{ project }}
            >
             <ProjectCard {...project} />
            </Link>
          ))}
        </div>
        
      
      </div>
    </div>
    </div>
  );
}

export default Residential;
