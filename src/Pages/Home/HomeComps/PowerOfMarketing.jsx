import React, { useRef, useState } from 'react'
import ScrollCounter from '../../../Prebuild_Components/ScrollCounter'
import HomeData from '../../../Data/HomeData/HomeData';

import '../../../Assets/CustomCSS/Scrollbar.css';

const PowerOfMarketing = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleIndex = (index) => {
            setActiveIndex(index);
    }
    

  return (
    <div  className='w-full  px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center '> 
        <h1 className='lg:text-[3rem] text-[2.5rem] font-[800]'>Uncover The 
        <span className='text-[#207CE7]'> Impact of Digital Strategy</span>  on Business Growth</h1>
        <p className='lg:text-xl text-lg font-normal text-[#0b1720] '>Our expert-led digital strategies are supported by cutting-edge technology. At DEVXCLOUD, we enable our clients to make informed and strategic decisions, propelling them ahead in the dynamic digital landscape. Explore our comprehensive suite of services and see how they can transform your business.</p>


        {/* Counter elements  */}
        <div className='flex w-full gap-x-8  justify-center relative flex-wrap   py-4  gap-y-4 '>
            {HomeData.impactOfMarketing.map((impact , index) => (
                <span className=' min-w-[100px] max-w-[250px]  w-full'>
                <h2 className='flex xs:justify-start  text-[32px] justify-center font-bold text-[#6ADFD7] items-center'><ScrollCounter from = {0} to= {impact.to} timing={2}  />%</h2> 
                <p className=' xs:text-left text-[14px] font-semibold text-black uppercase'>{impact.heading}</p>
                <p className=' xs:text-left text-[14px] '>{impact.para}</p>
                </span>
            ))}          
        </div>

        {/* explanation section  */}

        <h1 className='lg:text-[3rem] text-[2.5rem] font-[800]'>Revolutionize Digital 
        <span className='text-[#207CE7]'> Marketing with Comprehensive </span> Innovation</h1>

        <div className=' mt-20 flex flex-col    text-left  gap-y-8 '>
              
                {HomeData.Power.map((power , index ) => (
                    <>
                    <div key={index} onClick={() => handleIndex(index)} className={`cursor-pointer px-8 py-4  text-left xl:text-xl text-lg flex transition-all  ${activeIndex === index && 'shadow-md text-[#207CE7]' } gap-x-8 items-center  rounded-lg font-bold`}><div style={{
                        backgroundImage : `url(${power.icon})` , backgroundRepeat : 'no-repeat', backgroundPosition : 'center' , backgroundSize : 'contain'
                    }}  className='w-8 h-8 ' /> {power.name}</div>

                    {activeIndex === index && (
                        <div key={index} className='w-full flex  items-center my-10'>
                            <div className='relative xl:w-[40vw] overflow-hidden w-96 md:w-[500px] group xl:h-[3w00px] sm:h-[450px] h-96  rounded-3xl font-bold'
                        style={{
                             backgroundImage : `url(${HomeData.Power[activeIndex].container.img})` , backgroundRepeat : 'no-repeat', backgroundSize : 'contain' , backgroundPosition : 'center' , backgroundRepeat : 'no-repeat',
                            }}
                            >
                         <span className='absolute overflow-y-scroll left-0 group-hover:bottom-0 transition-all duration-500 ease-in-out bottom-full w-full h-full text-left lg:px-10 px-4 py-10 bg-gradient-to-t text-white from-[#00316A]/30 to-[#00316A] custom-scrollbar'>
                         <h1 className='lg:text-4xl text-2xl  font-bold '>{HomeData.Power[activeIndex].container.heading}</h1>
                         <p className='font-semibold lg:mt-10 mt-4'>{HomeData.Power[activeIndex].container.description}</p>
                    </span>
                        </div>
                        </div>
                    )}
                    </>
                ))}

 
            
        </div>
    </div>
  )
}

export default PowerOfMarketing