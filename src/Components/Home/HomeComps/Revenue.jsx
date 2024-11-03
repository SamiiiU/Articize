import React from 'react'
import RevenueSlider from './RevenueSlider'


const Revenue = () => {
  return (
    <div className='w-full  px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center '>
        <h1 className='lg:text-[3rem] text-[2.5rem] font-[800]'>Revenue & Beyond:<span className='text-[#207CE7]'> Proven Results </span>For Clients </h1>
        <p className='lg:text-xl text-lg font-normal text-[#0b1720] '>See how Articize improves the KPIs that drive actual business growth</p>
      
        <RevenueSlider/>
    </div>
  )
}

export default Revenue
