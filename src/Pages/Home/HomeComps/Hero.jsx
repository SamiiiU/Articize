import React from 'react'
import heroBG from '../../../Assets/Images/CommonImages/HeroBG.png'
import heroVid from '../../../Assets/Videos/HomeVideos/HomeHero.mp4'

const Hero = () => {
  return (
    <div className='w-full   px-4 sm:px-12  2xl:px-80
     pt-44 pb-20 flex   '>
        {/* <span className='w-full h-full absolute top-0 z-0' style={{backgroundImage : `url(${heroBG})` , backgroundSize : 'contain' , backgroundPosition : 'center' , backgroundRepeat : 'no-repeat'}}/> */}
        <div className='w-full z-10 flex justify-center items-center flex-col lg:flex-row gap-10 '>
            {/* Home text  */}
            <div className='lg:w-1/2 w-full lg:items-start md:items-center  flex flex-col  gap-y-4'>

                <h1 className=' font-[700] text-darkBlue lg:text-[3.5rem] leading-[1.1]   '>
                Try DevXCloud <br/> Starter Suite  <br/> for free.
                </h1>
                <p className='text-xl'>Unite marketing, sales, and service in a single app. Try Salesforce Starter Suite today. There's nothing to install. No credit card required.
                </p>

                <div className=' flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full text-md xl:text-lg pt-6 '>
                    <button className=' px-8 py-2 text-white font-bold cursor-pointer transition-all duration-300 hover:bg-[#DE781F] bg-lightBlue text-center rounded-md '>Free Quote</button>
                    <button className=' px-8 py-2  font-bold cursor-pointer transition-all duration-300 hover:bg-lightBlue hover:text-white border-2 border-lightBlue text-lightBlue text-center rounded-md '>Get Started</button>
                </div>
            </div>

            <div className='2xl:w-1/2 lg:w-1/2 w-full h-full pt-4'>
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