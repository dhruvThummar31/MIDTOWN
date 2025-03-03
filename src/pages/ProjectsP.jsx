

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Contact from "../components/Contact";
import LocomotiveScroll from "locomotive-scroll"; // Import the library
import "locomotive-scroll/dist/locomotive-scroll.css"; // Import the library styles
import '../styles/ProjectPage.css'


const projects = [
  {
    name: "/residential",
    id: 1,
    title: "Residential",
    description: "Apartments, Bungalows, Duplex, Penthouse, Rowhouse, and more...",
    image: "https://media.istockphoto.com/id/1363609937/photo/sao-paulo-skyline-brazil.jpg?s=612x612&w=0&k=20&c=Qi1qHql9GfeSA03pU30P6ovhiPTpNAPH_sNLmiU9Ud4=",
  },
  {
    name: "/commercial",
    id: 2,
    title: "Commercial",
    description: "Dealing in Offices, Showrooms, Shops, Retail Stores, Shopping Centers, and more...",
    image: "https://media.istockphoto.com/id/184619832/photo/business-district-at-dusk-london.jpg?s=612x612&w=0&k=20&c=kWT71b_oVzxvD6uxWNBAMkqyd6-tOHomFvBjHeSZ71o=",
  },
  {
    name: "/plot",
    id: 3,
    title: "Land / Plot",
    description: "Dealing in Agricultural Land, N.A. Land, Farmhouse, Plots, and more...",
    image: "https://media.istockphoto.com/id/2094257663/photo/imaginary-cadastral-map-with-buildings-land-parcel-and-vacant-plot-land-records-and-property.jpg?s=1024x1024&w=is&k=20&c=Rm_Rvwlu_MbIgZD4HccUhCN6qaESCaEhfJpbHs7qWyY=",
  },
  {
    name: "/industrial",
    id: 4,
    title: "Industrial",
    description: "Dealing in Warehouses, Godowns, Industrial Land & Plots, Factory, and more...",
    image: "https://plus.unsplash.com/premium_photo-1677655297897-c28abe1bf6b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SW5kdXN0cmlhbCUyMGxhbmR8ZW58MHx8MHx8fDA%3D",
  },
];

const ProjectsP = () => {
  useEffect(() => {
   
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"), // The container
      smooth: true, // Smooth scrolling
    });

    // Cleanup on component unmount
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div
      className="pro-par font-['Founders_Grotesk']"
      data-scroll-container // Add scroll container attribute
    >
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.2"
        className="pro-main bg-[#CDEA68] py-[34vh] px-10 text-[7vw] lg:text-[6vw] leading-[5.3vw] tracking-tight font-bold rounded-xl"
      >
        <h1 className="pro-title">PROJECTS</h1>
      </div>

      <div
        data-scroll
        data-scroll-section
        data-scroll-speed=".3"
        className="pro-in text-black py-10 pt-24 px-6 md:px-10 font-['Founders_Grotesk'] bg-[#f1f1f1]"
      >
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <h2 className="text-4xl font-bold leading-none">
            <span className="block text-gray-700 text-lg uppercase mb-2">
              Additional
            </span>
            Natwithlingand
          </h2>
          <p className="pro-para-top  text-sm lg:text-[1.2vw] text-gray-700 max-w-lg text-center md:text-right mt-4 md:mt-0">
            In addition to creating websites, we also perform a full range of
            visual packaging projects for goods and projects.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col md:flex-row items-start border-t border-gray-700 pt-6"
            >
              {/* Image */}
              <div
                className="pro-img w-full md:w-1/4 h-48 lg:h-56 bg-cover bg-center rounded-lg flex-shrink-0 transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${service.image})`,
                }}
              ></div>

              {/* Content */}
              <Link
                to={service.name}
                className="md:w-2/3 md:pl-10 mt-4 md:mt-0 text-center md:text-left"
              >
                <div className="pro-img-title flex items-center justify-center md:justify-start relative group pt-[10vh]">
                  {/* Title */}
                  <h3 className="  text-4xl font-semibold relative">
                    {service.title}
                    {/* Underline */}
                    <span className="absolute left-0 bottom-[-1px] w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-full"></span>
                  </h3>
                  {/* Arrow */}
                  <span className="text-yellow-700 text-2xl ml-4 transition-transform duration-500 group-hover:translate-x-2">
                    →
                  </span>
                </div>
                <p className="pro-img-subtitle text-gray-700 text-sm mt-2 lg:text-[1.1vw]">
                  {service.description}
                </p>
              </Link>

              {/* Number */}
              <div className="pro-img-index text-3xl font-bold text-gray-600 mt-4 md:mt-0 md:ml-auto">
                {String(service.id).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pro-con -mt-[30vh]">
        <Contact />
      </div>
    </div>
  );
};

export default ProjectsP;
