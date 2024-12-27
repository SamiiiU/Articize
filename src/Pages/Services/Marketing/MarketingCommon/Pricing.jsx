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
        <h1 className='2xl:text-[3rem] text-[2.5rem] font-[800]' id='headingHero'
        dangerouslySetInnerHTML={{
            __html: page.heading, // Render HTML string safely
          }}
        >
        </h1>
        <p className='2xl:text-xl text-lg font-normal  '>{page.para}</p>
          
        <div className='xl:w-full  xl:flex min-w-[300px] justify-center relative items-center mt-6 gap-8 transition-all duration-300'>
            {page.pricingCards.map((card , index) => (
                <div 
                onMouseEnter={() => cardHandler(index)}
                onMouseLeave={() => cardHandler(null)}
                style={{ scale : activeIndex === index ? 1.5 : 1 , color : '#313131', boxShadow : activeIndex === index ? "0px 5px 10px rgba(0, 0, 0, 0.2)" : "0px 10px 20px rgba(0, 0, 0, 0.1)"}}
                
                key={index} className={`flex-1 bg-white my-8 rounded-2xl  relative flex flex-col  transition-all duration-300`}>

                    <div className='w-full py-4  bg-[#013a6e] text-white rounded-t-2xl'>
                    <h1 className='font-semibold mb-4 text-2xl' >{card.header}</h1>
                    <p className={` font-bold text-xl`}>{card.price}</p>
                    </div>


                    <div className='p-6'>
                    <h1 className='text-left font-bold leading-8'>PERFECT FIT FOR</h1>
                    <p className='text-left mb-4 text-sm'>{card.fitFor}</p>

                    <h1 className='text-left font-bold leading-8'>WHAT YOU WILL GET</h1>
                    {card.youGet.map((items , idx) => (
                        <div className='flex gap-x-4 text-left items-center mb-2' key={idx}>
                        <SiTicktick  className='text-orange-500 text-sm'/>
                        <p className='flex-1 text-sm' dangerouslySetInnerHTML={{__html : items}}></p>
                        </div>
                    ))}


                    </div>

                    <span className="bg-[#013a6e] w-fit mx-auto rounded-xl text-white  px-10 text-xl font-bold py-4 my-2">Place Your Order</span>

                    

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
