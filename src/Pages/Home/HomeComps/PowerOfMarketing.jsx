import React, { useEffect, useRef, useState } from 'react'
import ScrollCounter from '../../../Prebuild_Components/ScrollCounter'
import HomeData from '../../../Data/HomeData/HomeData';

import '../../../Assets/CustomCSS/Scrollbar.css';
import { SiTicktick } from 'react-icons/si';

const PowerOfMarketing = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [mainHeight, setHeight] = useState(0);  // State to store the height
    const divRef = useRef(null);  // Creating a ref


    
    const handleIndex = (index) => {
        setActiveIndex(index)
    } 
    
    useEffect(() => {
        if (divRef.current) {
            setHeight(divRef.current.clientHeight);  // Set height after component mounts
        }
    }, []);
    

  return (
    <div  className='w-full  px-4 sm:px-16 md:px-28 2xl:px-80 py-20 flex flex-col gap-10 text-center '> 


        <h1 className='lg:text-[3rem] text-[2.5rem] font-[800]'>Revolutionize Digital 
                <span className='text-[#207CE7]'> Marketing with Comprehensive </span> Innovation</h1>

        {/* explanation section  */}
        <div  className='w-full  flex h-fit sm:gap-x-10 gap-x-3'>
        <div ref={divRef} className='flex flex-col gap-4 ' >
            {HomeData.Power.map((power , index) => (
                <span onClick={() => handleIndex(index)} key={index} className={` ${index == activeIndex ? 'border-[#207DE9] text-[#207DE9] ' : 'text-[#313131]  border-gray-300'}  cursor-pointer  text-lg px-4 py-2 border-b-2 text-left  font-bold`}>{power.name}</span>
            ))}
        </div>
        <div style={{height : mainHeight}} className='flex-1 px-8 h-full py-10 flex flex-col justify-between relative text-left'>
            <span>
                <h1 className='font-semibold text-xl  mb-4 '>{HomeData.Power[activeIndex].container.heading}</h1>
                <p className='mb-8'>{HomeData.Power[activeIndex].container.description}</p>
            </span>

            <div className='w-full'>
                <h1 className='font-semibold text-3xl text-orange-500'>Outcomes</h1>
                {HomeData.Power[activeIndex].container.points.map((outcome , idx) => (
                    <div className='flex gap-x-4 text-left items-center mb-2' key={idx}>
                    {/* <SiTicktick  className='text-orange-500 text-sm'/> */}
                    <p className='flex-1 text-sm'>{outcome}</p>
                    </div>
                ))}
            </div>

        </div>
     </div>



        


    </div>
  )
}

export default PowerOfMarketing