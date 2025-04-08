import React from 'react'
import HomeData from '../../../Data/HomeData/HomeData'

const CaseStudies = () => {
  return (
    <div className='w-full  px-4 sm:px-12 2xl:px-80 py-10 flex flex-col items-center text-center my-20'>
        <h1 className='lg:text-[3.5rem] text-[2.5rem] font-[800] uppercase tracking-wide mb-4 text-darkBlue'>Built for Growth  <strong> — </strong>  Proven by Results</h1>

    <p className='text-lg'>Here’s how businesses transformed chaotic operations into scalable systems using our all-in-one solutions</p>

    <div className='w-full grid grid-cols-3 gap-10 text-left mt-10'>
            {HomeData.caseStudies.map((outcome , index) => (
                <div key={index} className='col-span-1 bg-white  rounded-lg pb-4 overflow-hidden flex flex-col items-center'
                    style={{boxShadow:  "0px 0px 5px rgba(0, 0, 0, 0.2)"}}
                    >
                    <div className="w-full  h-48 bg-slate-300 " style={{
                        backgroundImage : `url(${outcome.image})` , backgroundRepeat : 'no-repeat' , backgroundSize : 'cover'
                    }}/>   


                    <div className='p-6 space-y-6 mb-10'>
                        <h1 className='text-xl font-bold text-darkBlue'>{outcome.heading}</h1>
                        <h1 className=' '>{outcome.para}</h1>
                    </div>

                    <p className='bg-lightBlue inline text-xl font-bold text-white p-4 rounded-md cursor-pointer '>Learn More</p>

                </div>
            ))}
        </div>

    </div>
  )     
}

export default CaseStudies