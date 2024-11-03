import React, { useRef, useState } from 'react'
import ScrollCounter from '../../../Prebuild_Components/ScrollCounter'
import HomeData from '../../../Data/HomeData/HomeData';
import dataIcon from '../../../Assets/Images/HomeImages/dataIcon.png';
import salesIcon from '../../../Assets/Images/HomeImages/salesIcon.png';
import contentIcon from '../../../Assets/Images/HomeImages/contentIcon.png';
import analytices from '../../../Assets/Images/HomeImages/analyticIcon.png';
import '../../../Assets/CustomCSS/Scrollbar.css';

const PowerOfMarketing = () => {
    const sectionRef = useRef(null);
    const [currPower , setCurrPower] = useState(HomeData.Power[3]);
    const [shadow , setShadow] = useState(1);

    const handlePower = (e) => {
        setCurrPower(HomeData.Power[e]);
        console.log(currPower);
        setShadow(e);
    }
    

  return (
    <div  className='w-full  px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center '> 
        <h1 className='lg:text-[3rem] text-[2.5rem] font-[800]'>The True <span className='text-[#207CE7]'>Power Of Marketing </span> On Revenue</h1>
        <p className='lg:text-xl text-lg font-normal text-[#0b1720] '>Our cutting-edge technology and expert strategies empower clients to make data-driven marketing decisions, keeping them ahead in a dynamic digital world.</p>


        {/* Counter elements  */}
        <div className='flex w-full font-bold relative flex-wrap xl:text-[4rem] text-[2rem] text-[#6ADFD7] py-4  gap-y-4 '>
            <span className='md:flex-1 xs:w-1/2 w-full'>
                <div className='flex xs:justify-start justify-center items-center'><ScrollCounter from = {0} to= {100} timing={2}  />%</div> 
                <h1 className='xl:text-[1.4rem] xs:text-left text-[1rem] text-black uppercase'>SET UP BY ARTICIZED</h1>
            </span>  

            <span className='md:flex-1 xs:w-1/2 w-full'>
                <div className='flex xs:justify-start justify-center  items-center'>$<ScrollCounter from = {0} to= {200} timing={2}  />K</div> 
                <h1 className='xl:text-[1.4rem] xs:text-left text-[1rem] text-black uppercase  '>Built in value</h1>
            </span> 

            <span className='md:flex-1 xs:w-1/2 w-full'>
                <div className='flex xs:justify-start justify-center  items-center'><ScrollCounter from = {0} to= {20} timing={2}  />%</div> 
                <h1 className='xl:text-[1.4rem] xs:text-left text-[1rem] text-black uppercase'>AVG Increase in ROi</h1>
            </span> 

            <span className='md:flex-1 xs:w-1/2 w-full'>
                <div className='flex xs:justify-start justify-center  items-center'><ScrollCounter from = {0} to= {500} timing={2}  />K</div> 
                <h1 className='xl:text-[1.4rem] xs:text-left text-[1rem] text-black uppercase'>Data points that drive decision making</h1>
            </span> 
        </div>

        {/* explanation section  */}

        <div className='w-full flex lg:justify-between items-center  flex-wrap justify-center  gap-y-8 '>
            <div className='relative flex flex-col xl:text-[1.5rem] text-[1rem]  gap-y-8'>
                <div onClick={() => handlePower(1)} className={`cursor-pointer px-8 py-4 min-w-36   flex transition-all  ${shadow === 1 && 'shadow-md text-[#207CE7]' } gap-x-8 items-center  rounded-lg font-bold`}><div style={{
                    backgroundImage : `url(${analytices})` , backgroundRepeat : 'no-repeat', backgroundPosition : 'center' , backgroundSize : 'contain'
                }} className='w-8 h-8' /> Actionable analytices </div>

                <div onClick={() => handlePower(2)} className={`cursor-pointer px-8 py-4 min-w-36   flex transition-all  ${shadow === 2 && 'shadow-md text-[#207CE7]' } gap-x-8 items-center  rounded-lg font-bold`}><div style={{
                    backgroundImage : `url(${dataIcon})` , backgroundRepeat : 'no-repeat', backgroundPosition : 'center' , backgroundSize : 'contain'
                }}  className='w-8 h-8 ' /> Data Empowerment</div>


                <div onClick={() => handlePower(3)} className={`cursor-pointer px-8 py-4 min-w-36   flex transition-all  ${shadow === 3 && 'shadow-md text-[#207CE7]' } gap-x-8 items-center  rounded-lg font-bold`}><div style={{
                    backgroundImage : `url(${contentIcon})` , backgroundRepeat : 'no-repeat', backgroundPosition : 'center' , backgroundSize : 'contain'
                }}  className='w-8 h-8 ' /> Content Wirting</div>


                <div onClick={() => handlePower(4)} className={`cursor-pointer px-8 py-4 min-w-36   flex transition-all  ${shadow === 4 && 'shadow-md text-[#207CE7]' } gap-x-8 items-center  rounded-lg font-bold`}><div style={{
                    backgroundImage : `url(${salesIcon})` , backgroundRepeat : 'no-repeat', backgroundPosition : 'center' , backgroundSize : 'contain'
                }}  className='w-8 h-8 ' /> Sales Enablement</div>

            </div>
            <div className='relative xl:w-[40vw] overflow-hidden w-96 md:w-[500px] group xl:h-[500px] sm:h-[450px] h-96  rounded-3xl font-bold'
            style={{
                backgroundImage : `url(${currPower.img})` , backgroundRepeat : 'no-repeat', backgroundSize : 'contain' , backgroundPosition : 'center' , backgroundRepeat : 'no-repeat',
            }}
            >
                <span className='absolute overflow-y-scroll left-0 group-hover:bottom-0 transition-all duration-500 ease-in-out bottom-full w-full h-full text-left lg:px-10 px-4 py-10 bg-gradient-to-t text-white from-[#00316A]/30 to-[#00316A] custom-scrollbar'>
                    <h1 className='lg:text-4xl text-2xl  font-bold '>{currPower.heading}</h1>
                    <p className='font-semibold lg:mt-10 mt-4'>{currPower.description}</p>
                </span>
            </div>
        </div>
    </div>
  )
}

export default PowerOfMarketing