// import { useState } from 'react';
// import '../styles/TestimonialP.css'

// const testimonials = [
//   {
//     id: 1,
//     name: "M. Asghar",
//     role: "Real Estate Agent",
//     avatar: "https://randomuser.me/api/portraits/men/1.jpg",
//     text: "The versatility and quality of the service is impressive indeed. features make it stand out.",
//     hasVideo: true,
//     videoUrl: "https://youtu.be/kkNnb-urQ7c?si=5pGHa3h_ADnsP-pn"
//   },
//   {
//     id: 2,
//     name: "Rihan Saidi",
//     role: "Founder ZxFlow",
//     avatar: "https://randomuser.me/api/portraits/men/2.jpg",
//     text: "The tech and e-commerce sets are amazing! I must give you guys that. Good one peeps 😊",
//     hasVideo: true,
//     videoUrl: "https://example.com/video2.mp4"
//   },
//   {
//     id: 3,
//     name: "Muzammil Merchant",
//     role: "Cross Designer",
//     avatar: "https://randomuser.me/api/portraits/men/3.jpg",
//     text: "These are some really nice categories  The variety and quality are exceptional.",
//     hasVideo: true,
//     videoUrl: "https://example.com/video3.mp4"
//   },
//   {
//     id: 4,
//     name: "Nicola Landolfo",
//     role: "Product Dev at Fintech",
//     avatar: "https://randomuser.me/api/portraits/men/4.jpg",
//     text: "Iconstock is an excellent choice for designers and developers looking to add an iconic touch to their projects. The integration is seamless.",
//     hasVideo: false,
//     videoUrl: "https://example.com/video4.mp4"
//   },
//   {
//     id: 5,
//     name: "Jan",
//     role: "UI Designer",
//     avatar: "https://randomuser.me/api/portraits/women/1.jpg",
//     text: "Awesome, every icon is beautiful, and really appreciate having all these professional design skills. The consistency across the set is remarkable.",
//     hasVideo: true,
//     videoUrl: "https://example.com/video5.mp4"
//   },
//   {
//     id: 6,
//     name: "Umar Saleem",
//     role: "Digital Marketing",
//     avatar: "https://randomuser.me/api/portraits/men/5.jpg",
//     text: "I am impressed with the vast collection of icons on Iconstock! The search functionality and organization make it easy to find exactly what I need.",
//     hasVideo: true,
//     videoUrl: "https://example.com/video6.mp4"
//   },{
//         id: 7,
//         name: "M. Asghar",
//         role: "Real Estate Agent",
//         avatar: "https://randomuser.me/api/portraits/men/1.jpg",
//         text: "The versatility and quality of the service is impressive indeed.",
//         hasVideo: true,
//         videoUrl: "https://youtu.be/kkNnb-urQ7c?si=TFtumom0glkB1ptC.mp4"
//       },
//       {
//         id: 8,
//         name: "Rihan Saidi",
//         role: "Founder ZxFlow",
//         avatar: "https://randomuser.me/api/portraits/men/2.jpg",
//         text: "The tech and e-commerce sets are amazing! I must give you guys that. Good one peeps 😊",
//         hasVideo: true,
//         videoUrl: "https://example.com/video2.mp4"
//       },
//       {
//         id: 9,
//         name: "Muzammil Merchant",
//         role: "Cross Designer",
//         avatar: "https://randomuser.me/api/portraits/men/3.jpg",
//         text: "These are some really nice categories of icons that designers would find very helpful going forward.",
//         hasVideo: true,
//         videoUrl: "https://example.com/video3.mp4"
//       },{
//         id: 10,
//         name: "Muzammil Merchant",
//         role: "Cross Designer",
//         avatar: "https://randomuser.me/api/portraits/men/3.jpg",
//         text: "These are some really nice categories  The variety and quality are exceptional.",
//         hasVideo: true,
//         videoUrl: "https://example.com/video3.mp4"
//       },
//       {
//         id: 11,
//         name: "Nicola Landolfo",
//         role: "Product Dev at Fintech",
//         avatar: "https://randomuser.me/api/portraits/men/4.jpg",
//         text: "Iconstock is an excellent choice for designers and developers looking to add an iconic touch to their projects. The integration is seamless.",
//         hasVideo: false,
//         videoUrl: "https://example.com/video4.mp4"
//       },
//       {
//         id: 12,
//         name: "Jan",
//         role: "UI Designer",
//         avatar: "https://randomuser.me/api/portraits/women/1.jpg",
//         text: "Awesome, every icon is beautiful, and really appreciate having all these professional design skills. The consistency across the set is remarkable.",
//         hasVideo: true,
//         videoUrl: "https://example.com/video5.mp4"
//       }
// ];




// function TestimonialP() {     
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   const openVideo = (videoUrl) => {
//     setSelectedVideo(videoUrl);
//   };

//   const closeVideo = () => {
//     setSelectedVideo(null);
//   };

//   return (
//     <section className="py-24 px-4 bg-gradient-testimonials min-h-screen font-['Founders_Grotesk']">
//         <div className="w-full lg:px-5 border-b-[1px] border-gray-500 border-opacity-50 pb-1">
//             <h1 className="t-title text-[4vw] font-['Founders_Grotesk'] tracking-tight text-[#004D43]">Testimonials</h1>
//         </div>
//         <div className="subpart service-section px-5 py-2">
//             <h2 className=" text-2xl md:text-3xl  uppercase -mb-2">Words of appreciation from our <span className="text-[#004D43]">happy family</span></h2>
//             <p className="text-lg text-gray-700 mb-10"> 
//             <br />
//             → 
//             We are grateful to our customers.<br />
//             →
//             Who gave us excellent reviews, Take a look at our family's extensive reviews of our service.
//           <br />
//           </p>
//         </div>
//       <div className="max-w-[1400px] mx-auto">
//         <h1 className="text-4xl md:text-5xl text-center mb-4 mt-5  text-[#004D43] font-light ">
//           Creatives are talking
//         </h1>
        
//         {/* Avatar circles at the top */}
//         <div className="flex justify-center flex-wrap gap-4 mb-12">
//           {testimonials.map((testimonial) => (
//             <div key={`avatar-${testimonial.id}`} className="w-14 h-14 rounded-full overflow-hidden">
//               <img 
//                 src={testimonial.avatar} 
//                 alt={testimonial.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Testimonials grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6  lg:px-32">
//           {testimonials.map((testimonial) => (
//             <div 
//               key={testimonial.id}
//               className={`bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative flex flex-col
//                 ${testimonial.id  % 2 !== 0 ? 'lg:mb-7' : testimonial.id % 2 === 0 ? 'lg:mt-4' : ''}`}
//             >
//               <p className="text-gray-800 mb-4 flex-grow leading-relaxed">"{testimonial.text}"</p>
              
//               <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100">
//                 <img 
//                   src={testimonial.avatar}
//                   alt={testimonial.name}
//                   className="w-12 h-12 rounded-full"
//                 />
//                 <div>
//                   <h3 className="text-md font-semibold text-[#004D43] ">{testimonial.name}</h3>
//                   <p className="text-sm text-gray-600">{testimonial.role}</p>
//                 </div>
//               </div>

//               {testimonial.hasVideo && (
//                 <button 
//                   onClick={() => openVideo(testimonial.videoUrl)}
//                   className="absolute bottom-4 right-4 text-blue-500 hover:text-blue-600 transition-colors"
//                 >
//                   <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                     <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Video Modal */}
//       {selectedVideo && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
//           onClick={closeVideo}
//         >
//           <div 
//             className="relative w-full max-w-4xl mx-4 bg-black rounded-lg overflow-hidden"
//             onClick={e => e.stopPropagation()}
//           >
//             <button 
//               className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
//               onClick={closeVideo}
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//             <video controls autoPlay className="w-full">
//               <source src={selectedVideo} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
          
//           </div>
//         </div>
//       )}

//       <div className="mt-16  lg:px-5 border-b-[1px] border-gray-500 border-opacity-50 pb-1">
//         <h1 className="t-title text-[4vw] font-['Founders_Grotesk'] tracking-tight text-[#004D43]">Smiling Faces <span className='lg:text-[3vw]'>😊</span></h1>
//       </div>
//       <div className="subpart service-section px-5 py-2">
//             <h2 className=" text-2xl md:text-3xl  uppercase -mb-2">Our customers are entering their  <span className="text-[#004D43]">dream space</span></h2>
//             <p className="text-lg text-gray-700 mb-10">
//             <br />
//             →   
//             One of the most beautiful moments for us is when our customers get possession of their dream home.<br />
//             →
//             A glimpse of the happy faces that are part of our family.
//           <br />
//           </p>
//         </div>
//     </section>
//   );
// }

// export default TestimonialP;


import { useState } from 'react';
import '../styles/TestimonialP.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import Contact from '../components/Contact'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination,Autoplay } from 'swiper/modules';

const testimonials = [
  {
    id: 1,
    name: "M. Asghar",
    role: "Real Estate Agent",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "The versatility and quality of the service is impressive indeed. features make it stand out.",
    hasVideo: true,
    videoUrl: "https://youtu.be/kkNnb-urQ7c?si=5pGHa3h_ADnsP-pn"
  },
  {
    id: 2,
    name: "Rihan Saidi",
    role: "Founder ZxFlow",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    text: "The tech and e-commerce sets are amazing! I must give you guys that. Good one peeps 😊",
    hasVideo: true,
    videoUrl: "https://example.com/video2.mp4"
  },
  {
    id: 3,
    name: "Muzammil Merchant",
    role: "Cross Designer",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    text: "These are some really nice categories  The variety and quality are exceptional.",
    hasVideo: true,
    videoUrl: "https://example.com/video3.mp4"
  },
  {
    id: 4,
    name: "Nicola Landolfo",
    role: "Product Dev at Fintech",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    text: "Iconstock is an excellent choice for designers and developers looking to add an iconic touch to their projects. The integration is seamless.",
    hasVideo: false,
    videoUrl: "https://example.com/video4.mp4"
  },
  {
    id: 5,
    name: "Jan",
    role: "UI Designer",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "Awesome, every icon is beautiful, and really appreciate having all these professional design skills. The consistency across the set is remarkable.",
    hasVideo: true,
    videoUrl: "https://example.com/video5.mp4"
  },
  {
    id: 6,
    name: "Umar Saleem",
    role: "Digital Marketing",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    text: "I am impressed with the vast collection of icons on Iconstock! The search functionality and organization make it easy to find exactly what I need.",
    hasVideo: true,
    videoUrl: "https://example.com/video6.mp4"
  },{
        id: 7,
        name: "M. Asghar",
        role: "Real Estate Agent",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        text: "The versatility and quality of the service is impressive indeed.",
        hasVideo: true,
        videoUrl: "https://youtu.be/kkNnb-urQ7c?si=TFtumom0glkB1ptC.mp4"
      },
      {
        id: 8,
        name: "Rihan Saidi",
        role: "Founder ZxFlow",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        text: "The tech and e-commerce sets are amazing! I must give you guys that. Good one peeps 😊",
        hasVideo: true,
        videoUrl: "https://example.com/video2.mp4"
      },
      {
        id: 9,
        name: "Muzammil Merchant",
        role: "Cross Designer",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        text: "These are some really nice categories of icons that designers would find very helpful going forward.",
        hasVideo: true,
        videoUrl: "https://example.com/video3.mp4"
      },{
        id: 10,
        name: "Muzammil Merchant",
        role: "Cross Designer",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        text: "These are some really nice categories  The variety and quality are exceptional.",
        hasVideo: true,
        videoUrl: "https://example.com/video3.mp4"
      },
      {
        id: 11,
        name: "Nicola Landolfo",
        role: "Product Dev at Fintech",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
        text: "Iconstock is an excellent choice for designers and developers looking to add an iconic touch to their projects. The integration is seamless.",
        hasVideo: false,
        videoUrl: "https://example.com/video4.mp4"
      },
      {
        id: 12,
        name: "Jan",
        role: "UI Designer",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        text: "Awesome, every icon is beautiful, and really appreciate having all these professional design skills. The consistency across the set is remarkable.",
        hasVideo: true,
        videoUrl: "https://example.com/video5.mp4"
      }
];




function TestimonialP() {     
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [swiperRef, setSwiperRef] = useState(null);

   const openVideo = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-24 px-4 bg-gradient-testimonials min-h-screen font-['Founders_Grotesk']">
        <div className="w-full lg:px-5 border-b-[1px] border-gray-500 border-opacity-50 pb-1">
            <h1 className="t-title text-[4vw] font-['Founders_Grotesk'] tracking-tight text-[#004D43]">Testimonials</h1>
        </div>
        <div className="subpart service-section px-5 py-2">
            <h2 className=" text-2xl md:text-3xl  uppercase -mb-2">Words of appreciation from our <span className="text-[#004D43]">happy family</span></h2>
            <p className="text-lg text-gray-700 mb-10"> 
            <br />
            → 
            We are grateful to our customers.<br />
            →
            Who gave us excellent reviews, Take a look at our family's extensive reviews of our service.
          <br />
          </p>
        </div>
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-4xl md:text-5xl text-center mb-4 mt-5  text-[#004D43] font-light ">
          Creatives are talking
        </h1>
        
        {/* Avatar circles at the top */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {testimonials.map((testimonial) => (
            <div key={`avatar-${testimonial.id}`} className="w-14 h-14 rounded-full overflow-hidden">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6  lg:px-32">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className={`bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative flex flex-col
                ${testimonial.id  % 2 !== 0 ? 'lg:mb-7' : testimonial.id % 2 === 0 ? 'lg:mt-4' : ''}`}
            >
              <p className="text-gray-800 mb-4 flex-grow leading-relaxed">"{testimonial.text}"</p>
              
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-md font-semibold text-[#004D43] ">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              {testimonial.hasVideo && (
                <button 
                  onClick={() => openVideo(testimonial.videoUrl)}
                  className="absolute bottom-4 right-4 text-blue-500 hover:text-blue-600 transition-colors"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeVideo}
        >
          <div 
            className="relative w-full max-w-4xl mx-4 bg-black rounded-lg overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              onClick={closeVideo}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <video controls autoPlay className="w-full">
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          
          </div>
        </div>
      )}

      <div className="mt-16  lg:px-5 border-b-[1px] border-gray-500 border-opacity-50 pb-1">
        <h1 className="t-title text-[4vw] font-['Founders_Grotesk'] tracking-tight text-[#004D43]">Smiling Faces <span className='lg:text-[3vw]'>😊</span></h1>
      </div>
      <div className="subpart service-section px-5 py-2">
            <h2 className=" text-2xl md:text-3xl  uppercase -mb-2">Our customers are entering their  <span className="text-[#004D43]">dream space</span></h2>
            <p className="text-lg text-gray-700 mb-10">
            <br />
            →   
            One of the most beautiful moments for us is when our customers get possession of their dream home.<br />
            →
            A glimpse of the happy faces that are part of our family.
          <br />
          </p>
        </div>
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 1000, // Adjust timing (3000ms = 3s)
              disableOnInteraction: false, // Keeps autoplay working after interaction
            }}
            pagination={{
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
        <SwiperSlide className='s-slide'>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className='s-slide'>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide className='s-slide'>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide className='s-slide'>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide className='s-slide'>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide className='s-slide'>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide className='s-slide'>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide className='s-slide'>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide className='s-slide'>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>

      <div className='test-contat -mb-12'>
        <Contact/>
      </div>
    </section>
  );
}

export default TestimonialP;




