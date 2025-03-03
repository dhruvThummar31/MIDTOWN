import React from 'react'
import Navbar from '../components/Navbar';
import LandingPage from '../components/LandingPage';
import Marquee from '../components/Marquee';
import About from '../components/About';
import FeaturedProject from '../components/FeaturedProject';
import ServiceSection from '../components/ServiceSection';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import LocomotiveScroll from 'locomotive-scroll';

function HomeP() {
    const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      <LandingPage/>
      <Marquee/>
      <About/>
      <FeaturedProject/>
      <ServiceSection/>
      <Testimonial/>
      <Contact/>
    
      </div>
  )
}

export default HomeP