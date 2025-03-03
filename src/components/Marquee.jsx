import React from "react";
import { motion, useReducedMotion } from "framer-motion";

function Marquee() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div 
      data-scroll 
      data-scroll-section 
      data-scroll-speed=".05" 
      className="w-full py-6 md:py-10 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl font-['Founders_Grotesk']"
    >
      <div className="text border-t-[1px] border-b-[1px] border-slate-400 flex overflow-hidden whitespace-nowrap">
        <motion.div
          className="flex"
          initial={{ x: 0 }}
          animate={shouldReduceMotion ? {} : { x: "-50%" }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: shouldReduceMotion ? 0 : 40,
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
    </div>
  );
}

export default Marquee;