import React, { useState } from 'react'
import { SiTicktick } from 'react-icons/si'
import CustomButton from '../../../../Prebuild_Components/CustomButton';

const Pricing = ({page}) => {
    const [activeIndex , setActiveIndex] = useState(1);

    const cardHandler = (index) => {
        setActiveIndex(index)
    }

  return (
    <div className='w-full bg-[#EDF5FF]  px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center '>
        <h1 className='lg:text-[3rem] text-[2.5rem] font-[800]' id='headingHero'
        dangerouslySetInnerHTML={{
            __html: page.pricingHeading, // Render HTML string safely
          }}
        >
        </h1>
        <p className='lg:text-xl text-lg font-normal  '>{page.pricingPara}</p>
          
        <div className='lg:w-full w-3/4 lg:flex min-w-[300px]  justify-center items-center mt-6 gap-8 transition-all '>
            {page.pricingCards.map((card , index) => (
                <div 
                onMouseEnter={() => cardHandler(index)}
                onMouseLeave={() => cardHandler(null)}
                style={{backgroundColor : activeIndex === index ? '#00316A' : 'white' , scale : activeIndex === index ? 1.05 : 1 , color : activeIndex === index && 'white', boxShadow : activeIndex === index ? "0px 5px 10px rgba(0, 0, 0, 0.2)" : "0px 10px 20px rgba(0, 0, 0, 0.3)"}}
                
                key={index} className={`flex-1 lg:my-0 overflow-hidden my-8 relative flex flex-col ${activeIndex == index ? 'z-40' : 'z-20'} p-6 transition-all duration-300`}>
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

                    {index === activeIndex && 
                        <CustomButton text={"Learn more "} className={"bg-white text-black inline mt-4"}/>
                    }

                    {/* <span className={`w-full font-bold z-50 uppercase absolute text-5xl text-[#67D48C] bg-white left-0  h-full flex justify-center items-center transition-all duration-700 ${activeIndex === index ? 'bottom-full ' : 'bottom-0'}`}>
                        {card.name}
                    </span> */}
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
