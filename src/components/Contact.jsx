import React, { useState } from "react";
import emailjs from 'emailjs-com'
import contactLogo from "../assets/illustrator.png";

import styled from 'styled-components';

import '../styles/Contact.css';
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    notRobot: false,
  });

  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    return /^\d{10}$/.test(phone);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setError(""); // Clear error on input
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    const { firstName, lastName, email, phone,message, notRobot } = formData;
    if (!firstName || !lastName || !email || !phone || !notRobot ) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!validatePhone(phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!notRobot) {
      setError("Please confirm you are not a robot.");
      return;
    }

    // Send email using EmailJS
    emailjs
      .send(
        "service_wbim5dh", 
        "template_xcwi9l9", 
        {
          firstName,
          lastName,
          email,
          phone,
          message,
        },
        "feOdC8xUghr_cSxse" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
            notRobot: false,
          });
        },
        (error) => {
          console.error("Error sending email:", error);
          setError("Failed to send message. Please try again.");
        }
      );
  };
  return (
    <div  className="w-full py-10 font-['Founders_Grotesk']">
      {/* Background Text */}
      <div className="px-9 border-b-[1px] border-gray-500 border-opacity-50">
        <h1 className="ctitle text-[10vw] lg:text-[9vw] font-extrabold opacity-10 pointer-events-none -mb-10 ">
          Contact
        </h1>
      </div>
      <div className="service-section px-9 lg:px-12 py-5">
        <h2 className="subtitle text-2xl md:text-3xl lg:text-4xl font-light mb-4">
          Our team is ready to assist you
        </h2>
      </div>

      {/* Content */}
      <div className="conmain flex flex-row justify-between items-start max-w-8xl w-full px-12 z-10 mt-5">

        <div className="w-[45%] flex">
          <img src={contactLogo} alt="Contact Us" className="conimg w-[80%] lg:w-[75%]" />
        </div>

        {/* Right Section - Form */}
        <form className="flex-1 lg:mt-5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-10 lg:gap-12">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
              className="border-b border-gray-400 focus:border-black outline-none py-2 text-gray-700 placeholder-gray-500 bg-transparent"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
              className="border-b border-gray-400 focus:border-black outline-none py-2 text-gray-700 placeholder-gray-500 bg-transparent"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="border-b border-gray-400 focus:border-black outline-none py-2 text-gray-700 placeholder-gray-500 bg-transparent"
            />
           <input
                type="tel"
                name="phone"
                value={formData.phone}
                onInput={(e) => {
                  const input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                  if (input.length <= 10) {
                    setFormData((prevData) => ({
                      ...prevData,
                      phone: input,
                    }));
                  }
                }}
                placeholder="Contact Number"
                className="border-b border-gray-400 focus:border-black outline-none py-2  text-gray-700 placeholder-gray-500 bg-transparent"
             />

          </div>
          <input
            type="text"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message..."
            className="mt-10 lg:mt-12 border-b border-gray-400 focus:border-black outline-none py-2 text-gray-700 placeholder-gray-500 bg-transparent w-full"
          ></input>

          <div className="flex items-center justify-between mt-12 lg:mt-14">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="notRobot"
                checked={formData.notRobot}
                onChange={handleInputChange}
                id="not-robot"
                className="mr-2"
              />
              <label
                htmlFor="not-robot"
                className="text-gray-700 text-sm pt-[6px]"
              >
                I am not a robot
              </label>
            </div>
            {/* <button
              type="submit"
              className="bg-black text-white px-8 pt-2 pb-1 rounded-full shadow-md hover:scale-105 transition-transform"
            >
              Send
            </button> */}
            <StyledWrapper>
            <button type="submit" className="animated-button">
              <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
              </svg>
              <span className="text">Send</span>
              <span className="circle" />
              <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
              </svg>
            </button>
          </StyledWrapper>
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </form>

        
      </div>
    </div>
  );
};

const StyledWrapper = styled.div`
  .animated-button {
    position: relative;
    opacity:0.7;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 36px;
    border: 4px solid;
    border-color: transparent;
    font-size: 16px;
    background-color: inherit;
    border-radius: 100px;
    font-weight: 600;
    color: black;
    box-shadow: 0 0 0 2px gray;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button svg {
    position: absolute;
    width: 24px;
    fill: black;
    opacity:0.8;
    z-index: 9;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button .arr-1 {
    right: 16px;
  }

  .animated-button .arr-2 {
    left: -25%;
  }

  .animated-button .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: greenyellow;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button .text {
    position: relative;
    z-index: 1;
    transform: translateX(-12px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button:hover {
    box-shadow: 0 0 0 12px transparent;
    color: #212121;
    border-radius: 12px;
  }

  .animated-button:hover .arr-1 {
    right: -25%;
  }

  .animated-button:hover .arr-2 {
    left: 16px;
  }

  .animated-button:hover .text {
    transform: translateX(12px);
  }

  .animated-button:hover svg {
    fill: #212121;
  }

  .animated-button:active {
    scale: 0.95;
    box-shadow: 0 0 0 4px greenyellow;
  }

  .animated-button:hover .circle {
    width: 220px;
    height: 220px;
    opacity: 1;
  }`;


export default Contact;


