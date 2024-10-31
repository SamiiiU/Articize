import React, { useRef } from 'react'
import ScrollCounter from '../../../Prebuild_Components/ScrollCounter'

const PowerOfMarketing = () => {
    const sectionRef = useRef(null);

  return (
    <div  className='w-full lg:h-screen px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center '> 
        <h1 className='lg:text-[4rem] text-[2.5rem] font-[800]'>The True <span className='text-[#207CE7]'>Power Of Marketing </span> On Revenue</h1>
        <p className='lg:text-xl text-lg font-normal text-[#0b1720] '>Our cutting-edge technology and expert strategies empower clients to make data-driven marketing decisions, keeping them ahead in a dynamic digital world.</p>


        {/* Counter elements  */}
        <div className='flex w-full font-bold relative flex-wrap lg:text-[4rem] text-[2rem] text-[#6ADFD7] py-4  gap-y-4 '>
            <span className='md:flex-1 xs:w-1/2 w-full'>
                <div className='flex xs:justify-start justify-center items-center'><ScrollCounter from = {0} to= {100} timing={2}  />%</div> 
                <h1 className='lg:text-[1.4rem] xs:text-left text-[1rem] text-black uppercase'>SET UP BY ARTICIZED</h1>
            </span>  

            <span className='md:flex-1 xs:w-1/2 w-full'>
                <div className='flex xs:justify-start justify-center  items-center'>$<ScrollCounter from = {0} to= {200} timing={2}  />K</div> 
                <h1 className='lg:text-[1.4rem] xs:text-left text-[1rem] text-black uppercase  '>Built in value</h1>
            </span> 

            <span className='md:flex-1 xs:w-1/2 w-full'>
                <div className='flex xs:justify-start justify-center  items-center'><ScrollCounter from = {0} to= {20} timing={2}  />%</div> 
                <h1 className='lg:text-[1.4rem] xs:text-left text-[1rem] text-black uppercase'>AVG Increase in ROi</h1>
            </span> 

            <span className='md:flex-1 xs:w-1/2 w-full'>
                <div className='flex xs:justify-start justify-center  items-center'><ScrollCounter from = {0} to= {500} timing={2}  />K</div> 
                <h1 className='lg:text-[1.4rem] xs:text-left text-[1rem] text-black uppercase'>Data points that drive decision making</h1>
            </span> 
        </div>

        {/* explanation section  */}

        {/* <div className='w-full flex justify-between gap-x-16 bg-teal-400 '>
            <div className=' w-[40%] flex flex-col  gap-y-8'>
                <span className='px-4 py-4 border-2 flex j border-red-300 gap-x-8 items-center  rounded-lg font-bold'><div className='w-8 h-full bg-black' /> Actionable analytices</span>
                <span className='px-4 py-4 border-2 flex j border-red-300 gap-x-8 items-center  rounded-lg font-bold'><div className='w-8 h-full bg-black' /> Actionable analytices</span>
                <span className='px-4 py-4 border-2 flex j border-red-300 gap-x-8 items-center  rounded-lg font-bold'><div className='w-8 h-full bg-black' /> Actionable analytices</span>
                <span className='px-4 py-4 border-2 flex j border-red-300 gap-x-8 items-center  rounded-lg font-bold'><div className='w-8 h-full bg-black' /> Actionable analytices</span>
            </div>
            <div className='w-[60%] flex flex-col gap-y-4'>
                <span className='px-4 py-8 border-2 border-red-300 rounded-lg font-bold'><div  /> Actionable analytices</span>
                <span className='px-4 py-8 border-2 border-red-300 rounded-lg font-bold'><div  /> Actionable analytices</span>
                <span className='px-4 py-8 border-2 border-red-300 rounded-lg font-bold'><div  /> Actionable analytices</span>
                <span className='px-4 py-8 border-2 border-red-300 rounded-lg font-bold'><div  /> Actionable analytices</span>
            </div>
        </div> */}
    </div>
  )
}

export default PowerOfMarketing