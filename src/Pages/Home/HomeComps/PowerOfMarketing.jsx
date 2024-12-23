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
        <div className='flex w-full gap-x-8  justify-between relative flex-wrap   py-4  gap-y-4 '>
            {HomeData.impactOfMarketing.map((impact , index) => (
                <span key={index} className=' min-w-[100px] xs:max-w-[250px]  w-full'>
                <h2 className='flex xs:justify-start  text-5xl justify-center font-bold text-[#6ADFD7] items-center'><ScrollCounter from = {0} to= {impact.to} timing={2}  />%</h2> 
                <p className=' xs:text-left text-md font-semibold text-black uppercase'>{impact.heading}</p>
                <p className=' xs:text-left text-sm '>{impact.para}</p>
                </span>
            ))}          
        </div>

        {/* explanation section  */}

        <h1 className='lg:text-[3rem] text-[2.5rem] font-[800]'>Revolutionize Digital 
        <span className='text-[#207CE7]'> Marketing with Comprehensive </span> Innovation</h1>

        <div className=' mt-20 flex flex-wrap justify-evenly  gap-y-8'>
              
                {HomeData.Power.map((power , index ) => (
                    <div key={index} className='lg:min-w-[30%] max-w-fit w-full  max-h-fit' >
                    <div key={index} onClick={() => handleIndex(index)} className={`cursor-pointer px-8 py-4  text-left xl:text-xl text-lg flex transition-all  ${activeIndex === index && 'shadow-md text-[#207CE7]' } gap-x-8 items-center  rounded-lg font-bold`}><div style={{
                        backgroundImage : `url(${power.icon})` , backgroundRepeat : 'no-repeat', backgroundPosition : 'center' , backgroundSize : 'contain'
                    }}  className='w-8 h-8 ' /> {power.name}</div>

                    </div>
                ))}
        </div>

        
        
            <div  className='relative overflow-hidden flex justify-between group xl:h-[400px] sm:h-[450px] h-96  font-bold rounded-3xl items-center bg-white shadow-md' ><span className='left-0 group-hover:bottom-0 transition-all duration-500 ease-in-out bottom-full md:w-[50%] w-full h-full text-left lg:px-10 px-4 py-10'>
                <h1 className='lg:text-4xl text-2xl  font-bold '>{HomeData.Power[activeIndex].container.heading}</h1>
                <p className='font-semibold lg:mt-10 mt-4'>{HomeData.Power[activeIndex].container.description}</p>
                </span>
                    <img src={HomeData.Power[activeIndex].container.img} alt='Image' className='md:w-[40%] h-full'/>            
            </div>

    </div>
  )
}

export default PowerOfMarketing