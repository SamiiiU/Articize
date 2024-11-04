import React from 'react'
import { Testimonal } from '../../../CommonComps/Testimonal/Testimonal'
import { Reviews } from '../../../Data/TestimonalData'

const ReviewsHome = () => {
  return (
    <div className='w-full  px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center'>
      <h1 className='lg:text-[3rem] text-[2.5rem] font-[800]'>Join Our Community of  <span className='text-[#207CE7]'>Satisfied Clients </span></h1>
      <p className='lg:text-xl text-lg font-normal text-[#0b1720] '>Every project we undertake is fueled by a commitment to excellence and a passion for helping our clients succeed. Our clients' testimonials reflect the real impact we've made on their businesses. Read on to discover how our tailored solutions have transformed their visions into reality!</p>

      <Testimonal Reviews={Reviews.Home}/>

    </div>
  )
}

export default ReviewsHome
