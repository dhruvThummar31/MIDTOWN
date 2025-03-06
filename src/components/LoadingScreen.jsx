import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.png";
import Back from '../assets/back.jpg';
import '../styles/LoadingScreen.css'

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 200);

    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setIsExiting(true);
          setTimeout(onLoadingComplete, 2500);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 30);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [onLoadingComplete]);

  return (
    <div className="load-main fixed inset-0 bg-[#1a1a1a] flex items-center justify-center p-4 font-['Founders_Grotesk']">
      <div
        className={`load-sub-main relative w-[80vw] bg-[#f1f1f1] rounded-2xl overflow-hidden shadow-2xl transform 
          ${isVisible ? 'translate-y-0 opacity-100 transition-all duration-1000' : 'translate-y-full opacity-0'}
          ${isExiting ? 'scale-400 blur-sm opacity-0 transition-all duration-1000' : ''}`}
        style={{
          backgroundImage: `url(${Back})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative px-8 py-6 z-10 load-main">
          <div className="logo md:mb-12 lg:mb-20">
          <Link to="/"><img className="load-logo w-auto h-12 lg:h-16" src={Logo} alt="Midtown" /></Link>
          </div>

          <div className="space-y-4  relative">
            <h1 className="load-text text-[64px] text-zinc-800 font-bold leading-none tracking-tight uppercase  mix-blend-difference">
              We Believe
              <br />
              Our Presence
              <br />
              Creates Impact
            </h1>
            <div className="load-progress flex justify-between items-baseline border-t border-black/20 pt-24">
              <p className="text-zinc-800 font-medium">Loading:</p>
              <span className="load-ptext text-[80px] font-bold leading-none text-zinc-800">{progress}%</span>
            </div>
          </div>
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/40" />
      </div>
    </div>
  );
};

export default LoadingScreen;
