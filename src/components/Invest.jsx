import React from "react";
import PInvest from "../assets/PInvest.png";
import PBuyy from "../assets/PBuyy.jpg";
import Contact from "./Contact";
import '../styles/Bsri.css';

function Invest() {
  return (
    <div className="pt-24 lg:pt-28 md:pt-28 w-full font-['Founders_Grotesk']">
      {/* Title */}
      <div className="px-9">
        <h1 className="bsri-title text-[8vw] l lg:text-[7vw] font-extrabold opacity-10 pointer-events-none text-center">
          Invest In Property
        </h1>
      </div>

      {/* Divider */}
      <div className="bsri-border border-b-[1px] border-gray-500 -mt-[vh] mb-16 opacity-25"></div>

      {/* Image */}
      <div className="bsri-img-div flex justify-center mb-[10vh]">
        <img src={PInvest} alt="" width={900} className="bsri-img rounded-2xl" />
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
                Empower your wealth journey with 
            <span className="text-[#004D43]"> MIDTOWN</span> - where every property holds the promise of prosperity.
          </p>
          <p className="text-gray-600 text-lg font-medium">
            — Your trusted real estate consulting partner
          </p>
        </div>

        {/* Section */}
        <div className="mt-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            INVEST
          </h2>
          <p className="text-gray-700 text-lg mb-6">
          Midtown offers consulting and advisory services to assist clients with competent real estate investments that encompass single property to large portfolios. We help clients identify the right investments that assure them of highest returns; perform feasibility assessments and support each one through multiple phases of transactions.
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
          <p className="text-gray-700 text-lg mt-6">
            We scour for investment opportunities that meet client conditions and then help secure a property with a systematic approach and perspective that is refined over the years, having aided multiple crores of rupees in investments and disposition experience.
          </p>
          <p className="text-gray-700 text-lg mt-6">
              We believe that effective negotiation is the key to successful deals. Our advisory services includes a thorough analysis of subject assets and highlight of benefits of the investment options from the builders and individual sellers. Our investment advisory makes sure that the properties are worth investing with respect to their physical and natural condition, operating costs, building layout design, leasing flexibility, tenant history and most importantly location of the property. We have excellent working relationship with developers on account of which we can help you get the best property option at the most lucrative price. Few builders we represent are HN Safal, Sun Builders, Shivalik Projects, Lodha Group, Ganesh Housing, Binori Buildcon, Pacifica Companies, World Trade Center-GIFT City, adani Shantigram, Godrej Properties, Bakeri Group, b Safal, ADI-HERITAGE GROUP, Goyal & Co., Deep Group of Companies, Gala, Ajmera Realty & Infra India Ltd., Sheetal Infrastructure Pvt. Ltd., Siddhi Developers, Amrapali Infra-con, Arvind Infrastructure, K P Sanghvi, Savvy Group, Vishwanath Builders, Applewoods Township, TATA Housing, AMAYA Properties LLP, Nishant Construction, Suryam Group, TRUE VALUE Nirman Pvt. Ltd. and many more.
          </p>
          <p className="text-gray-700 text-lg mt-6">
            Our advisory panel of property consultants and domain experts are well suited to handle all types of queries and are keen to assist all those who are willing to ask questions. Drop in your query to us and we will do our very best to choose the right real estate investment option for you.
          </p>
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
                <option value="Invest">Invest</option>
                <option value="Buy">Buy</option>
                <option value="Rent">Rent</option>
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

export default Invest;
