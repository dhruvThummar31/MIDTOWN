import React from 'react';
import { FaMapMarkerAlt, FaHome, FaExpand, FaCalendarAlt, FaBuilding } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";
import { PiBuildingApartmentLight } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BiBuildingHouse, BiArea } from 'react-icons/bi';
import { RiParkingBoxLine } from "react-icons/ri";
import { MdApartment, MdLocationOn } from 'react-icons/md';
import { IoHomeOutline } from 'react-icons/io5';
import { useLocation, useParams } from "react-router-dom";
import {   commercialProjects } from '../components/ProjectsData';
import { FaLocationDot, FaTree, FaHouse, FaDumbbell, FaPaintbrush, FaWifi } from 'react-icons/fa6';
import { MdSecurity, MdSolarPower, MdChildCare, MdDirectionsWalk, MdLocalParking, MdSportsBasketball, MdCasino, MdChildFriendly, MdHomeWork, MdDoorbell, MdLock } from 'react-icons/md';
import { GiMeditation } from 'react-icons/gi';
import '../styles/PropertyP.css'


function PropertyCP ()  {
  
  const keyFeatures = [
    { icon: <FaLocationDot />, text: "Promising Location." },
    { icon: <FaTree />, text: "Exquisite Landscape Garden." },
    { icon: <FaHouse />, text: "Designer Homes." },
    { icon: <FaDumbbell />, text: "Well Equipped Gymnasium." },
    { icon: <FaPaintbrush />, text: "Aesthetic Look." },
    { icon: <FaWifi />, text: "Hassle Free Connectivity." },
  ];

  const amenities = {
    Convenience: [
     
      { icon: <MdSolarPower />, text: "Power Back Up" },
      { icon: <GiMeditation />, text: "Meditation Zone" },
      { icon: <MdDirectionsWalk />, text: "Senior Citizen Sitting Area" },
      { icon: <MdLocalParking />, text: "Parking and transportation" },
    ],
    Sports: [
      { icon: <MdSportsBasketball />, text: "Gymnasium" },
      { icon: <MdCasino />, text: "Indoor Games" },
      { icon: <MdChildCare />, text: "Kids Play Area" },
    ],
    Leisure: [
      { icon: <MdChildFriendly />, text: "Indoor Kids' Play Area" },
      { icon: <MdHomeWork />, text: "Vastu-compliant designs" },
      { icon: <MdCasino />, text: "Indoor Games And Activities" },
    ],
    Security: [
     
      { icon: <MdDoorbell />, text: "Video Door Phone" },
      { icon: <MdSecurity />, text: "Entrance Gate With Security" },
      { icon: <MdLock />, text: "Smart locks" },
    ],
  }
  const { id } = useParams();
  const location = useLocation();
 
  console.log(id);
  const project = commercialProjects.find((project) => project.id === parseInt(id, 6));

  if (!project) {
    return <div>Project not found</div>; // Handle invalid id
  }


  return (
    <div className='font-["Founders_Grotesk"]'>
     <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), 
            url(${project.bg})`,
        }}
      >
        <div className="pro-name absolute bottom-12 left-12  text-white">
          <h1 className="text-5xl font-light tracking-tight ">{project.title}</h1>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-md">
              <span>📍</span> {project.area}
            </div>
            <div className="pro-btn-cat text-md">{project.bt1}</div>
          </div>
          <div className="flex gap-3 mt-2">
            <span className="px-4 py-1 pt-2 border border-white rounded-full text-sm">{project.bt1}</span>
            <span className="px-4 py-1 pt-2 border border-white rounded-full text-sm">{project.bt2}</span>
            <span className="px-4 py-1 pt-2 border border-white rounded-full text-sm">{project.bt3}</span>
          </div>
        </div>
        <div className="pro-btn-sec absolute bottom-12 right-12 flex gap-4">
          <button className="px-6 py-1 pt-2 bg-white text-black rounded hover:-translate-y-1 transition-transform">
            ENQUIRE NOW
          </button>
          <button className="px-6 py-1 pt-2 border border-white rounded hover:-translate-y-1 transition-transform">
            DOWNLOAD BROCHURE
          </button>
        </div>
      </div>

      <div className="pro-det flex flex-col lg:flex-row min-h-screen m-14 gap-6 mx-16 ">
  
            
        {/* Left Side  */}
        <div className="pro-lef w-full lg:w-[60%] min-h-screen space-y-8">
          {/* Carousel */}
          <div>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="caro h-[370px] rounded-lg"
            >
              {project.images && project.images.length > 0 ? (
          project.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Property ${index + 1}`}
                className="w-full h-full object-fit"
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/800x600?text=Image+Unavailable")
                }
                  />
                </SwiperSlide>
              ))) :(
                <p>No images available for this project.</p>
              )}
            </Swiper>
          </div>

              {/* Only for mobile screen  */}
          <div
        className="pro-mobile flex-none lg:w-1/3 p-4  py-6 bg-white border border-gray-300 rounded-lg shadow-md"
        style={{  height: "fit-content" }}
      >
        <div className="max-w-2xl mx-auto lg:max-w-none">
          {/* Header with Share Button */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-3xl  font-bold text-[#004D43] pb-4">{project.title}</h1>
                <span className="px-4 bg-purple-100 text-[#004D43] rounded-md text-sm font-medium pt-1 mb-5">
                {project.segment}
                </span>
              </div>
              <div className="flex items-start gap-2 text-gray-600">
                <FaMapMarkerAlt className="w-5 h-5 mt-1 flex-shrink-0 text-[#004D43]" />
                <p className="text-sm">
                {project.address}
                </p>
              </div>
            </div>
          </div>

          {/* Property Details Grid */}
          <div className=" grid grid-cols-2 gap-6 my-8">
            {/* BHK */}
            <div className="flex items-start gap-3">
              <FaHome className="w-6 h-6 mt-1 text-[#004D43]" />
              <div>
                <p className="text-sm text-gray-500">BHK</p>
                <p className="font-semibold">{project.bhk}</p>
              </div>
            </div>

            {/* Super Built-Up */}
            <div className="flex items-start gap-3">
              <FaExpand className="w-6 h-6 text-[#004D43] mt-1" />
              <div>
                <p className="text-sm text-gray-500">Super Built-Up</p>
                <p className="font-semibold">{project.build}</p>
              </div>
            </div>

            {/* Possession */}
            <div className="flex items-start gap-3">
              <FaCalendarAlt className="w-6 h-6 text-[#004D43] mt-1" />
              <div>
                <p className="text-sm text-gray-500">Possession</p>
                <p className="font-semibold">{project.possession}</p>
              </div>
            </div>

            {/* No. of Units */}
            <div className="flex items-start gap-3">
              <FaBuilding className="w-6 h-6 text-[#004D43] mt-1" />
              <div>
                <p className="text-sm text-gray-500">No. of Units</p>
                <p className="font-semibold">{project.nou}</p>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="mb-5">
            <h2 className="text-3xl font-bold"><span className='text-[#004D43]'>Price on Request</span></h2>
          </div>

          {/* Footer Information */}
          <div className="border-t border-gray-300 pt-6 space-y-4">
            <div className="flex items-start gap-2">
              <AiOutlineSafety className="w-5 h-5 text-[#004D43] " />
              <p className="text-sm text-gray-600 pt-[2px]">
              Rera No.: AG/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/AA01657/230826R1 
              </p>
            </div>
            <div className="flex items-start gap-2">
              <FaBuilding className="w-5 h-5 text-[#004D43] " />
              <p className="text-sm text-gray-600 pt-[2px]">
                Developed By:  {project.developer}
              </p>
            </div>
          </div>
        </div>
      </div>

          {/* Project Overview */}
          <div className="pro-de-grid bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-bold mb-6 border-b border-gray-300 pb-2">
              Project Overview of {project.locality}, Ahmedabad
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-10">
              <div whileHover={{ scale: 1.02 }} className="flex items-center gap-3">
                <BiBuildingHouse className="text-[#004D43] text-2xl" />
                <div>
                  <p className="text-gray-600">Property Type</p>
                  <p className="font-semibold">{project.ptype}</p>
                </div>
              </div>

              <div  className="flex items-center gap-3">
                <BiArea className="text-[#004D43] text-2xl" />
                <div>
                  <p className="text-gray-600">Project Area</p>
                  <p className="font-semibold">{project.parea}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <IoHomeOutline className="text-[#004D43] text-2xl" />
                <div>
                  <p className="text-gray-600">Ownership</p>
                  <p className="font-semibold">{project.ownership}</p>
                </div>
              </div>

              <div  className="flex items-center gap-3">
                <MdApartment className="text-[#004D43] text-2xl" />
                <div>
                  <p className="text-gray-600">No. of Towers</p>
                  <p className="font-semibold">{project.not}</p>
                </div>
              </div>

              <div  className="flex items-center gap-3">
                < PiBuildingApartmentLight className="text-[#004D43] text-2xl" />
                <div>
                  <p className="text-gray-600">No. of Floor</p>
                  <p className="font-semibold">{project.nof}</p>
                </div>
              </div>

              <div  className="flex items-center gap-3">
                < RiParkingBoxLine className="text-[#004D43] text-2xl" />
                <div>
                  <p className="text-gray-600">Parking</p>
                  <p className="font-semibold text-[13.9px]">{project.parking}</p>
                </div>
              </div>
            </div>

            <div className='border-t border-gray-300 pt-6 opacity-80'>
                <p className='mb-3'>{project.overviewpara1}</p>

                <p>{project.overviewpara2}</p>
              </div>
          </div>
          
          {/* Key Features & Amenities */}
          <div className='pro-de-grid rounded-lg shadow-sm '>
          <div className="max-w-4xl mx-auto space-y-8">
              {/* Key Features Section */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-300 pb-2">
                  Key Features of {project.title} {project.locality}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="text-[#004D43] text-xl">{feature.icon}</span>
                      <span className="text-gray-700 pt-1">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities Section */}
              <div className="pro-de-grid bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-300 pb-2">
                  Amenities {project.title} {project.locality}
                </h2>
                <div className="space-y-8">
                  {Object.entries(amenities).map(([category, items]) => (
                    <div key={category}>
                      <h3 className="text-xl font-semibold text-black opacity-80 mb-4">{category}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {items.map((item, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <span className="text-[#004D43] text-xl">{item.icon}</span>
                            <span className="text-gray-700 pt-[3px]">{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>              
            </div>
          </div>
          
          {/* Floor plan */}
          <div className="pro-de-grid bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-300 pb-2">
                    Floor Plan of {project.title} {project.locality}
                </h2>
                <span className="px-4 mr-4 bg-purple-100 text-[#004D43] rounded-md text-sm font-medium pt-2 mb-3">
                {project.bhk} 
                </span>
                <span className="px-4 mr-4 bg-purple-100 text-[#004D43] rounded-md text-sm font-medium pt-2 mb-3">
                {project.build}
                </span>
                <span className="px-4 bg-purple-100 text-[#004D43] rounded-md text-sm font-medium pt-2 mb-3">
               {project.floordata}
                </span>
                <img src={project.floorimg1} alt="Floorplan" className='w-[60%]' />

                <div className='mt-7'>
                </div>
                <img src={project.floorimg2}  className='w-[60%]' />
          </div>

          {/* Video */}
          <div className="pro-de-grid bg-white rounded-md shadow-sm">
            <iframe
              width="100%"
              height="400"
              className="rounded-md"
              src={project.video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

        </div>
        
      

      {/* Right Side - Information only for large/medium screen*/}
      
      <div
        className="pro-large flex-none lg:w-1/3 p-4  py-6 lg:py-12 bg-white border border-gray-300 rounded-lg shadow-md"
        style={{ position: "sticky", top: "40px", height: "fit-content" }}
      >
        <div className="max-w-2xl mx-auto lg:max-w-none">
          {/* Header with Share Button */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="flex items-center justify-between mb-2 lg:mb-7  ">
                <h1 className="text-3xl font-bold text-[#004D43] lg:ml-2">{project.title}</h1>
                <span className="px-4 bg-purple-100 text-[#004D43] rounded-md text-sm font-medium pt-1 mb-3">
                {project.segment}
                </span>
              </div>
              <div className="flex items-start gap-2 text-gray-600">
                <FaMapMarkerAlt className="w-5 h-5 mt-1 flex-shrink-0 text-[#004D43]" />
                <p className="text-sm">
                {project.address}
                </p>
              </div>
            </div>
          </div>

          {/* Property Details Grid */}
          <div className="grid grid-cols-2 gap-6 my-8">
            {/* BHK */}
            <div className="flex items-start gap-3">
              <FaHome className="w-6 h-6 mt-1 text-[#004D43]" />
              <div>
                <p className="text-sm text-gray-500">BHK</p>
                <p className="font-semibold">{project.bhk}</p>
              </div>
            </div>

            {/* Super Built-Up */}
            <div className="flex items-start gap-3">
              <FaExpand className="w-6 h-6 text-[#004D43] mt-1" />
              <div>
                <p className="text-sm text-gray-500">Super Built-Up</p>
                <p className="font-semibold">{project.build}</p>
              </div>
            </div>

            {/* Possession */}
            <div className="flex items-start gap-3">
              <FaCalendarAlt className="w-6 h-6 text-[#004D43] mt-1" />
              <div>
                <p className="text-sm text-gray-500">Possession</p>
                <p className="font-semibold">{project.possession}</p>
              </div>
            </div>

            {/* No. of Units */}
            <div className="flex items-start gap-3">
              <FaBuilding className="w-6 h-6 text-[#004D43] mt-1" />
              <div>
                <p className="text-sm text-gray-500">No. of Units</p>
                <p className="font-semibold">{project.nou}</p>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="mb-5">
            <h2 className="text-3xl font-bold"><span className='text-[#004D43]'>{project.price}</span></h2>
          </div>

          {/* Footer Information */}
          <div className="border-t border-gray-300 pt-6 space-y-4">
            <div className="flex items-start gap-2">
              <AiOutlineSafety className="w-5 h-5 text-[#004D43] " />
              <p className="text-sm text-gray-600 pt-[2px]">
                Rera No.: AG/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/AA01657/230826R1
              </p>
            </div>
            <div className="flex items-start gap-2">
              <FaBuilding className="w-5 h-5 text-[#004D43] " />
              <p className="text-sm text-gray-600 pt-[2px]">
                Developed By:  {project.developer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );  v 
}

export default PropertyCP;


