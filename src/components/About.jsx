import React,{useState} from 'react'
import agent from '../assets/Agent.jpg'
import { BiRightArrowAlt } from "react-icons/bi"; 
import { motion } from "framer-motion";
import '../styles/About.css'
import { Link } from 'react-router-dom';

function About() {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.11" className='w-full bg-[#CDEA68] rounded-3xl text-black '>
        <div  className='py-20 px-10 pb-10'>
            <h1 className='abouth font-["FounderGrotesk"]  text-[2.7vw]  
            leading-[3.7vw] tracking-tight mb-7 font-semibold w-[80%] '>We Find : <span className='underline'>A legacy built on inspiration Idea that spark Innovation.</span> </h1>
            <h1 className='abouth font-["FounderGrotesk"]  text-[2.7vw]  
            leading-[3.7vw] tracking-tight  w-[80%] '>Today we stand strong through the trust of our customers and the reson for the trust is our transparency, accurate and fast service and our strong team.
            </h1>
        </div>

        <div className="border-t-[1.5px] border-gray-600 border-opacity-25 mb-6"></div>
      <div className="container px-10  grid grid-cols-2 font-['FounderGrotesk'] pb-16 ">
        {/* Left Column */}
        <div>
          <h2 className="expect text-[#212121] text-sm-black text-xl lg:text-3xl font-bold">What you can expect:</h2>
        </div>

        {/* Middle Column */}
        <div className='container mx-auto grid grid-cols-2 gap-20 '>
        <div>
          <p className="p text-black mb-8 lg:text-[1.3vw]">
          We are constantly striving to deliver a premium lifestyle beyond our customers' expectations with an aim to be affordable to our customers.
          </p>
          <p className="p text-black  lg:text-[1.3vw]">
          We are committed to reshaping modern urban living with continuous innovation and a strategy focused on the best interests of our customers..
          </p>
        </div>

        {/* Right Column */}
        <div className='socialabout flex flex-col justify-end items-end lg:-mr-[2.5vw]'>
          <h3 className="text-black font-semibold flex justify-end items-start lg:text-[1.3vw]">S:</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <a
                href="#"
                className="text-black underline hover:text-gray-600 transition-colors lg:text-[1.3vw]"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black underline hover:text-gray-600 transition-colors lg:text-[1.3vw]"
              >
                Behance
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black underline hover:text-gray-600 transition-colors lg:text-[1.3vw]"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black underline hover:text-gray-600 transition-colors lg:text-[1.3vw] "
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t-[1.5px] border-gray-500 border-opacity-25 mb-6"></div>

    <div className="container px-10  py-5 grid grid-cols-2  gap-10">
    <div className='font-["Founder_Grotesk"]'>
          <h2 className="approch text-black text-5xl font-light tracking-tight mb-6">Our approach:</h2>
            <button
              className="btn group px-5 py-3 bg-black text-white rounded-full text-sm flex items-center space-x-3 transition-all duration-500"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Link to='/about-us' className="pr-3">VIEW MORE</Link>
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
        </div>

        {/* Right Section */}
        <div className="mb-[3vw]">
          <img
            src={agent} 
            alt="Approach"
            className={`img rounded-lg transition-transform duration-700 lg:ml-[4vw]  ${
              isHovered ? "scale-95" : "scale-100"
            }`}
          />
        </div>
      </div>
    </div>
  )
}

export default About;

