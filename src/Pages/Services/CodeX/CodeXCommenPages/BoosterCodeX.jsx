import React, { useState } from 'react'

const Booster = ({page}) => {
    const [activeIndex , setactiveIndex] = useState(0);

    const handleBooster = (index) => {
        setactiveIndex(index)
    }
  return (
    <div className='w-full  px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center '>
       <h1 className='2xl:text-[3rem] text-[2.5rem] font-[800]' id='headingHero'
        dangerouslySetInnerHTML={{
            __html: page.heading, // Render HTML string safely
          }}
        >
        </h1>
        <p className='2xl:text-xl text-lg font-normal  '>{page.para}</p>

        <div className='w-full font-bold flex-wrap uppercase flex  items-center sm:gap-x-12 gap-4 '>
            {page.boostContent.map((item , index) => (
                <span key={index} className={`px-4 py-6 text-sm rounded-lg ${index === activeIndex ? 'text-[#207ce7] bg-[#EDF5FF]' : 'text-[#808b90]' }  cursor-pointer hover:bg-[#EDF5FF]`} onClick={() => handleBooster(index)}>{item.navigator}</span>
            ))}
        </div>


        <div className='w-full bg-white rounded-md flex-wrap shadow-lg p-6 flex items-center gap-x-10 justify-between '> 
            <div className='flex-1 py-4 text-left  relative '>
                <h1 className='font-semibold text-xl  mb-4'>Why it Matters?</h1>
                <p className='mb-8'>{page.boostContent[activeIndex].matters}</p>

                <h1 className='font-semibold text-xl  mb-4'>What it includes?</h1>
                <ul className='list-item ml-10 list-disc mb-16'>
                    {page.boostContent[activeIndex].includes.map((include , index) => (
                        <li key={index}>{include}</li>
                    ))}
                </ul>

                <h1 className='font-semibold text-3xl text-orange-500'>Benefit</h1>
                <p>{page.boostContent[activeIndex].benefit}</p>
            </div>

            <div className='sm:w-[500px]  w-full h-[300px] '>
                <img src={page.boostContent[activeIndex].image} alt='image' className='w-full h-full'/>
            </div>
        </div>
    </div>
  )
}

export default Booster