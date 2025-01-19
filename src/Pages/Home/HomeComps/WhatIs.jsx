import React from 'react'
import image from '../../../Assets/Images/HomeImages/contentmarketing.png'

const WhatIs = () => {
  return (
    <div className='w-full  px-4 sm:px-16 md:px-28 2xl:px-80 py-20 flex justify-center sm:flex-row flex-col  '>
       <div className='md:w-1/2 w-full ' style={{backgroundImage : `url(${image})` , backgroundPosition : 'center' , backgroundRepeat: 'no-repeat' , backgroundSize : 'contain'}}>
       </div>
       <div className='md:w-1/2 w-full  px-4'> 
            <h1 className='font-bold text-3xl mb-8'>What is DevXCloud?</h1>
            <p className='mb-4'>DevXCloud revolutionizes the way businesses operate, merging advanced digital tools into a single, powerful platform to supercharge your marketing, sales, and operational efficiency. With our AI-driven insights and cloud-based solutions, we empower your business to navigate the complexities of the digital landscape with ease. Our integrated approach ensures that every facet of your business strategy is aligned and optimized to deliver outstanding results.</p>
            <span className='w-full flex items-center gap-x-4'>
                <span className='px-3 p-2 bg-[#207CE7] border-2 border-[#207CE7] text-white'>Contact Us</span>
                <span className='px-3 p-2 bg-white border-2 border-[#313131]'>More About Us</span>
            </span>
       </div>
    </div>
  )
}

export default WhatIs