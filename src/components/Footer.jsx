import React from "react";
import Logo from "../assets/logo.png";
import log from '../assets/log.png'
import '../styles/Footer.css';
import { NavLink,Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-main w-full flex gap-5 h-screen p-10 font-['Founders_Grotesk'] border-t-[1px] border-gray-500 border-opacity-50">
      {/* Left Section */}
      <div className="w-1/2 h-full flex flex-col justify-between">
        <div className="heading -mt-[1.5vw]">
          <h1 className="titlef one text-[6vw] font-bold uppercase tracking-tight -mb-10 opacity-75">
            EYE-
          </h1>
          <h1 className="titlef two text-[6vw] font-semibold uppercase  tracking-tight  leading-tight opacity-75">
            OPENING
          </h1>

        </div>

        <img className="footer-img w-28 h-12 lg:h-14 -mb-[2.3vw]" src={Logo} alt="" />
      </div>

      {/* Right Section */}
      <div className="rit-sec w-1/2 flex flex-col justify-between">
        <div>
          <h1 className="titlef three text-[6vw] font-bold uppercase tracking-tight leading-none opacity-75">
            PRESENTATIONS
          </h1>
        </div>

        {/* Subsections in a Single Column */}
        <div className="flex flex-col justify-between lg:flex-row gap-10 mt-4">
          {/* First Column */}
          <div className="flex flex-col space-y-5 text-sm">
            {/* Social Links */}
            <div>
              <h2 className="font-bold mb-2">S:</h2>
              <ul className="space-y-1">
                <li>
                  <Link to="#" className="hover:underline underline hover:text-gray-600">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline underline hover:text-gray-600">
                    Behance
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline underline hover:text-gray-600">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline underline hover:text-gray-600">
                    Linkedin
                  </Link>
                </li>
              </ul>
            </div>

            {/* Address */}
            <div>
              <h3 className="font-bold mb-2">L:</h3>
              <ul className="space-y-2 underline hover:text-gray-600 cursor-pointer">
                <li>401, Zion Prime Thaltej</li>
                <li>Ahmedabad, India</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold mb-2">C:</h3>
              <Link to="tel:+919879813402" className="hover:underline underline hover:text-gray-600">
                +91 98798 13402
              </Link>
            </div>

            {/* Email */}
            <div>
              <h3 className="font-bold mb-2">E:</h3>
              <Link to="" className="hover:underline underline hover:text-gray-600">
                midtownproperty@gmail.com
              </Link>
            </div>
          </div>

          {/* Second Column in Row */}
          <div className="redirect-link flex flex-col gap-10 text-sm">
            <div>
              <h3 className="redirect-link font-bold mb-2 mt-[12vw]">M:</h3>
              <div className="space-y-1 underline flex flex-col">
                <NavLink
                  to="/About-Us"
                  className={({ isActive }) => (isActive ? "text-[#004D43]" : "")}
                >
                  About us
                </NavLink>
                <NavLink
                  to="/Projects"
                  className={({ isActive }) => (isActive ? "text-[#004D43]" : "")}
                >
                  Projects
                </NavLink>
                <NavLink
                  to="/Services"
                  className={({ isActive }) => (isActive ? "text-[#004D43]" : "")}
                >
                  Services
                </NavLink>
                <NavLink
                  to="/Calculators"
                  className={({ isActive }) => (isActive ? "text-[#004D43]" : "")}
                >
                  Calculators
                </NavLink>
                <NavLink
                  to="/Testimonials"
                  className={({ isActive }) => (isActive ? "text-[#004D43]" : "")}
                >
                  Testimonials
                </NavLink>
                <NavLink
                  to="/Contact-Us"
                  className={({ isActive }) => (isActive ? "text-[#004D43]" : "")}
                >
                  Contact us
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        
        <p className="footer-para-plicy text-sm text-gray-500 mt-10  pb-5 lg:pb-0 lg:-mb-[2vw] ">
          © midtown property 2024.{"  "}
          <Link to="#" className="hover:underline mb-6 underline hover:text-gray-600">
            Legal Terms
          </Link>
        </p>
      </div>

      {/* only for mobile screen  */}
      <div className="footer-mobile border-t-[1px] border-gray-500  flex justify-between">
      <img className="imgggg  w-30 h-12 mt-5" src={Logo} alt="" />
        <p className="ff-para text-sm text-gray-500 mt-5  pb-5 lg:pb-0 lg:-mb-[2vw] ">
          © midtown property 2024.{"  "}
          <Link to="#" className="hover:underline mb-6 underline hover:text-gray-600"><br />
            Legal Terms
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
