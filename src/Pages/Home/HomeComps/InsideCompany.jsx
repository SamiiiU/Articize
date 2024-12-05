import React, { act, useState } from 'react'

import HomeData from '../../../Data/HomeData/HomeData'
import { FaArrowRight } from 'react-icons/fa6'

const InsideCompany = () => {
    const [activeIndex , setActiveIndex ] = useState(0)
  return (
    <div className='w-full  px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center '>
      <h1 className='lg:text-[3rem] text-[2.5rem] font-[800]'>Company Culture and 
        <span className='text-[#207CE7]'> Inside Look</span>  Section</h1>
        <p className='lg:text-xl text-lg font-normal text-[#0b1720] '>Our expert-led digital strategies are supported by cutting-edge technology. At DEVXCLOUD, we enable our clients to make informed and strategic decisions, propelling them ahead in the dynamic digital landscape. Explore our comprehensive suite of services and see how they can transform your business.</p>


        <div className='flex w-full font-bold flex-wrap uppercase justify-center items-center gap-8'>
        {HomeData.insideCompany.map((button , index) => (
            <span onClick={() => setActiveIndex(index)} className={`px-4 py-6 rounded-lg ${index === activeIndex ? 'text-[#207ce7] bg-[#EDF5FF]' : 'text-[#808b90]' }  cursor-pointer hover:bg-[#EDF5FF]`}>{button.navigator}</span>
        ))}
        </div>
        
        <div className='w-full bg-white rounded-md p-6 shadow-lg flex md:flex-row flex-col justify-between '> 
            <div className='flex-1 py-8 text-left relative pr-20'>
                <h1 className='font-semibold text-xl mb-4'>{HomeData.insideCompany[activeIndex].heading}</h1>
                <p className='mb-4'>{HomeData.insideCompany[activeIndex].para}</p>

                <span className='text-lg flex items-center group  underline font-semibold absolute bottom-0 cursor-pointer text-[#207DE9]'>Explore {HomeData.insideCompany[activeIndex].navigator} <FaArrowRight className='group-hover:-rotate-45 group-hover:ml-3 ml-1 transition-all'/></span>
            </div>

            <div className='w-[500px] h-[300px] '>
                <img src={HomeData.insideCompany[activeIndex].image} alt='image' className='w-full h-full'/>
            </div>
        </div>
    </div>
  )
}

export default InsideCompany
