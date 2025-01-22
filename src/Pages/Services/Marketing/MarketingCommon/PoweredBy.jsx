import React, { useState } from 'react'
import ScrollCounter from '../../../../Prebuild_Components/ScrollCounter'

const PoweredBy = ({page}) => {
      const [activeIndex ,setActiveIndex] = useState(null)
  
      const handleIndex = (index) => {
          setActiveIndex(activeIndex === index ? null : index)
      }

    
  return (
    <div  className='w-full  px-4 sm:px-16 md:px-28 2xl:px-80 py-20 flex flex-col gap-10 text-center '> 
        <h1 className='2xl:text-[3rem] text-[2.5rem] font-[800]' id='headingHero'
        dangerouslySetInnerHTML={{
            __html: page.heading, // Render HTML string safely
          }}
        >
        </h1>
        <p className='2xl:text-xl text-lg font-normal  '>{page.para}</p>

        {/* Counter elements  */}
        <div className='flex w-full gap-x-8  justify-between relative flex-wrap   py-4  gap-y-4 '>
            {page.statistics.map((statistic , index) => (
                <span key={index} className=' min-w-[100px] flex flex-col xs:max-w-[250px] w-full'>
                    <h2 className='flex xs:justify-start  text-5xl justify-center font-bold text-orange-500 items-center'><ScrollCounter from = {0} to= {statistic.increasePercentage} timing={2}  />%</h2> 
                    <p className=' xs:text-left text-md font-semibold text-black uppercase'>{statistic.benefit}</p>
                    <div className=' xs:text-left text-sm '>{statistic.benefitText} 
                      <span onMouseEnter={() => handleIndex(index)} className='px-2 font-bold text-lg cursor-pointer'>...</span>
                    </div>

                    {activeIndex === index && 
                        <span onMouseLeave={() => handleIndex(null)} className='pt-8 w-full text-left animate-fadeIn'>
                          <h1 className='font-bold text-md'>Explanation</h1>
                          <p>{statistic.explanation}</p>
                        </span>

                    }
                </span>
            ))}          
        </div>


        
    
    </div>
  )
}

export default PoweredBy