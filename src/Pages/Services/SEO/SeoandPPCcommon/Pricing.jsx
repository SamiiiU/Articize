import React, { useState } from 'react'
import { SiTicktick } from 'react-icons/si'
import CustomButton from '../../../../Prebuild_Components/CustomButton';

const Pricing = ({page}) => {
    const [activeIndex , setActiveIndex] = useState(1);

    const cardHandler = (index) => {
        setActiveIndex(index)
    }

  return (
    <div className='w-full bg-[#EDF5FF] px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center '>
        <h1 className='lg:text-[3rem] text-[2.5rem] font-[800]' id='headingHero'
        dangerouslySetInnerHTML={{
            __html: page.heading, // Render HTML string safely
          }}
        >
        </h1>
        <p className='lg:text-xl text-lg font-normal  '>{page.para}</p>
          
        <div className='lg:w-full w-3/4 lg:flex min-w-[300px]justify-center relative items-center mt-6 gap-8 transition-all duration-300'>
            {page.pricingCards.map((card , index) => (
                <div 
                onMouseEnter={() => cardHandler(index)}
                onMouseLeave={() => cardHandler(null)}
                style={{backgroundColor : activeIndex === index ? '#00316A' : 'white' , scale : activeIndex === index ? 1.5 : 1 , color : activeIndex === index && 'white', boxShadow : activeIndex === index ? "0px 5px 10px rgba(0, 0, 0, 0.2)" : "0px 10px 20px rgba(0, 0, 0, 0.1)"}}
                
                key={index} className={`flex-1 md:min-h-[600px]  lg:my-0 overflow-hidden my-8 rounded-2xl relative flex flex-col ${activeIndex == index ? 'z-40' : 'z-20'} p-6 transition-all duration-300`}>
                    <h1 className='font-semibold mb-4'>{card.header}</h1>
                    <p className={`mb-4 font-bold text-xl ${activeIndex != index && 'text-[#00316A]'}`}>{card.price}</p>

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

                    {index === activeIndex && window.innerWidth > 640 &&
                        <CustomButton text={"Learn more "} className={"bg-white  bottom-6 text-black absolute px-10 left-1/2 -translate-x-1/2 mt-4"}/>
                    }
                    {window.innerWidth < 640 && (
                        <CustomButton text={"Learn more "} className={"bg-white  text-black  px-10  mt-4"}/>
                    )}


                </div>

            ))}
        </div>

        <div className='w-full mt-8 flex justify-center items-center'>
            <CustomButton text={"Get a custom quote"} className={"font-semibold text-white  text-2xl hover:bg-[#2045e9] bg-[#207DE9] "}/>
        </div> 
    </div>
  )
}

export default Pricing 
