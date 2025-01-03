import React, { useState } from 'react'
import CustomButton from '../../../../Prebuild_Components/CustomButton'

const WeGot = ({page}) => {
    const [activeIndex , setActiveIndex ] = useState(null);

    const handleIndex = (index) => {
        setActiveIndex(index)
    }
  return (
    <div className='w-full  px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center '>
    <h1 className='2xl:text-[3rem] text-[2.5rem] font-[800]' id='headingHero'
     dangerouslySetInnerHTML={{
         __html: page.heading, // Render HTML string safely
       }}
     >
     </h1>
     <p className='lg:text-xl text-lg font-normal  ' dangerouslySetInnerHTML={{__html : page.para}}></p>

     <div className='flex w-full justify-center flex-wrap  gap-6'>
        {page.wegives.map((have , index) => (
            <div  
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className='w-[300px] rounded-xl p-4 min-h-40 relative transition-all' key={index} style={{boxShadow : activeIndex === index ? "0px 5px 10px rgba(0, 0, 0, 0.2)" : "0px 10px 20px rgba(0, 0, 0, 0.1)"}}>
                <h1 className='my-4 text-left font-bold'>{have.header}</h1>
                <p className='mb-8 text-left text-sm'>{have.para}</p>

                <CustomButton text={have.buttonText} className={'text-left text-[#013a6e] font-semibold absolute left-0 bottom-0'}/>
            </div>
        ))}
     </div>
    </div>
  )
}

export default WeGot
