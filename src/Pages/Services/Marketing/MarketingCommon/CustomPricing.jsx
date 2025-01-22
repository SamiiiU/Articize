import React, { useRef, useState } from 'react'
import './MarketingStyling.css'

const CustomPricing = ({page}) => {
    const [activeIndex ,setActiveIndex] = useState(0)

    const handleIndex = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }
  return (
    <div className='w-full bg-white px-4 sm:px-16 md:px-28 2xl:px-80 py-20 flex flex-col gap-10 text-center items-center '>
        <h1 className='2xl:text-[3rem] text-[2.5rem] font-[800]'
        dangerouslySetInnerHTML={{
            __html: page.heading, // Render HTML string safely
          }}
        >
        </h1>
          <div className='w-full px-48'>
                <div  className='w-full flex flex-wrap text-left  h-auto transition-all rounded-2xl border-2 border-[#313131]'>
                    {/* first col  */}
                    <div className='flex-1 flex flex-col justify-between border-r-2 border-[#313131]'>
                        <span className='w-full rounded-tl-xl font-extrabold bg-[#013a6e] text-2xl text-white text-center flex justify-center items-center px-10 py-4'>
                            {page.mainHeading}
                        </span> 

                        <span className='px-4 w-full '>
                            <h1 className='font-bold text-xl my-4'>OVERVIEW</h1>
                            <p>{page.overview}</p>

                            <h1 className='font-bold text-xl my-4'>BENIFITS</h1>
                            {page.benifits.map((benifit , index) => (
                                <div key={index} className='mb-8'>
                                    <h1 className='font-bold text-lg '>{benifit.heading}</h1>
                                    <p >{benifit.description}</p>
                                </div>
                            ))}
                        </span>

                        <div className='w-full flex justify-center items-center my-10'>
                            <span className='px-8 py-2 text-white bg-[#013a6e] text-lg font-semibold'>
                                Get Started
                            </span>
                        </div>

                    </div>

                    <div className='flex flex-1 flex-col justify-between min-h-full '>
                        <span className='px-4 w-full flex-1 py-8'>
                            <h1 className='font-bold text-xl my-4'>Key Features</h1>
                            {/* <p>{page.overview}</p> */}

                            {page.keyFeatures.map((benifit , index) => (
                                <div key={index} className='mb-8 '>
                                    <span className=' flex '>
                                        <h1 className='font-bold text-lg'>{benifit.heading}   </h1> 
                                        <div className='relative px-4'>
                                        {activeIndex != index ? 
                                                <span className='px-2 font-bold text-lg ' onMouseEnter={() => handleIndex(index)}> ...</span> :
                                                <span onMouseLeave={() => handleIndex(null)} className='bubble bottom-4  p-2 z-30 bg-gray-300 min-w-[300px]  text-sm  absolute ' >
                                                    <p className='transition-all animate-fadeIn'>{benifit.description}</p>
                                                    <div class="tail absolute -bottom-4 w-10 h-5 bg-gray-300  "></div>
                                                </span> 
                                            }   
                                        </div>
                                    </span>
                                    
                                    
                                </div>
                            ))}
                        </span>
                        <span className='w-full rounded-br-xl font-extrabold flex-col bg-[#013a6e] text-2xl text-white text-center flex justify-center items-center px-10 py-4'>
                            <h1 className='font-bold'>Starting At</h1>
                            <p className='text-lg font-semibold'>{page.startingAt}</p>
                        </span> 
                    </div>

                </div>
          </div>
            {/* <div className='w-3/4 rounded-3xl bg-[#013a6e] flex flex-col text-white gap-y-4 justify-center items-center py-4'>
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

              
            </div> */}

            
        </div>
  )
}

export default CustomPricing