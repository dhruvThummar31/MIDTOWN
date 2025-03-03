import React from 'react';
import '../styles/ServiceSection.css';
import buy from '../assets/buy.jpg'
import sell from '../assets/sell.jpg'
import rent from '../assets/rent.jpg'
import invest from '../assets/invest.jpg'
import '../styles/ServiceSection.css'


function ServiceSection() {
  return (
    <div className="w-full py-12 font-['Founders_Grotesk']">
        <div className="w-full px-10 border-b-[1px] border-gray-500 border-opacity-50 pb-1">
          <h1 className="stitle text-[4vw] font-['Founders_Grotesk'] tracking-tight">Our Services</h1>
        </div>
        <div className="subpart service-section px-10 py-5">
          <h2 className=" text-2xl md:text-3xl font-light mb-4">MIDTOWN’S REAL ESTATE ADVISORY SERVICES</h2>
        <p className="para text-gray-600 mb-10">
          We make sure that investments and potential acquisitions meet the
          following conditions:
          <br />
          → Adequate capital security
          <br />
          → Complementary to existing real estate investments
          <br />
          → Futuristic investment options at a lucrative price-point
        </p>
       </div>

        <div className="image-grid m-4 ml-16">
          <div className="image-item image-item-1">
            <img src={buy} alt="Buy" />
            <p>Buy</p>
          </div>
          <div className="image-item image-item-2">
            <img src={sell} alt="Sell" />
            <p>Sell</p>
          </div>
          <div className="image-item image-item-3">
            <img src={rent} alt="Rent" />
            <p>Rent</p>
          </div>
          <div className="image-item image-item-4">
            <img src={invest} alt="Invest" />
            <p>Invest</p>
          </div>
        </div>
      </div>
  );
}

export default ServiceSection;

