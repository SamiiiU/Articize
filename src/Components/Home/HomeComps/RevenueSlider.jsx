import React, { useEffect, useState } from 'react';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

import { slides } from '../../../Data/HomeData/RevenueSlides';

import '../../../Assets/CustomCSS/Scrollbar.css'

import CustomSlider from '../../../Prebuild_Components/CustomSlider/CustomSlider';

import useWindowWidth from '../../../customHooks/useWindowWidth';



const RevenueSlider = () => {




  return (

    <div className="w-3/4 py-2 rounded-2xl mx-auto my-8">
    <CustomSlider  >
      {slides.map((slide, index) => (
        <div key={index} className=" md:min-h-[70vh] overflow-hidden shadow-md  custom-scrollbar pt-20 pb-5 bg-white rounded-2xl text-left px-4 relative ">
          {/* Client Heading */}
          <div className="p-4 sm:pr-10 absolute left-0 top-0 bg-[#207DE9] text-white rounded-br-full font-semibold">
            {slide.heading}
          </div>
          
          {/* Slide Content */}
          <h1 className="font-bold tracking-wide">CHALLENGE</h1>
          <p className="font-normal mb-4">{slide.challenge}</p>
          
          <h1 className="font-bold tracking-wide">SOLUTION</h1>
          <p className="font-normal mb-4">{slide.solution}</p>
          
          <h1 className="font-bold tracking-wide">RESULT</h1>
          <p id="results" className="font-normal">{slide.result}</p>
        </div>
      ))}
    </CustomSlider>
  </div>
  );
};

export default RevenueSlider;


