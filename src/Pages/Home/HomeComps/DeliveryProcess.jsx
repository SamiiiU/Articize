import React from 'react'
import HomeData from '../../../Data/HomeData/HomeData'

const DeliveryProcess = () => {
  return (
    <div className='w-full bg-[#243B79] text-white  px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center '>
      
      <h1 className='lg:text-5xl text-2xl font-[800]'>Our <strong>Client-Centric
        </strong> Delivery Process</h1>


    <div className='w-full gap-6 text-left flex justify-center items-center flex-wrap'>
        {HomeData.deliveryProcess.map((process , index) => (
                <div key={index} className='w-[300px]  transition-all'>
                    <h1 className='font-bold sm:text-lg text-md my-2'>{process.header}</h1>
                    <p className='sm:text-md text-sm'>{process.para}</p>
                </div>
        ))}
    </div>
    </div>
  )
}

export default DeliveryProcess
