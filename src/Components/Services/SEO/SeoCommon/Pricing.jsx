import React, { useState } from 'react'
import { SiTicktick } from 'react-icons/si'
import { motion } from 'framer-motion';

const Pricing = ({page}) => {
    const [activeIndex , setActiveIndex] = useState(1);

    const cardHandler = (index) => {
        setActiveIndex(index)
    }

  return (
    <div className='w-full  px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center '>
        <h1 className='lg:text-[3rem] text-[2.5rem] font-[800]' id='headingHero'
        dangerouslySetInnerHTML={{
            __html: page.pricingHeading, // Render HTML string safely
          }}
        >
        </h1>
        <p className='lg:text-xl text-lg font-normal  '>{page.pricingPara}</p>
          
        <div className='w-full flex justify-center items-center mt-6 gap-x-3 transition-all relative'>
            {page.pricingCards.map((card , index) => (
                <motion.div 
                onMouseEnter={() => cardHandler(index)}
                onMouseLeave={() => cardHandler(null)}
                style={{backgroundColor : activeIndex === index ? '#00316A' : 'white' , scale : activeIndex === index ? 1.10 : 1 , color : activeIndex === index && 'white', boxShadow : activeIndex === index ? "0px 5px 10px rgba(0, 0, 0, 0.2)" : "0px 10px 20px rgba(0, 0, 0, 0.3)"}}
                
                key={index} className={`flex-1 flex flex-col p-6 transition-all duration-500`}>
                    <h1 className='font-semibold mb-4'>{card.header}</h1>
                    <p className='mb-4'>${card.price}</p>

                    <span className='py-2 border-b-4 mb-8'></span>

                    <h1 className='text-left font-bold leading-8'>PERFECT FIT FOR</h1>
                    <p className='text-left mb-4 text-sm'>{card.fitFor}</p>

                    
                    <h1 className='text-left font-bold leading-8'>WHAT YOU WILL GET</h1>
                    {card.youGet.map((items , idx) => (
                        <div className='flex gap-x-4 text-left items-center mb-2' key={idx}>
                        <SiTicktick  className='text-[#6ADFD7] text-sm'/>
                        <p className='flex-1 text-sm'>{items}</p>
                         </div>
                    ))}


                </motion.div>
            ))}
        </div>  
    </div>
  )
}

export default Pricing 
