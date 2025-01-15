import React from 'react'
import heroBG from '../../../Assets/Images/CommonImages/HeroBG.png'
const Hero = () => {
  return (
    <div className='w-full  bg-white xl:min-h-[90vh] px-4 sm:px-16 md:px-28 2xl:px-48 
     pt-28 pb-20 flex justify-center xl:items-center  '>
        <span className='w-full h-full absolute top-0 z-0' style={{backgroundImage : `url(${heroBG})` , backgroundSize : 'contain' , backgroundPosition : 'center' , backgroundRepeat : 'no-repeat'}}/>
        <div className='w-full z-10 flex justify-center flex-col lg:flex-row gap-10 '>
            {/* Home text  */}
            <div className='lg:w-1/2 w-full lg:items-start md:items-center  flex flex-col gap-10 '>
                <h1 className='uppercase text-[18px] text-[#6ADFD7] font-bold'>Digital Marketing That Drives Revenue®</h1>
                <h1 className=' font-[800] lg:text-5xl text-4xl leading-none lg:text-left md:text-center text-left'>Empower Your Business with Digital Transformation
                </h1>
                <p className='text-md'>At DEVXCLOUD, we specialize in delivering tailored digital services to help businesses thrive in the competitive digital landscape. From advanced SEO strategies and high-performance web development to AI-powered solutions and cybersecurity enhancements, our expertise ensures your success.
                </p>

                <div className='md:rounded-lg flex md:flex-row flex-col sm:rounded-md gap-y-4 md:w-auto w-full overflow-hidden text-md xl:text-lg'>
                    <input type='text' placeholder='Enter Your Website ' className='text-black p-4 md:rounded-none rounded-md  outline-none'/>
                    <span className='p-4 text-white font-bold cursor-pointer transition-all duration-300 hover:bg-[#DE781F] bg-[#105DAA] text-center rounded-md md:rounded-none'> Send me proposal </span>
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