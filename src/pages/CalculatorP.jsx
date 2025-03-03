import React from 'react'
import "../styles/Cal.css"
import { AreaCalculator } from '../components/AreaCalculator'
import { EmiCalculator } from '../components/EmiCalculator'
import { LoanEligibilityCalculator } from '../components/LoanEligibilityCalculator'
import Contact from '../components/Contact'


function CalculatorP() {
  return (
    <div className="cal-mainn min-h-screen bg-[#f1f1f1]   font-['Founders_Grotesk']  mb-[12vh]">
        <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.2"
        className="cal-main bg-[#CDEA68] py-[30vh] px-10 text-[6vw] leading-[5.3vw] tracking-tight font-bold rounded-xl"
      ><h1>Calculators</h1>
      </div>

    <div data-scroll
        data-scroll-section
        data-scroll-speed=".3"
         className="cal-con mx-auto px-14  bg-[#f1f1f1] -mb-[7vw]">

      <div className="w-full  border-b-[1px] border-gray-500 border-opacity-50 pb-1 mb-12">
            <h1 className="cal-heading text-[2.5vw] font-['Founders_Grotesk'] tracking-tight text-[#004D43] pt-10">Smart Tools for Smarter Investments – Convert, Calculate & Check Eligibility</h1>
        </div>
      
      <div className="cal-three grid grid-cols-1 md:grid-cols-3 gap-7">
        <AreaCalculator />
        <EmiCalculator />
        <LoanEligibilityCalculator />
      </div>
      </div>

      <div>
        <Contact/>
      </div>
    </div>
  
  )
}

export default CalculatorP