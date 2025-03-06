// import React, { useState, useEffect } from "react";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import Logo from "../assets/logo.png";
// import { NavLink, Link } from 'react-router-dom';

// function Navbar() {
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > lastScrollY && currentScrollY > 50) {
//         setIsVisible(false); //Hide navbar on scroll down
//       } else {  
//         setIsVisible(true); //Show navbar on scroll up
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <div className="font-['Founders_Grotesk']">
//       {/* Navbar */}
//       <div
//         className={`fixed z-[999] w-full px-4 md:px-6  py-4 flex justify-between items-center font-["NeueMontreal"] transition-all duration-300 ${
//           isVisible
//             ? "translate-y-0 bg-white/30 backdrop-blur-lg shadow-lg"
//             : "-translate-y-full"
//         }`}
//       >
//         {/* Logo */}
//         <div className="logo">
//           <Link to="/"><img className="w-auto h-10 lg:h-14" src={Logo} alt="Midtown" /></Link>
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden lg:flex gap-10">
//           {["Home", "About Us", "Projects", "Services","Testimonials","Calculators", "Contact Us"].map(
//             (item, index) => (
//               <Link
//              key={index}
//              to={item}
//              className={`text-md capitalize font-light hover:underline hover:text-gray-600  ${
//                index === 6 && "ml-32"
//              }`}
//            >
//              {item}
//            </Link>
//             )
//           )}
//         </div>

//         {/* Hamburger Menu (Mobile Only) */}
//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className="lg:hidden text-2xl focus:outline-none text-black"
//         >
//           {isMobileMenuOpen ? <AiOutlineClose className="text-white"/> : <AiOutlineMenu />}
//         </button>
//       </div>

//       {/* Fullscreen Mobile Menu */}
//       <div
//         className={`fixed inset-0 bg-[#2A3037] text-white z-[998] flex flex-col items-center justify-center transition-transform duration-1000  opacity-80 ${
//           isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
//         }`}
//       >
//        <div className="flex flex-col items-center gap-6">
//           {["Home", "About Us", "Projects", "Services","Testimonials","Calculators", "Contact Us"].map(
//             (item, index) => (
//               <Link
//                 key={index}
//                 to={item}
//                 href={`#${item.toLowerCase().replace(" ", "-")}`}
//                 className="text-3xl font-bold uppercase transition duration-300 hover:opacity-80 hover:underline "
//                 onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
//               >
//                 {item}
//               </Link>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;


import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../assets/logo.png";
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Hide navbar on scroll down
      } else {
        setIsVisible(true); // Show navbar on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="font-['Founders_Grotesk']">
      {/* Navbar */}
      <div
        className={`fixed z-[999] w-full px-4 md:px-6 py-4 flex justify-between items-center font-["NeueMontreal"] transition-all duration-300 ${
          isVisible
            ? "translate-y-0 bg-white/30 backdrop-blur-lg shadow-lg"
            : "-translate-y-full"
        }`}
      >
        {/* Logo */}
        <div>
          <Link to="/">
            <img className="w-auto h-10 lg:h-14" src={Logo} alt="Midtown" />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-10">
          {["Home", "About Us", "Projects", "Services", "Testimonials", "Calculators", "Contact Us"].map(
            (item, index) => (
              <NavLink
                key={index}
                to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                className={({ isActive }) =>
                  `text-md capitalize font-light hover:underline hover:text-gray-600 ${
                    isActive ? "text-[#004D43]" : "" // Change color when active
                  } ${index === 6 && "ml-32"}`
                }
              >
                {item}
              </NavLink>
            )
          )}
        </div>

        {/* Hamburger Menu (Mobile Only) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-2xl focus:outline-none text-black"
        >
          {isMobileMenuOpen ? <AiOutlineClose className="text-white" /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#2A3037] text-white z-[998] flex flex-col items-center justify-center transition-transform duration-1000 opacity-80 ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {["Home", "About Us", "Projects", "Services", "Testimonials", "Calculators", "Contact Us"].map(
            (item, index) => (
              <NavLink
                key={index}
                to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                className={({ isActive }) =>
                  `text-3xl font-bold uppercase transition duration-300 hover:opacity-80 hover:underline ${
                    isActive ? "text-[#004D43]" : "" // Change color when active
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
              >
                {item}
              </NavLink>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
