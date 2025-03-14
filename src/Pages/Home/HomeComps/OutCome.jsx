import React from 'react'
import HomeData from '../../../Data/HomeData/HomeData'

const OutCome = () => {
  return (
    <div className='w-full  px-4 sm:px-12 2xl:px-80 py-10 flex flex-col text-center my-20'>
        {/* <h1 className='lg:text-[3.5rem] text-[2.5rem] font-[800] uppercase tracking-wide mb-4 text-darkBlue'>Get Results <strong>—</strong> Not Just Services</h1>

        <p className='text-lg'>We don’t just offer services—we deliver real, measurable growth. Whether it’s AI-driven personalization, predictive analytics, or multi-channel marketing, our bundled solutions ensure you see tangible outcomes. No fluff, no wasted efforts—just proven strategies that work.</p> */}

        <div className='w-full grid grid-cols-3 gap-10 text-left mt-10'>
            {HomeData.outcomeSection.map((outcome , index) => (
                <div key={index} className='col-span-1 bg-white  rounded-3xl pb-4'
                    style={{boxShadow:  "0px 0px 10px rgba(0, 0, 0, 0.2)"}}
                    >
                    <div className="w-full flex justify-center items-center py-12 relative overflow-hidden ">   
                            <span className='p-10  rounded-full bg-darkBlue z-10'>
                                
                            </span> 
                    </div>

                    <div className='p-6 space-y-6 mb-10'>
                        <h1 className='text-3xl font-bold text-darkBlue'>{outcome.heading}</h1>
                        <h1 className=' '>{outcome.para}</h1>
                    </div>

                    <p className='text-darkBlue text-left p-6 font-bold  underline underline-offset-2 cursor-pointer'>Start learing</p>

                </div>
            ))}
        </div>

    </div>
  )
}

export default OutCome