import React from 'react'
import heroBG from '../../../Assets/Images/CommonImages/HeroBG.png'
import heroVid from '../../../Assets/Videos/HomeVideos/HomeHero.mp4'

const Hero = () => {
  return (
    <div className='w-full  bg-white  px-4 sm:px-16 md:px-28 2xl:px-80 
     pt-36 pb-20 flex   '>
        {/* <span className='w-full h-full absolute top-0 z-0' style={{backgroundImage : `url(${heroBG})` , backgroundSize : 'contain' , backgroundPosition : 'center' , backgroundRepeat : 'no-repeat'}}/> */}
        <div className='w-full z-10 flex justify-center items-center flex-col lg:flex-row gap-10 '>
            {/* Home text  */}
            <div className='lg:w-1/2 w-full lg:items-start md:items-center  flex flex-col gap-10 '>

                <h1 className=' font-[800] lg:text-5xl text-4xl leading-none lg:text-left md:text-center text-left'>Empower Your Business with Digital Transformation
                </h1>
                <p className='text-md'>At DEVXCLOUD, we specialize in delivering tailored digital services to help businesses thrive in the competitive digital landscape. From advanced SEO strategies and high-performance web development to AI-powered solutions and cybersecurity enhancements, our expertise ensures your success.
                </p>

                <div className='md:rounded-lg flex md:flex-row flex-col sm:rounded-md gap-y-4 md:w-auto w-full overflow-hidden text-md xl:text-lg'>
                    <span className='p-4 text-white font-bold cursor-pointer transition-all duration-300 hover:bg-[#DE781F] bg-[#105DAA] text-center rounded-md md:rounded-none'>Get Started</span>
                </div>
            </div>

            <div className='lg:w-1/2 w-full h-full pt-4'>
                <video width="100%" height="100%" controls style={{objectFit: 'contain', borderRadius: '20px'}}>
                    <source src={heroVid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>


        </div>
    </div>
  )
}

export default Hero