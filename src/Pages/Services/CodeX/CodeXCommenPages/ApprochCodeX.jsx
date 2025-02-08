import React from 'react'
import bgBox from '../../../../Assets/Images/ServicesIMG/BgBoxes.jpg'

const ApproachCodeX = ({ page }) => {
  return (
    <div className='w-full relative  px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center '>
      <h1 className='2xl:text-[3rem] text-[2.5rem] font-[800] z-10' id='headingHero'
        dangerouslySetInnerHTML={{
          __html: page.heading, // Render HTML string safely
        }}
      >
      </h1>
      <p className='2xl:text-xl text-lg font-normal  z-10'>{page.para}</p>
      <span className='w-full opacity-40 h-full absolute top-0 bg-teal-500 z-0 ' style={{ backgroundImage: `url(${bgBox})` }}/>

      <div className='w-full grid  md:grid-cols-6 grid-cols-1 justify-items-center items-center mt-12 gap-x-10 gap-y-20'>
        {page.approaches.map((approach, index) => (
          <div key={index} className='xl:col-span-2 md:col-span-3 col-span-1 bg-white transition-all cursor-context-menu hover:bg-[#00316A] group hover:text-white pt-12 p-8 relative shadow-md rounded-md grid place-items-center text-center'>
            <span className='absolute left-1/2 p-4 text-4xl group-hover:text-[#6ADFD7] group-hover:bg-white text-white rounded-full bg-blue-500 -top-10 -translate-x-1/2'>
              {approach.icon}
            </span>
            <h1 className='font-bold text-lg'>{approach.heading}</h1>
            <p className='py-6'>{approach.detail}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default ApproachCodeX 
