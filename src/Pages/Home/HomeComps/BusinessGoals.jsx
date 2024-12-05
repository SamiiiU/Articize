import React from 'react'
import { ImInfinite } from 'react-icons/im'
import InfiniteScroller from '../../../Prebuild_Components/InfiniteScroll/InfitiniteScroller'
import HomeData from '../../../Data/HomeData/HomeData'
import CustomButton from '../../../Prebuild_Components/CustomButton'

const BusinessGoals = () => {
  return (
    <div className='w-full  px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center '>
        <h1 className='lg:text-[3rem] text-[2.5rem] font-[800]'>Empowering Diverse 
        <span className='text-[#207CE7]'> Clients to Achieve</span> Their Business Goals </h1>
        <p className='lg:text-xl text-lg font-normal text-[#0b1720] '>Proudly serving over 50+ innovative companies across various sectors, DEVXCLOUD is committed to driving success and exceeding expectations.
          {/* <br/> */}
          Our clients, from startups to established enterprises, trust us to deliver cutting-edge solutions that transform their operations and spur significant growth. Below are just a few of the companies we've helped thrive in a digital-first world:

        </p>


        <InfiniteScroller images={HomeData.companiesLogoURLs}/>

        <div className='w-full  bg-[#013a6e] p-8 text-white  rounded-xl '>
          <div className='w-full flex md:flex-row flex-col gap-8 mb-20'>
          <div className='flex-1 text-left'>
          <h1 className='font-semibold' > Industry Recognition </h1>
          <p>As recognized by Clutch as a Top Emerging Tech Company in 2024, we continue to push the boundaries of what's possible in digital services.
          </p>
          </div>
          <div className='flex-1 text-left'>
          <h1 className='font-semibold' > Achieve Your Business Goals with DEVXCLOUD </h1>
          <p>Discover how our tailored strategies can elevate your business. Contact us today for a detailed consultation and start your journey towards remarkable growth.

          </p>
          </div>
          </div>
      
          <CustomButton text={"Get a free proposal" } className={"bg-white text-xl font-bold hover:bg-[#207DE9] hover:text-white text-[#013a6e]" } />
        </div>
      
    </div>
  )
}

export default BusinessGoals
