import React from 'react'

const DiscoverAIandDataAnalysis = ({page}) => {
  return (
    <div  className='w-full sm:min-h-auto min-h-screen px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center '> 
            <h1 className='2xl:text-[3rem] text-[2.5rem] font-[800]' id='headingHero'
            dangerouslySetInnerHTML={{
                __html: page.heading, // Render HTML string safely
            }}
            >
            </h1>

            <div className='w-full h-[500px] '
            >
              <img src={page.image} alt="" className='w-full h-full' />
            </div>
    </div>
  )
}

export default DiscoverAIandDataAnalysis