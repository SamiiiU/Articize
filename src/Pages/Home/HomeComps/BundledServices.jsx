import React from 'react'
import HomeData from '../../../Data/HomeData/HomeData'
import { FaArrowRightLong } from 'react-icons/fa6'

const BundledServices = () => {
  return (
    <div className='w-full  px-4 sm:px-12 2xl:px-80 py-10 flex flex-col text-center my-20'>


    

      <div className='w-full grid grid-cols-4 gap-10 text-left '>
        {HomeData.bundledServices.map((bundle, index) => (
          <div key={index} className='col-span-1 rounded-3xl overflow-hidden  bg-white flex flex-col items-center shadow-md pb-10'>

            <div
              className='w-full h-32 bg-blue-300 mb-6 flex justify-center items-center'
              style={{
                clipPath: "polygon(0% 0%, 0% 50% , 50% 100%, 100% 50%, 100% 0%)",
              }}
            >
              <span className='text-4xl'>{bundle.icon}</span>
            </div>
          <h1 className='text-2xl font-bold'>{bundle.name}</h1>
          <p className='px-8 mt-4 text-center'>{bundle.text}</p>

            <p className='font-bold flex gap-x-4 justify-center items-center mt-10   text-lg py-2 cursor-pointer text-white bg-lightBlue px-4 rounded-full'>
            Learn More <FaArrowRightLong/>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BundledServices