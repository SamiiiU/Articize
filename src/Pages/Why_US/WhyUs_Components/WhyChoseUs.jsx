import React, { useEffect, useState } from 'react'
import { WhyUsData } from '../../../Data/WhyUsData/WhyUsData'

const WhyChoseUs = () => {
  const [activeIndex , setActiveIndex] = useState(1)
  const indexHandler = (index) => {
    setActiveIndex(index)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className='w-full bg-white xl:min-h-[50vh]  px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center '>
      <h1 className='lg:text-[3rem] text-[2.5rem] font-[800]'>
      Uncompareable reasons for <span className='text-[#207DE9]'>why choose us</span>
        </h1>
        <p className='lg:text-xl text-lg font-normal  '>At Articized, we transform ideas into reality. Our mission is to revolutionize the digital landscape through cutting-edge solutions in SEO, PPC, AI, Web Development, App Development, Data Science, and Cyber Security.</p>

      
      
      <div className='lg:w-full flex-wrap gap-8 flex justify-center items-center w-3/4 transition-all '>
        {/* {WhyUsData.choosing.map((reason , index) => (
            <div  key={index} className=' w-full relative my-20 bg-slate-700'>
                
                <div className={`md:w-[60%] rounded-xl  bg-[#00316A] p-8 relative text-white ${index % 2 == 0 ? '' : 'right-0'}`}>{reason}</div>             
            </div>
            
        ))} */}
        {WhyUsData.choosingReasons.map((reason , index ) => (
          <>
          <div key={index}
            onMouseEnter={() => indexHandler(index)}
            onMouseLeave={() => indexHandler(null)}
            className='w-[250px] p-6 h-[250px] overflow-hidden transition-all duration-500 bg-[#013a6e] text-white  relative shadow-md rounded-full flex  items-center'
            
            >
            {reason.explanation}
              
            <div style={{transform : activeIndex === index ? 'rotateZ(-180deg)' : 'rotateZ(0)'}} className={`origin-left text-[#313131]  transition-all duration-500 rounded-full ease-in-out bg-white w-full h-full absolute p-6 top-0 left-0 flex  items-center flex-col`}>
            <span className='text-[4rem] text-[#6ADFD7]'>{reason.icon}</span>
            <h1 className='text-2xl text-center pt-10 font-bold'>{reason.name}</h1>
            </div>
          </div>


          </>
        ))}
     </div>
      

      
    </div>
  )
}

export default WhyChoseUs 
