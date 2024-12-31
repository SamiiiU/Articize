import React from 'react'
import { SiTicktick } from 'react-icons/si'
import CustomButton from '../../../../Prebuild_Components/CustomButton'

const CustomPricingCyberandDevops = ({page}) => {
  return (
    <div className='w-full bg-white px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center '>
        <h1 className='2xl:text-[3rem] text-[2.5rem] font-[800]'
        dangerouslySetInnerHTML={{
            __html: page.heading, // Render HTML string safely
          }}
        >
        </h1>
            <div className='w-3/4 rounded-3xl bg-[#013a6e] flex flex-col text-white gap-y-4 justify-center items-center py-4'>
                <h1 className='font-bold text-3xl '>{page.upperPart.header}</h1>
                <span className='font-[900] text-[#6ADFD7] text-2xl'>{page.upperPart.price}</span>
            </div>


            <div style={{  boxShadow :  "" }} className={`w-3/4 bg-white rounded-2xl relative flex sm:flex-row flex-col gap-x-4 transition-all duration-300`}>

                <div className='flex-1 text-left p-4  rounded-2xl shadow-xl '>
                    
                    <h1 className='font-bold mb-4 text-2xl' >What It's Include</h1>
  
                    {page.leftPart.map((include ,index) => (
                    // <li key={index} className='my-3 text-sm' dangerouslySetInnerHTML={{__html : include}}></li>
                    <div className='flex gap-x-4 text-left items-center mb-2' key={index}>
                            <SiTicktick  className='text-orange-500 text-sm'/>
                            <p className='flex-1 text-sm' dangerouslySetInnerHTML={{__html : include}}></p>
                    </div>
                    ))}
                </div>

                <div className='flex-1 flex flex-col items-center shadow-xl justify-between  rounded-2xl  p-4'>
                
                    <div className='w-full text-left '>
                         <h1 className='font-bold text-2xl text-left'>Pricing Quotes</h1>
                         {page.centerPart.pricing.map((price , idx) => (
                            <p className='text-sm my-3' dangerouslySetInnerHTML={{__html : price}} key={idx}></p>
                         ))}
                    </div>
                    <span className='w-[150px] h-[150px] border-4 border-[#013a6e] text-[#013a6e] rounded-full flex justify-center items-center bg-white'>
                            <h1 className='font-bold text-5xl'>SEO</h1>
                    </span>

                    <CustomButton text={"Let's Discus Your Custom Plan"} className={"bg-[#013a6e] text-white font-semibold "}/>
                    
                </div>

                <div className='flex-1 text-left p-4 shadow-xl  rounded-2xl '>
                    
                    <h1 className='font-bold mb-4 text-2xl' >Advance Includes</h1>
  
                    {page.rightPart.map((include ,index) => (
                    // <li key={index} className='my-3 text-sm' dangerouslySetInnerHTML={{__html : include}}></li>
                    <div className='flex gap-x-4 text-left items-center mb-2' key={index}>
                            <SiTicktick  className='text-orange-500 text-sm'/>
                            <p className='flex-1 text-sm' dangerouslySetInnerHTML={{__html : include}}></p>
                    </div>
                    ))}
                </div>

              
            </div>

            
        </div>
  )
}

export default CustomPricingCyberandDevops