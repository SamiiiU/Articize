import React, { useEffect, useState } from 'react';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

import { slides } from '../../../Data/HomeData/RevenueSlides';

const RevenueSlider = () => {

     
  // State to track the current slide
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Function to handle the next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to handle the previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };



  return (

      <div className=' w-full flex justify-between items-center gap-4'>

      {/* Left Arrow  */}
      <div
        className=" h-10 w-10 flex justify-center items-center text-black  rounded-full shadow-lg"
        onClick={handlePrev}
      >
        <FaArrowLeft />
      </div>

      {/* Revenue Slides Card */}
      <div className=" w-full mx-auto rounded-lg shadow-lg overflow-hidden">
      {/* Slides */}
      
      <div
        className={` flex w-[${slides.length * 100}%] justify-between   items-center  transition-transform duration-500 bg-zinc-500/0`}
        style={{ transform: `translateX(-${currentIndex * 25}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex pt-20 pb-5 bg-white   rounded-2xl overflow-hidden text-left px-4 flex-col gap-y-4 w-full h-full relative">
          {/* Client Image */}
          <div className='p-4 sm:pr-10 absolute left-0 top-0 bg-[#207DE9] text-white rounded-br-full font-semibold'>{slide.heading} </div>
          
          <h1 className='font-bold tracking-wide'>CHALLENGE</h1>
          <p className='font-normal  '>{slide.challenge}</p>
          <h1 className='font-bold tracking-wide'>SOLUTION</h1>
          <p> {slide.solution}</p>
          <h1 className='font-bold tracking-wide'>RESULT</h1>
          <p id='results'>{slide.result}</p>

        </div>
        ))}
      </div>

      
      </div>

    
      {/* Right Arrow */}
      <div
        className=" h-10 w-10 flex justify-center items-center text-black  rounded-full shadow-md"
        onClick={handleNext}
      >
        <FaArrowRight />
      </div>


      </div>

  );
};

export default RevenueSlider;

// 