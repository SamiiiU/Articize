import React from 'react'

const Hero = () => {
  return (
    <div className='w-full  bg-[#00316A] px-4 sm:px-16 md:px-28 2xl:px-48 
    sm:pt-56 pt-28 pb-10 flex justify-center  '>
        <div className='w-full flex justify-center flex-col lg:flex-row gap-10 text-white'>
            {/* Home text  */}
            <div className='lg:w-3/4 w-full lg:items-start md:items-center  flex flex-col gap-10 '>
                <h1 className='uppercase text-[18px] text-[#6ADFD7] font-bold'>Digital Marketing That Drives Revenue®</h1>
                <h1 className=' font-[800] lg:text-[63px] text-5xl leading-none lg:text-left md:text-center text-left'>Unlock Revenue Growth Through Digital Marketing</h1>
                <p className='text-[18px]'>Not every digital marketing agency can seamlessly connect marketing activities to your bottom line. Our award-winning expertise, data-backed decision making, and innovative technology have generated over $10 billion in revenue for clients like you. Request your personalized strategy proposal today to start driving ROI from digital marketing!</p>

                <div className='md:rounded-lg flex md:flex-row flex-col sm:rounded-md gap-y-4 md:w-auto w-full overflow-hidden text-lg xl:text-xl'>
                    <input type='text' placeholder='Enter Your Website ' className='text-black p-4 md:rounded-none rounded-md  outline-none'/>
                    <span className='p-4 font-bold cursor-pointer bg-[#207DE9] text-center rounded-md md:rounded-none'> Send me proposal </span>
                </div>
            </div>

            {/* Home IMG  */}
            <div className='lg:w-1/2 w-full h-full pt-20 '>
                <div className='w-full h-[26rem] animate-spinCustom' style={{backgroundImage : "url('https://www.webfx.com/wp-content/uploads/2024/07/homepage-vid-thumbnail.webp?v=1.1')" , backgroundSize : 'contain' , backgroundPosition : 'center' , backgroundRepeat : 'no-repeat'}}/>

            </div>
        </div>
    </div>
  )
}

export default Hero