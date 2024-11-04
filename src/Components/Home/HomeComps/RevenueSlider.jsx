import React, { useEffect, useState } from 'react';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

import { slides } from '../../../Data/HomeData/RevenueSlides';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";



const RevenueSlider = () => {

  const NextArrow = ({ onClick }) => (
    <div onClick={onClick} className="absolute -right-10 top-1/2 transform -translate-y-1/2 cursor-pointer text-blue-500 hover:text-blue-700 z-10">
      <FaArrowRight size={24} />
    </div>
  );
  
  const PrevArrow = ({ onClick }) => (
    <div onClick={onClick} className="absolute -left-10 top-1/2 transform -translate-y-1/2 cursor-pointer text-blue-500 hover:text-blue-700 z-10">
      <FaArrowLeft size={24} />
    </div>
  );

  var settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    
  };

     



  return (

    <div className="max-w-[80vw] min-w-full rounded-2xl mx-auto my-8 drop-shadow-md">
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="flex min-h-96 overflow-hidden pt-20 pb-5 bg-white rounded-2xl text-left px-4 flex-col gap-y-8 relative ">
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
    </Slider>
  </div>
  );
};

export default RevenueSlider;

// 