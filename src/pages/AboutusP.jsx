import React,{useEffect} from 'react';
import Team from '../components/Team';
import about from '../assets/about.mp4';
import nar from '../assets/nar.png'
import ara from '../assets/ara.png'
import icara from '../assets/icara.png'
import pnnb from '../assets/pbn.svg'
import Hiren from '../assets/Hiren.jpg'
import { GoGoal } from "react-icons/go";
import { FaRegEye } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import { FiAward, FiUsers, FiHome } from 'react-icons/fi';
import Brand from '../components/Brand';
import Contact from '../components/Contact'
import '../styles/AboutusP.css'
import ResBrand from '../components/ResBrand';

function AboutusP() {
 
  return (
    <div className='pt-24 w-full font-["Founders_Grotesk"]'>
      <div className="amain px-9">
        <h1 className="about-title text-[10vw] lg:text-[8vw] font-extrabold opacity-10 pointer-events-none ">
          About Us
        </h1>
      </div>

      <div className='flex justify-center'>
        <video
          className="about-video rounded-lg"
          width="1000" // Minimized width for responsive design
          height="auto" // Let the height adjust automatically
          autoPlay
          loop
          muted // Muted added for better UX in autoplay
        >
          <source src={about} type="video/mp4" />
        </video>
      </div>

      <div className='about-overview-main px-10 mt-20'>
          <h2 className='about-overview about-overview-one text-[30px] leading-[1.1] mb-5'>→ With a rich legacy of transforming Ahmedabad's real estate sector for over a decade, we have established ourselves as a leading name in the industry today. This remarkable journey has been driven by visionary leadership and a dedicated, unwavering team that has played a crucial role in shaping our success and growth.</h2>

          <h2 className='about-overview about-overview-two text-[36px] lg:text-[30px] font-light leading-[1.1] mb-5'>→  The year 2025 marks a new milestone for us as we take a step forward, expanding beyond the Ahmedabad metropolitan region to Gandhinagar, the green capital of Gujarat.</h2>

          <h2  className='about-overview about-overview-two text-[36px] lg:text-[30px] font-light leading-[1.1] pb-14'>
          → We are constantly striving to deliver a premium lifestyle beyond our customers' expectations with an aim to be affordable to our customers.
          </h2>
      </div>

    {/* Director */}
    <div className="min-h-screen ">
      <div className="director-main max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-1 ">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden lg:py-4">
        <         h1 className="director-title text-[3vw] font-bold text-gray-800 text-center mt-3">
                    OUR <span className="text-[#004D43]">MANAGMENT</span>
                  </h1>
          <div className="flex flex-col md:flex-row justify-center items-center lg:px-8">
            {/* Image Section */}
            <div className="md:w-1/3 p-4 lg:p-6 ">
              <img
                src={Hiren}
                alt="Founder"
                className="w-full h-auto rounded-lg shadow-md"
              />
              
            </div>

            {/* Content Section */}
            <div className="content-main md:w-2/3 p-8 ">
              <div className="space-y-6">
                <div className="border-b pb-6">
                  
                  <h1 className='dir-sub text-2xl font-bold  -mb-4'>
                    An  <span className="text-[#004D43]">inspiring Visionary</span></h1>
                </div>

                <div className="space-y-6 text-gray-600">
                  <p className="director-para leading-relaxed lg:text-[1.19vw]">
                    In 2009, Hiren Thummar returned to India from Canada and, like many others, had trouble finding professional services for home searches. Sensing a business opportunity in this fragmented and unorganized real estate sector, he started a real estate consultancy business to offer personalized and tailored solutions to buyers and sellers alike.
                  </p>

                  <div className="flex items-start space-x-3">
                    <FiHome className="w-6 h-6 text-[#004D43] flex-shrink-0 mt-1" />
                    <p className="director-para leading-relaxed lg:text-[1.19vw]">
                      Having worked with several multinational and Fortune 500 organizations for 10+ years, Hiren has outlined an organized plan for providing 100% customer-centric solutions, transparent and professional services, along with efficient training for aspiring brokers.
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <FiUsers className="w-6 h-6 text-[#004D43] flex-shrink-0 mt-1 " />
                    <p className="director-para leading-relaxed lg:text-[1.19vw]">
                      Hiren has been a visionary in transforming real estate brokerage services since 2009, mentoring over 300 real estate professionals. He has also facilitated numerous high-value transactions with multiple builder tie-ups and exclusive selling rights for various projects.
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <FiAward className="w-6 h-6 text-[#004D43] flex-shrink-0 mt-1" />
                    <p className="director-para leading-relaxed lg:text-[1.19vw]">
                      As a testimony to his outstanding performance in the industry, Hiren has been awarded Best Broker Owner several times and also recognized as the Realtor of the Year and the Most Enterprising CEO in the real estate industry.
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <div className="flex flex-wrap gap-4">
                    <span className="director-para px-4 py-2 pt-3 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                      Certified Professional Realtor
                    </span>
                    <span className="director-para px-4 py-2 pt-3 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                      10+ Years Experience
                    </span>
                    <span className="director-para px-4 py-2 pt-3 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                      300+ Professionals Mentored
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


      {/* Affilation */}
      <div className="bg-[#F4F8FA] py-16 px-10">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl lg:text-[3vw] font-bold text-[#333333] ">AFFILIATIONS</h1>
      </div>
      
      {/* Description */}
      <p className="Affilation-overview text-center text-lg lg:text-xl text-[#333333] max-w-4xl mx-auto mb-12 lg:mb-13 leading-[1.8]">
        Mr. Hiren Thummar is a proud member of National Association of Realtors-India (NAR INDIA), Patel Business Network (PBN), 
         Ahmedabad Realtors Association (ARA), and International Consortium of Real
        Estate Associations (ICREA).
      </p>

      {/* Logos */}
      <div className="Affilation-conn flex justify-center items-center gap-10">
        {/* Logo 1 */}
        <div className="Affilation-logo text-center">
          <img src={nar} alt="NAR Logo" className="b-img w-36 mx-auto mb-3 lg:w-44" />
        </div>
        {/* Divider */}
        <div className=" Divider h-20 border-l border-gray-300"></div>

        {/* Logo 2 */}
        <div className="Affilation-logo text-center">
          <img src={pnnb} alt="ARA Logo" className="b-img pbn w-40 mx-auto pl-5 lg:w-48" />
        </div>
        {/* Divider */}
        <div className=" Divider h-20 border-l border-gray-300"></div>

        {/* Logo 3 */}
        <div className="text-center">
          <img src={ara} alt="BNI Logo" className="b-img Ars w-36 mx-auto mb-3 lg:w-44" />  
        </div>  
        {/* Divider */}
        <div className=" Divider h-20 border-l border-gray-300"></div>

        {/* Logo 4 */}
        <div className="text-center">
          <img src={icara} alt="ICREA Logo" className="b-img w-36 mx-auto mb-3 lg:w-44" />
          {/* <p className="text-sm font-semibold text-[#333333]">
            International Consortium of Real Estate Associations
          </p> */}
        </div>
      </div>
    </div>

      {/* Mission,Vision */}
    <section className="pb-16 pt-8  bg-[#F4F8FA]  ">
      <div className="mvc-main container mx-auto px-6 md:px-12 lg:px-20">
        {/* Headline */}
        <div className="mvc-title text-center mb-12">
          <h2 className=" text-4xl md:text-4xl font-bold leading-snug text-gray-800 lg:text-[3vw]">
            Our Vision, Mission, and Core Values
          </h2>
          <p className="mvc-sub mt-4  text-lg text-gray-600 lg:text-xl">
            What drives us, what we stand for, and how we make a difference.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-left pt-1 ">

          {/* Mission */}
          <div className="flex flex-col items-star">
            <div className="mb-6">
              <div className="w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center border border-gray-800 rounded-full">
                <span className="text-3xl font-bold lg:text-4xl"><GoGoal /></span>
              </div>
            </div>
            <h3 className="mini text-lg font-bold mb-1 underline lg:text-xl">Mission</h3>
            <p className="mvc-para text-gray-700 ">
                Creating long-term values for customers, investors, and associates by building the company with a one strong system and processes.
            </p>
          </div>

          {/* Vision */}
          <div className="flex flex-col items-start">
            <div className="mb-6">
              <div className="w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center border border-gray-800 rounded-full">
                <span className="text-3xl font-bold lg:text-4xl"><FaRegEye/></span>
              </div>
            </div>
            <h3 className="mini text-lg font-bold mb-1 underline lg:text-xl">Vision</h3>
            <p className="mvc-para text-gray-700">
                 Finding the best real estate solutions in residential, commercial, plotting, and industrial sectors is our priority.
            </p>
          </div>

          {/* Values */}
          <div className="flex flex-col items-start">
            <div className="mb-6">
              <div className="w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center border border-gray-800 rounded-full">
                <span className="text-3xl font-bold lg:text-4xl"><IoDiamond /></span>
              </div>
            </div>
            <h3 className="mini text-lg font-bold mb-1 underline lg:text-xl">Values</h3>
            <p className="mvc-para text-gray-700 ">
                To establish ourselves as the best and most reliable real estate consultant in Gujarat.
              <br />
           
            </p>
          </div>
        </div>
      </div>
    </section>


    <div>
          <Team />
      </div>
      
      
      {/* Brand  */}
        <div >
            <Brand/>
        </div>
            {/* Brand only for Mobile */}
        <div className='brd-mobile'>
          <h1 className='text-3xl text-center mt-14 -mb-[1vw]  font-bold'>Builders We Represent</h1>
          <p className='p-5 text-center text-xl -mb-[20vw]'>Our customers have gotten offers from awesome companies. </p>
          <ResBrand />
        </div>
      
      {/* Contact */}
      <div className='-mt-[11vh] lg:-mt-[18vh]'>
        <Contact/>
      </div>
    </div>
  );
}

export default AboutusP;

