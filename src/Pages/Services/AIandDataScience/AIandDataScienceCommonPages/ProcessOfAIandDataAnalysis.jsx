
import React from 'react'

const ProcessOfAIandDataAnalysis = ({page}) => {
  return (
    <div  className='w-full  px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center '> 
        <h1 className='2xl:text-[3rem] text-[2.5rem] font-[800]' id='headingHero'
        dangerouslySetInnerHTML={{
            __html: page.heading, // Render HTML string safely
        }}
        >
        </h1>

        <div className='w-full gap-16 flex justify-evenly flex-wrap '>
          {page.steps.map((step , index) => (
            <div className='xl:flex-1 xl:w-auto lg:w-1/4' key={index}>
              <span className='w-full text-5xl my-4 text-[#207DE9]'>{step.icon}</span>
              <h1 className='text-left font-bold my-4'>{step.header}</h1>
              <p className='text-left'>{step.description}</p>
            </div>
          ))}
          
        </div>
    </div>
  )
}

export default ProcessOfAIandDataAnalysis