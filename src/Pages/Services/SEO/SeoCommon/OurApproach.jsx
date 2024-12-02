import React from 'react'
import bgBox from '../../../../Assets/Images/ServicesIMG/BgBoxes.jpg'

const OurApproach = ({page}) => {
  return (
    <div className='w-full  px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center '>
       <h1 className='lg:text-[3rem] text-[2.5rem] font-[800]' id='headingHero'
        dangerouslySetInnerHTML={{
            __html: page.approachHeading, // Render HTML string safely
          }}
        >
        </h1>
        <p className='lg:text-xl text-lg font-normal  '>{page.approachPara}</p>
          
       <div className='w-full flex justify-center relative flex-wrap items-center mt-12 gap-20' >
        <span className='w-screen opacity-40 h-full absolute top-0 bg-teal-500 ' style={{backgroundImage : `url(${bgBox})`}}></span>
          {
          page.approaches.map((approach , index) => (
            <div className='min-w-[300px] bg-white transition-all cursor-context-menu hover:bg-[#00316A] group hover:text-white max-w-[400px] min-h-[300px] pt-12 p-8 relative shadow-md rounded-md'>
              <span className='absolute left-1/2 p-4 text-4xl group-hover:text-[#6ADFD7] group-hover:bg-white text-white rounded-full bg-blue-500 -top-10 -translate-x-1/2'>{approach.icon}</span>
              <h1 className='font-bold text-center text-lg'>{approach.heading}</h1>
              <p className='py-6'>{approach.detail}</p>
            </div>
          ))}
       </div>
    </div>
  )
}

export default OurApproach 
