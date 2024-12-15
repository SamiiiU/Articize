import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';

const Booster = ({page}) => {
    const [activeIndex , setactiveIndex] = useState(0);

    const handleBooster = (index) => {
        setactiveIndex(index)
    }
  return (
    <div className='w-full  px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center '>
       <h1 className='lg:text-[3rem] text-[2.5rem] font-[800]' id='headingHero'
        dangerouslySetInnerHTML={{
            __html: page.heading, // Render HTML string safely
          }}
        >
        </h1>
        <p className='lg:text-xl text-lg font-normal  '>{page.para}</p>

        <div className='w-full font-bold flex-wrap uppercase flex justify-center items-center sm:gap-x-12 gap-4 '>
            {page.boostContent.map((item , index) => (
                <span key={index} className={`px-4 py-6 rounded-lg ${index === activeIndex ? 'text-[#207ce7] bg-[#EDF5FF]' : 'text-[#808b90]' }  cursor-pointer hover:bg-[#EDF5FF]`} onClick={() => handleBooster(index)}>{item.navigator}</span>
            ))}
            
        </div>


        <div className='md:w-3/4 w-full bg-white rounded-md p-6 shadow-lg flex items-center flex-col justify-between '> 
            <div className='flex-1 py-4 text-left  relative '>
                <h1 className='font-semibold text-xl  mb-4'>{page.boostContent[activeIndex].heading}</h1>
                <p className='mb-4'>{page.boostContent[activeIndex].para}</p>
{/* 
                <span className='text-lg flex items-center group  underline font-semibold absolute bottom-0 cursor-pointer text-[#207DE9]'>Explore {page.boostContent[activeIndex].navigator} <FaArrowRight className='group-hover:-rotate-45 group-hover:ml-3 ml-1 transition-all'/></span> */}
            </div>

            <div className='sm:w-[500px]  w-full h-[300px] '>
                <img src={page.boostContent[activeIndex].image} alt='image' className='w-full h-full'/>
            </div>
        </div>
    </div>
  )
}

export default Booster