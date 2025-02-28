import React from 'react'
import heroBG from '../../../Assets/Images/CommonImages/HeroBG.png'
import heroVid from '../../../Assets/Videos/HomeVideos/HomeHero.mp4'

const Hero = () => {
  return (
    <div className='w-full  bg-white  px-4 sm:px-12  2xl:px-80 
     pt-44 pb-20 flex   '>
        {/* <span className='w-full h-full absolute top-0 z-0' style={{backgroundImage : `url(${heroBG})` , backgroundSize : 'contain' , backgroundPosition : 'center' , backgroundRepeat : 'no-repeat'}}/> */}
        <div className='w-full z-10 flex justify-center items-center flex-col lg:flex-row gap-10 '>
            {/* Home text  */}
            <div className='lg:w-1/2 w-full lg:items-start md:items-center  flex flex-col gap-6 '>

                <h1 className=' font-[700] text-darkBlue lg:text-[3.5rem] text-4xl tracking-tight leading-[1.1] lg:text-left md:text-center text-left    font-nunito'>Empower Your Business Transformation
                </h1>
                <p className='text-md'>At DEVXCLOUD, we specialize in delivering tailored digital services to help businesses thrive in the competitive digital landscape.
                </p>

                <div className=' flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full text-md xl:text-lg'>
                    <span className='px-6 py-4 text-white font-bold cursor-pointer transition-all duration-300 hover:bg-[#DE781F] bg-lightBlue text-center rounded-md '>Get Started</span>
                    <span className='px-6 py-4  font-bold cursor-pointer transition-all duration-300 hover:bg-lightBlue hover:text-white border-2 border-lightBlue text-lightBlue text-center rounded-md '>Get Custom Quote</span>
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