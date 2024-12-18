import React from 'react'
import ScrollCounter from '../../../../Prebuild_Components/ScrollCounter'

const PoweredBy = ({page}) => {

    
  return (
    <div  className='w-full  px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center '> 
        <h1 className='lg:text-[3rem] text-[2.5rem] font-[800]' id='headingHero'
        dangerouslySetInnerHTML={{
            __html: page.heading, // Render HTML string safely
          }}
        >
        </h1>
        <p className='lg:text-xl text-lg font-normal  '>{page.para}</p>

        {/* Counter elements  */}
        <div className='flex w-full gap-x-8  justify-between relative flex-wrap   py-4  gap-y-4 '>
            {page.statistics.map((statiistic , index) => (
                <span key={index} className=' min-w-[100px] xs:max-w-[250px]  w-full'>
                <h2 className='flex xs:justify-start  text-5xl justify-center font-bold text-orange-500 items-center'><ScrollCounter from = {0} to= {statiistic.increasePercentage} timing={2}  />%</h2> 
                <p className=' xs:text-left text-md font-semibold text-black uppercase'>{statiistic.benefit}</p>
                <p className=' xs:text-left text-sm '>{statiistic.benefitText}</p>
                </span>
            ))}          
        </div>

        <div className='w-full mt-20 flex flex-wrap justify-between  gap-8'>
              
                {page.features.map((feature , index ) => (
                    <div key={index} className='lg:flex-1 bg-white shadow-xl  rounded-md overflow-hidden flex flex-col  max-h-fit lg:min-h-60' >
                    
                    <div className='w-full p-4 text-2xl flex justify-evenly bg-[#013a6e] text-white items-center'>{feature.navigator} {feature.icon}</div>
                    
                    <div className=' p-4 flex justify-center items-center'>
                        {feature.text}
                    </div>

                    </div>
                ))}
        </div>
        
    
    </div>
  )
}

export default PoweredBy