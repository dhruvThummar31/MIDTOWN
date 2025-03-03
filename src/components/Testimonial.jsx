


import React, { useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import '../styles/Testimonials.css';

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Gautam Sudani",
      location: "Beverly Hills Estate",
      image:
        "https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/429567446_1142641893404948_8769075669881926155_n.jpg?ccb=11-4&oh=01_Q5AaIISlORo3w79CGIGWAlk9_dYtCtdUILPGl0WQYGYNVEG2&oe=6778A84C&_nc_sid=5e03e0&_nc_cat=105",
      testimonial:
        "Working with this real estate team was an absolute dream. They understood exactly what we were looking for and found us the perfect home within our budget.",
    },
    {
      name: "Lipa Chen",
      location: "Oceanview Property",
      image:
        "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonial:
        "The attention to detail and personalized service exceeded all my expectations. They made the entire process smooth and stress-free.",
    },
    {
      name: "Emily Rodriguez",
      location: "Downtown Loft",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300",
      testimonial:
        "Their market knowledge and negotiation skills are unmatched. We got our dream home at a great price thanks to their expertise.",
    },
    {
      name: "David Thompson",
      location: "Suburban Villa",
      image:
        "https://images.pexels.com/photos/6351630/pexels-photo-6351630.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonial:
        "From start to finish, the team was professional, responsive, and truly cared about finding us the right home. Highly recommended!",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 2000);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [activeIndex]);

  return (
    <section className="w-full py-10 font-['Founders_Grotesk']">
      {/* Title Section */}
      <div className="w-full px-10 border-b-[1px] border-gray-500 border-opacity-50 pb-1">
        <h1 className="ttitle text-[4vw] tracking-tight">Our Clients Speak</h1>
      </div>

      <div className="service-section px-10 py-5">
        <h2 className="subtitle text-2xl md:text-3xl font-light mb-4">
          Hear it from our clients
        </h2>
      </div>

      <div className="flex items-center justify-center pb-16">
        <div className="flex items-center gap-1 border-[1px] border-zinc-400 px-4 rounded-3xl">
          <div className="w-[6px] h-[6px] bg-green-500 rounded-full" />
          <span className="text-sm pt-[6px] uppercase">Testimonials</span>
        </div>
      </div>

      {/* Testimonial Card */}
      <div className="max-w-4xl mx-auto mb-10">
        <div
          className="reviewp relative bg-white rounded-xl shadow-xl p-8 pt-20"
          aria-live="polite"
        >
          {/* Client Image */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="p-1 bg-white rounded-xl shadow-lg">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                onError={(e) => (e.target.src = "fallback-image-url.jpg")}
                className="w-20 h-20 rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="text-center">
            <p className="text-xl text-gray-700 italic mb-6">
              "{testimonials[activeIndex].testimonial}"
            </p>
            <h4 className="text-lg font-semibold text-gray-900">
              {testimonials[activeIndex].name}
            </h4>
            <p className="text-gray-600">{testimonials[activeIndex].location}</p>
          </div>
        </div>
      </div>

      {/* Carousel Navigation */}
      <div className="flex flex-row  items-center justify-center gap-2">
        <button
          onClick={prevTestimonial}
          className="p-2 rounded-lg bg-white shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Previous testimonial"
        >
          <AiOutlineLeft className="pointer w-6 h-6" />
        </button>

        {/* Thumbnail Carousel */}
        <div className="flex items-center gap-3 overflow-hidden max-w-full px-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative transition-all duration-300 ${
                index === activeIndex
                  ? "scale-110 ring-1 ring-offset-2 ring-green-500"
                  : "opacity-50 hover:opacity-75"
              }`}
              aria-label={`View testimonial from ${testimonial.name}`}
            >
              <div className="p-0.5  rounded-lg shadow-md">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="cliimg w-14 h-14 rounded-lg object-cover"
                />
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={nextTestimonial}
          className=" p-2 rounded-lg bg-white shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Next testimonial"
        >
          <AiOutlineRight className="pointer w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
