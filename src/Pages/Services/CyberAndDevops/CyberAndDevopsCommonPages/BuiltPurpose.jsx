import React, { useState } from 'react'

const BuiltPurpose = ({page}) => {
    const [activeIndex , setActiveIndex] = useState(null)

    const handleIndex = (index) => {
        setActiveIndex(index)
    }
  return (
    <div  className='w-full  px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center '> 
        <h1 className='2xl:text-[3rem] text-[2.5rem] font-[800]' id='headingHero'
        dangerouslySetInnerHTML={{
            __html: page.heading, // Render HTML string safely
          }}
        >
        </h1>
        <p className='2xl:text-xl text-lg font-normal  '>{page.para}</p>

        <div className='w-full p-4 rounded-lg shadow-md'>
        <div className='w-full flex justify-between items-center flex-wrap gap-10'>
            {page.purposes.map((purpose , index) => (
                <div className='md:flex-1 md:w-auto w-full rounded-xl bg-slate-600' style={{boxShadow : activeIndex === index ? "0px 5px 10px rgba(0, 0, 0, 0.2)" : "0px 10px 20px rgba(0, 0, 0, 0.1)"}}>
                    {purpose.header}
                </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default BuiltPurpose
