import React from 'react'
import { FaArrowRight } from "react-icons/fa6";


const PathToSuccess = () => {
  return (
    <div className='w-full  px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center '>
        <h1 className='lg:text-[3rem] text-[2.5rem] font-[800]'>Path To <span className='text-[#207CE7]'>Digital Success</span></h1>
        <p className='lg:text-xl text-lg font-normal text-[#0b1720] '>By offering custom omnichannel marketing strategies, led by experts and backed by data, WebFX can help your business 
        hit your revenue goals. Stop juggling multiple agencies and start working with a top-rated agency that will drive results.</p>

        <div className='w-full text-left  h-auto relative gap-y-4 flex flex-col'>
            {/* path 1  */}
            <div className='flex relative flex-wrap lg:text-xl text-lg py-8  xl:items-center gap-y-4 justify-start border-[#2080EA] border-b-2'>
                {/* heading  */}
                <h1 className='xl:flex-1 w-full text-left 2xl:text-center lg:text-2xl text-xl font-extrabold'>Drive Website Traffic</h1>

                <div className='sm:flex-1 w-full flex flex-col gap-y-4 font-medium  '>
                    <span className=' flex flex-row items-center hover:gap-x-8 transition-all duration-200 gap-x-4'>SEO Services < FaArrowRight /></span>
                    <span className=' flex flex-row items-center hover:gap-x-8 transition-all duration-200  gap-x-4'>Local SEO Service< FaArrowRight /></span>
                </div>

                <div className='sm:flex-1 w-full flex flex-col gap-y-4 font-medium '>
                    <span className=' flex flex-row items-center hover:gap-x-8 transition-all duration-200  gap-x-4'>Ecommerce SEO Services< FaArrowRight /></span>
                    <span className=' flex flex-row items-center hover:gap-x-8 transition-all duration-200  gap-x-4'>Content Marketing Services< FaArrowRight /></span>
                </div>
                <span className='h-full w-1/2 absolute lg:opacity-100 opacity-0 -left-1/2 bg-[#2080EA] rounded-tr-full'/>
            </div>

            {/* path 2   */}
            <div className='flex relative flex-wrap lg:text-xl text-lg py-8  xl:items-center gap-y-4 justify-start border-[#67EBC8] border-b-2'>
                {/* heading  */}
                <h1 className='xl:flex-1 w-full text-left 2xl:text-center lg:text-2xl text-xl font-extrabold'>Create and manage powerful 
                ad campaigns</h1>

                <div className='sm:flex-1 w-full flex flex-col gap-y-4 font-medium  '>
                    <span className=' flex flex-row items-center hover:gap-x-8 transition-all duration-200 gap-x-4'>PPC Management Service < FaArrowRight /></span>
                    <span className=' flex flex-row items-center hover:gap-x-8 transition-all duration-200  gap-x-4'>Social Advertising Services< FaArrowRight /></span>
                </div>

                <div className='sm:flex-1 w-full flex flex-col gap-y-4 font-medium '>
                    <span className=' flex flex-row items-center hover:gap-x-8 transition-all duration-200  gap-x-4'>Programmatic Advertising Services < FaArrowRight /></span>
                    <span className=' flex flex-row items-center hover:gap-x-8 transition-all duration-200  gap-x-4'>Local SEO Service< FaArrowRight /></span>
                </div>

                <span className='h-full w-1/2 absolute lg:opacity-100 opacity-0 -left-1/2 bg-[#67EBC8] rounded-tr-full'/>
            </div>

            {/* path 3   */}
            <div className='flex relative flex-wrap lg:text-xl text-lg py-8  xl:items-center gap-y-4 justify-start border-[#B9E688] border-b-2'>
                {/* heading  */}
                <h1 className='xl:flex-1 w-full text-left 2xl:text-center lg:text-2xl text-xl font-extrabold'>Collect, analyze, and deploy marketing data</h1>

                <div className='sm:flex-1 w-full flex flex-col gap-y-4 font-medium'>
                    <span className=' flex flex-row items-center hover:gap-x-8 transition-all duration-200 gap-x-4'>MarketingCloudFX< FaArrowRight /></span>
                    <span className=' flex flex-row items-center hover:gap-x-8 transition-all duration-200  gap-x-4'>Nutshell < FaArrowRight /></span>
                </div>

                <div className='sm:flex-1 w-full flex flex-col gap-y-4 font-medium'>
                    <span className=' flex flex-row items-center hover:gap-x-8 transition-all duration-200  gap-x-4'>Website Call Tracking  < FaArrowRight /></span>
                    <span className=' flex flex-row items-center hover:gap-x-8 transition-all duration-200  gap-x-4'>Lead Management< FaArrowRight /></span>
                </div>
                <span className='h-full w-1/2 absolute lg:opacity-100 opacity-0 -left-1/2 bg-[#B9E688] rounded-tr-full'/>
            </div>

            {/* path 4   */}
            <div className='flex relative flex-wrap lg:text-xl text-lg  py-8  xl:items-center gap-y-4 justify-start border-[#FFE57F] border-b-2'>
                {/* heading  */}
                <h1 className='xl:flex-1 w-full text-left  2xl:text-center lg:text-2xl text-xl font-extrabold'>Improve brand 
                messaging and conversion</h1>

                <div className='sm:flex-1 w-full flex flex-col gap-y-4 font-medium'>
                    <span className=' flex flex-row items-center hover:gap-x-8 transition-all duration-200 gap-x-4'>Website Design Services< FaArrowRight /></span>
                    <span className=' flex flex-row items-center hover:gap-x-8 transition-all duration-200  gap-x-4'>CRO Services < FaArrowRight /></span>
                </div>

                <div className='sm:flex-1 w-full flex flex-col gap-y-4 font-medium'>
                    <span className=' flex flex-row items-center hover:gap-x-8 transition-all duration-200  gap-x-4'>Landing Page Design Services < FaArrowRight /></span>
                    <span className=' flex flex-row items-center hover:gap-x-8 transition-all duration-200  gap-x-4'>Social Media Management Services< FaArrowRight /></span>
                </div>

                <span className='h-full w-1/2 absolute lg:opacity-100 opacity-0 -left-1/2 bg-[#FFE57F] rounded-tr-full'/>
            </div>
        </div>
    </div>
  )
}

export default PathToSuccess