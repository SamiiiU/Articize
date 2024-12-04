import React from 'react'
import CustomSlider from '../../../Prebuild_Components/CustomSlider/CustomSlider'
import HomeData from '../../../Data/HomeData/HomeData'
import { SiTicktick } from 'react-icons/si'


const Revenue = () => {
  return (
    <div className='w-full  px-4 sm:px-16 md:px-28 2xl:px-48 py-10 flex flex-col gap-10 text-center items-center '>
        <h1 className='lg:text-[3rem] text-[2.5rem] font-[800]'>Revenue & Beyond:<span className='text-[#207CE7]'> Proven Results </span>For Clients </h1>
        <p className='lg:text-xl text-lg font-normal text-[#0b1720] '>See how Articize improves the KPIs that drive actual business growth</p>
      
        <div className="w-3/4 py-2 rounded-2xl mx-auto my-8">
        
        <CustomSlider>
          {HomeData.revenueSlides.map((result, index) => (
        <div key={index} className=" md:min-h-[70vh] overflow-hidden shadow-md  custom-scrollbar pt-20 pb-5 bg-white rounded-2xl text-left px-4 relative ">
          {/* Client Heading */}
          <div className="p-4 sm:pr-10 absolute left-0 top-0 bg-[#207DE9] text-white rounded-br-full font-semibold">
            {result.heading}
          </div>
          
          {/* Slide Content */}
          <h1 className="font-bold tracking-wide">CHALLENGE</h1>
          <p className="font-normal mb-4">{result.challenge}</p>
          
          <h1 className="font-bold tracking-wide">APPROACH</h1>
          {result.approaches.map((approach , idx) => (
            <div className='flex gap-x-4 items-center mb-2' key={idx}>
                <SiTicktick  className='text-[#6ADFD7] text-sm'/>
                <p>{approach}</p>
            </div>
          ))}

          
        <h1 className="mt-8 font-bold tracking-wide">RESULTS</h1>

          <h1 className=' text-3xl text-[#6ADFD7] font-bold'>{result.result.incrementText}%</h1>
          <p className=''>{result.result.text}</p>
          
        </div>
      ))}
        </CustomSlider>
        </div>
    </div>
  )
}

export default Revenue
