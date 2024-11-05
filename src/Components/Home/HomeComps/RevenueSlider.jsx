import React, { useEffect, useState } from 'react';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

import { slides } from '../../../Data/HomeData/RevenueSlides';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../../Assets/CustomCSS/Scrollbar.css'

import Slider from "react-slick";

import useWindowWidth from '../../../customHooks/useWindowWidth';


const RevenueSlider = () => {

  const width = useWindowWidth();
  const NextArrow = ({ onClick }) => (
    <div onClick={onClick} className="absolute -right-12 top-1/2 transform -translate-y-1/2 cursor-pointer shadow-md z-10 text-2xl p-2 rounded-full ">
      <FaArrowRight />
    </div>
  );
  
  const PrevArrow = ({ onClick }) => (
    <div onClick={onClick} className="absolute -left-12 top-1/2 transform -translate-y-1/2 cursor-pointer shadow-md z-10 text-2xl p-2 rounded-full">
      <FaArrowLeft size={24} />
    </div>
  );


  var settings = {
    dots : width > 640 ? false : true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: width > 640 ? <NextArrow /> : null ,
    prevArrow: width > 640 ? <PrevArrow /> : null,
    
  };

     



  return (

    <div className="w-3/4 shadow-md rounded-2xl mx-auto my-8">
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className=" sm:h-auto h-96  overflow-y-scroll custom-scrollbar pt-20 pb-5 bg-white rounded-2xl text-left px-4 relative ">
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