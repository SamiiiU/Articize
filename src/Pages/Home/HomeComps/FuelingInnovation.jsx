import React, { useState } from 'react'
import HomeData from '../../../Data/HomeData/HomeData'
import Home from '../Home'

const FuelingInnovation = () => {
    const [activeIndex , setActiveIndex] = useState(null);
  return (
    <div
    style={{backgroundImage : 'url(https://img.freep.com/free-vector/stylish-hexagonal-line-pattern-background_1017-19742.jpg?semt=ais_hybrid)' , backgroundSize : 'cover'}}
     className='w-full  px-4 sm:px-16 bg-[#EDF5FF] md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center '>
        <h1 className='lg:text-[3rem] text-[2.5rem] font-[800]'>Dynamic 
        <span className='text-[#207CE7]'> Expertise</span>  Fueling Innovation</h1>
{/* 
        <div className='w-full flex flex-wrap gap-8'>
            {HomeData.fuelingInnovation.map((innovation , index) => (
                <div className='w-3/12 my-8  text-left'>
                <h1 className='bg-[#013a6e] p-2 rounded-md inline-block text-white fonr-semibold text-lg'>{innovation.heading}</h1>
                <p className='mt-2'>{innovation.para}</p>
                </div>
            ))}
        </div> */}

        <div className='w-full flex flex-wrap gap-8 justify-center items-center'>
            {HomeData.fuelingInnovation.map((innovation , index) => (
                <div key={index} 
                style={{
                    // backgroundImage : activeIndex === index && `url(${innovation.image}) ` ,backgroundSize : 'cover' , backgroundPosition : 'center' ,
                    transform : activeIndex === index ? 'scale(105%) ' : 'scale(100%)'}} 

                onMouseEnter={() => setActiveIndex(index)} 
                onMouseLeave={() => setActiveIndex(null)}
                className='min-w-[300px] overflow-hidden transition-all relative rounded-xl p-4 h-40 bg-white flex justify-center items-center'>
                    <h1 className={`font-semibold transition-all text-lg ${activeIndex === index && 'opacity-0'}`}>{innovation.heading}</h1>
                        <img src={innovation.image} style={{opacity : activeIndex === index ? 1 : 0}} className='w-full h-full absolute transition-all duration-500'/>
                        <span style={{top : activeIndex === index ? 0 : 500}} className='absolute text-white flex justify-center items-center p-4 transition-all duration-300 delay-300 w-full h-full bg-gradient-to-t from-[#207DE9] to-[#207DE9]/30'>
                        {innovation.para}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FuelingInnovation
