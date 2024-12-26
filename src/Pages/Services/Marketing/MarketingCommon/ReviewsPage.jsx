import React from 'react'

import { Testimonal } from '../../../../CommonComps/Testimonal/Testimonal'

const ReviewsPage = ({page , testimonals}) => {
  return (
     <div className='w-full  px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center'>
           <h1 className='lg:text-[3rem] text-[2.5rem] font-[800]' id='headingHero'
        dangerouslySetInnerHTML={{
            __html: page.heading, // Render HTML string safely
          }}
        >
        </h1>
        <p className='lg:text-xl text-lg font-normal  '>{page.para}</p>
          <Testimonal Reviews={testimonals}/>
          
        </div>
  )
}

export default ReviewsPage
