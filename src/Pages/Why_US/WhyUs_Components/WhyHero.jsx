import React from 'react'
import WhyBG from '../../../Assets/Images/CommonImages/WhyBG.gif'

const WhyHero = () => {
  return (
    <div className='w-full  bg-[#013a6e] xl:min-h-[90vh] px-4 sm:px-16 md:px-28 2xl:px-48 
    sm:pt-56 pt-28 pb-10 flex justify-center  '>
        <div className='w-full flex justify-center flex-col lg:flex-row gap-10 text-white'>
            {/* Home text  */}
            <div className='lg:w-3/4 w-full lg:items-start md:items-center  flex flex-col gap-10 '>
                <h1 className='uppercase text-[18px] text-[#6ADFD7] font-bold'>Innovate, Transform, Succeed.</h1>
                <h1 className=' font-[800] lg:text-[63px] text-5xl leading-none lg:text-left md:text-center text-left'>Articized: Shaping Tomorrow with Digital Brilliance</h1>
                <p className='text-[18px]'>We are a cutting-edge digital agency committed to delivering transformative solutions in SEO, PPC, AI, Web and App Development, Data Science, and Cybersecurity. At Articized, we combine creativity with technology to empower businesses and drive exceptional results.</p>

                <div className='md:rounded-lg flex md:flex-row flex-col sm:rounded-md gap-y-4 md:w-auto w-full overflow-hidden text-lg xl:text-xl'>
                    <input type='text' placeholder='Enter Your Website ' className='text-black p-4 md:rounded-none rounded-md  outline-none'/>
                    <span className='p-4 font-bold cursor-pointer bg-[#207DE9] text-center rounded-md md:rounded-none'> Know More About US! </span>
                </div>
            </div>

            {/* Home IMG  */}
            <div className='lg:w-1/2 w-full h-full'>
                <img src={WhyBG} alt="Animated Background" className='w-full h-full' />
            </div>


        </div>
    </div>
  )
}

export default WhyHero
