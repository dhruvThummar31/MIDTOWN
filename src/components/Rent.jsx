import React from "react";
import PRent from "../assets/PRent.jpg";
import PBuyy from "../assets/PBuyy.jpg";
import Contact from "./Contact";
import '../styles/Bsri.css';

function Rent() {
  return (
    <div className="pt-24 lg:pt-28 md:pt-28 w-full font-['Founders_Grotesk']">
      {/* Title */}
      <div className="px-9">
        <h1 className="bsri-title text-[8vw] lg:text-[7vw]  font-extrabold opacity-10 pointer-events-none text-center">
          Rent Property
        </h1>
      </div>

      {/* Divider */}
      <div className="bsri-border border-b-[1px] border-gray-500 -mt-[vh] mb-16 opacity-25"></div>

      {/* Image */}
      <div className="bsri-img-div flex justify-center mb-[10vh]">
        <img src={PRent} alt="" width={900} className="bsri-img rounded-2xl" />
      </div>

      {/* Content Section */}
      <div className="relative py-12 px-6 lg:px-24">
        {/* Blockquote Watermark */}
          <div
            className="absolute inset-0 flex justify-start items-start lg:justify-start lg:items-start pl-[3.9vw] -mt-[25vh]"
            aria-hidden="true"
          > 
            <span className="text-[150px] lg:text-[250px] font-semibold text-[#004D43] opacity-10 leading-none"  style={{ transform: 'rotate(180deg)' }} >
              &ldquo;
            </span>
          </div>

        {/* Header Section */}
        <div className="relative">
          <p className="text-3xl lg:text-5xl font-bold leading-tight text-gray-900 mb-4 animate-fade-in">
          Discover the perfect match for your lifestyle with 
            <span className="text-[#004D43]"> MIDTOWN</span> - where personalised assistance meets a world of rental opportunities, ensuring you find the ideal space to call home.
          </p>
          <p className="text-gray-600 text-lg font-medium">
            — Your trusted real estate consulting partner
          </p>
        </div>

        {/* Buy Section */}
        <div className="mt-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            RENT
          </h2>
          <p className="text-gray-700 text-lg mb-6">
             With rental deals ruling the roost within the city, most leasing services and even the rental clients for both residential and commercial projects are locked in never-ending tiffs over the clauses of their rent agreement. Without a firm and experienced mediator, the ideal "connect" is lost. Here's how we can help:
          </p>
          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="flex items-start space-x-2 animate-slide-in">
              <span className="text-[#004D43] font-bold">➜</span>
              <span>Comprehensive and relevant property deals for you</span>
            </li>
            <li className="flex items-start space-x-2 animate-slide-in">
              <span className="text-[#004D43] font-bold">➜</span>
              <span>
                Constant real estate database updates with a close eye on the
                burgeoning market
              </span>
            </li>
            <li className="flex items-start space-x-2 animate-slide-in">
              <span className="text-[#004D43] font-bold">➜</span>
              <span>
                Massive repository of residential and commercial properties with
                "connected" real estate consultants
              </span>
            </li>
            <li className="flex items-start space-x-2 animate-slide-in">
              <span className="text-[#004D43] font-bold">➜</span>
              <span>
                Comprehensive evaluation and analysis of each property scheme
                and project with detailed assessment about present trends and
                future potential of your investment decision
              </span>
            </li>
            <li className="flex items-start space-x-2 animate-slide-in">
              <span className="text-[#004D43] font-bold transition-transform duration-500 group-hover:translate-x-2">
                ➜
              </span>
              <span>
                Guided by industry experts based on understanding of market
                dynamics with utmost accuracy and precision
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center py-16 px-6 lg:px-16 bg-gray-100">
        {/* Left Section: Image */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
          <img
            src={PBuyy}
            alt="Property"
            className="bsri-form-img rounded-lg shadow-md max-w-xs lg:max-w-[100vw] lg:max-h-[100vh]"
          />
        </div>

        {/* Right Section: Form */}
        <div className="bsri-right w-full lg:w-1/2 bg-white rounded-lg shadow-md p-8 lg:p-12">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 text-center">
            WE WOULD BE DELIGHTED TO SERVE YOU AT{" "}
            <span className="text-[#004D43] font-extrabold">
              MIDTOWN PROPERTY.
            </span>
          </h2>

          <form className="space-y-4">
            {/* Name and Dropdown */}
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#004D43]"
              />
              <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#004D43]">
                <option value="Rent">Rent</option>
                <option value="Buy">Buy</option>
                <option value="Sell">Sell</option>
              </select>
            </div>

            {/* Phone and Email */}
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                type="text"
                placeholder="Phone"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#004D43]"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#004D43]"
              />
            </div>

            {/* Message */}
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#004D43]"
            ></textarea>

            {/* Newsletter */}
            <div className="flex items-center gap-2">
              <input type="checkbox" id="newsletter" className="w-4 h-4" />
              <label htmlFor="newsletter" className="text-gray-700 pt-1">
                Sign up for our newsletters
              </label>
            </div>

            {/* Recaptcha */}
            <div className="mt-4">
              <div className="g-recaptcha" data-sitekey="your-site-key"></div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-2 pt-3 px-4 rounded-md text-lg font-semibold hover:bg-gray-800 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="bsri-con">
        <Contact />
      </div>
    </div>
  );
}

export default Rent;
