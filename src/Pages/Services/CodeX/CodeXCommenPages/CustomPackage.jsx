import React, { useRef, useState } from 'react'
import './CodeXStyling.css'
import { SiTicktick } from 'react-icons/si'

const CustomPackage = ({page}) => {
    const [activeIndex ,setActiveIndex] = useState(null)

    const handleIndex = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }
  return (
    <div className='w-full bg-white px-4 sm:px-16 md:px-28 2xl:px-80 py-20 flex flex-col gap-10 text-center items-center '>

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
                            <span className='px-8 py-2 rounded-xl cursor-pointer text-white bg-[#013a6e] text-lg font-semibold'>
                                Get Started
                            </span>
                        </div>

                    </div>

                    <div className='flex flex-1 flex-col justify-between min-h-full '>
                        <span className='px-4 w-full flex-1 py-8'>
                            <h1 className='font-bold text-xl my-4'>Key Features</h1>

                            {page.keyFeatures.map((benifit , index) => (
                                <div key={index} className='mb-8 '>
                                    <span className=' flex '>
                                        <h1 className='font-bold text-lg flex items-center gap-x-2'>
                                        <SiTicktick  className='text-[#6ADFD7] text-sm'/>
                                        {benifit.heading}   
                                        </h1> 
                                        <div className='relative px-4'>
                                        {activeIndex != index ? 
                                                <span className='px-2 font-bold text-lg ' onMouseEnter={() => handleIndex(index)}> ...</span> :
                                                <span onMouseLeave={() => handleIndex(null)} className='bubble bottom-4  p-2 z-30 bg-gray-300 min-w-[300px]  text-sm rounded-xl  absolute ' >
                                                    <p className='transition-all  animate-fadeIn'>{benifit.description}</p>
                                                    <div className="tail absolute -bottom-4 w-10 h-5 bg-gray-300  "></div>
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

            
        </div>
  )
}

export default CustomPackage