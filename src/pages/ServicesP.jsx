import React from "react";
import { Link } from "react-router-dom";
import Contact from "../components/Contact";
import '../styles/ServicesP.css'

const services = [
  {
    name: "/buy",
    id: 1,
    title: "BUY PROPERTY",
    description: "To demonstrate your services, products, webinars, speeches.",
    image: "https://media.istockphoto.com/id/1545325618/photo/property-interest-best-rate-hand-selected-house-finance-loan-increase-investment-planning.jpg?s=612x612&w=0&k=20&c=tNAJIs95tuol4QVai0rB_0X2MyXp_KldW12-e1cFqtQ=",
  },
  {
    name:"/sell",
    id: 2,
    title: "SELL PROPERTY",
    description: "Development of logos, brand books, business cards, postcards, social media design.",
    image: "https://media.istockphoto.com/id/173593551/photo/key-exchange.jpg?s=612x612&w=0&k=20&c=E9mdapcq8_g3cfmGijC7ir-fOHDImyH5xGgr1MTsAps=",
  },
  {
    name:"/rent",
    id: 3,
    title: "RENT PROPERTY",
    description: "Additional powerful tools for attracting applications.",
    image: "https://media.istockphoto.com/id/149060607/photo/for-rent-sign-in-front-of-new-house.jpg?s=612x612&w=0&k=20&c=By627yICPZugFR1j2_a_7MCEn1f5ltYlivg6Tv50JaQ=",
  },
  {
    name:"/invest",
    id: 4,
    title: "Invest in Property",
    description: "Additional powerful tools for attracting applications.",
    image: "https://media.istockphoto.com/id/1803286709/photo/real-estate-investment-buy-own-and-sell-properties-for-profit-cash-flow-appreciation-tax.jpg?s=612x612&w=0&k=20&c=dQ6ehnmRoF81y8KH9Gg0d0bC8nn5ZHQ1I8FALMpqWjA=",
  },
];

const ServicesP = () => {
  return (
    <div>
    <div className="serr-main bg-[#CDEA68] text-black py-20 pt-40 px-6 md:px-10 font-['Founders_Grotesk']">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between mb-12">
        <h2 className="text-4xl font-bold leading-none">
          <span className="block text-gray-700 text-lg uppercase mb-2">
            Additional
          </span>
          Natwithlingand
        </h2>
        <p className="serr-para-top text-sm text-gray-700 max-w-lg text-center md:text-right mt-4 md:mt-0 lg:text-[1.2vw]">
          In addition to creating websites, we also perform a full range of
          visual packaging services for goods and services.
        </p>
      </div>

      {/* Services List */}
      <div className="space-y-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="group flex flex-col md:flex-row items-start border-t border-gray-700 pt-6"
          >
            {/* Image */}
            <div
              className="serr-img w-full md:w-1/4 h-48 lg:h-56 bg-cover bg-center rounded-lg flex-shrink-0 transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage: `url(${service.image})`,
              }}
            ></div>

            {/* Content */}
            <Link to={service.name} className="md:w-2/3 md:pl-10 mt-4 md:mt-0 text-center md:text-left">
              <div className="serr-img-title flex items-center justify-center md:justify-start relative group pt-[10vh]">
                {/* Title */}
                <h3 className=" text-4xl font-semibold relative">
                  {service.title}
                  {/* Underline */}
                  <span className="absolute left-0 bottom-[-1px] w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-full"></span>
                </h3>
                {/* Arrow */}
                <span className="arrowww text-yellow-700 text-2xl ml-4 transition-transform duration-500 group-hover:translate-x-2">
                  →
                </span>
              </div>
              <p className="serr-img-subtitle text-gray-700 text-sm mt-2 lg:text-[1.2vw]">{service.description}</p>
            </Link>

            {/* Number */}
            <div className="serr-img-index text-3xl font-bold text-gray-600 mt-4 md:mt-0 md:ml-auto">
              {String(service.id).padStart(2, "0")}
            </div>
          </div>
        ))}
      </div>
    </div>

      <div>
        <Contact/>
      </div>

    </div>
  );
};

export default ServicesP;
