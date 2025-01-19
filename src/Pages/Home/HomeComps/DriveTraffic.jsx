import React, { useState } from 'react'
import HomeData from '../../../Data/HomeData/HomeData'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';

const DriveTraffic = () => {
    const [activeSubDropdown, setActiveSubDropdown] = useState(null); // Tracks subheading
    const [activeSubDropdownIndex, setActiveSubDropdownIndex] = useState(null); // Track subheading index
    const [selected , setSelected] = useState(0)
  

    // Toggle dropdown for subheadings
    const handleSubDropdownToggle = (subHeading , subIndex) => {
      setActiveSubDropdown(activeSubDropdown === subHeading ? null : subHeading);
      setActiveSubDropdownIndex(activeSubDropdownIndex === subIndex ? null : subIndex)
    };

    // const handleScroll = (id , key) => {
    //   setSelected(key)
    //   const element = document.getElementById(id);
    //   const offset = 80; // Adjust this value for the desired offset
    //   if (element) {
    //     const y = element.offsetTop - offset; // Subtract the offset from the element's top position
    //     window.scrollTo({ top: y, behavior: 'smooth' });
    //   }
    // };


    const handleSelected = (index) => {
      setSelected(index)

    }
    
  return (

    <div className='w-full   px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center '>

      {/* Navbar */}
      <div className=" flex sticky rounded-full bg-gray-100 p-4 justify-center flex-wrap items-center gap-4 ">
        
          {HomeData.driveTrafic.map((item, index) => (
            <span style={{color : selected == index ? '#207ce7' : '#808b90'}} key={index}  onClick={() => handleSelected(index)}
            className={`text-md cursor-pointer font-semibold transition`}>
                {item.mainHeading}
            </span>
          ))}
        
      </div>

      <div  className='my-8 p-4'>
        <h1 className='lg:text-5xl mb-8 text-2xl text-[#207DE9] font-[800]'>{HomeData.driveTrafic[selected].mainHeading}</h1>
      
      
      <p className='2xl:text-xl mb-8 text-lg font-normal text-[#0b1720] text-left'>{HomeData.driveTrafic[selected].mainPara}</p>

      <h1 className='text-left text-2xl font-bold'>View Related Services</h1>
      
      <div className='w-full text-md py-2'>
      {HomeData.driveTrafic[selected].subHeadings.map((main, index) => (
          <>
          <div key={index} className=" ">
            {/* Main Heading */}
            <h1 
              onClick={() =>  handleSubDropdownToggle(main.title , index)}
              className={`w-full ${index != 0 && ''} text-left cursor-pointer  flex justify-start gap-x-4 items-center focus:border-0  py-2 font-semibold focus:outline-none ${index === activeSubDropdownIndex && 'text-[#207DE9] border-[#313131] ' }`}>{main.title} <MdOutlineKeyboardArrowDown  className={`text-xl transition-all ${index === activeSubDropdownIndex ? 'rotate-0' : '-rotate-90'}`}/></h1>

            {/* Subheadings */}
            {activeSubDropdown === main.title && (
                <>
                
                {main.links.map((sub, subIndex) => (
                
                <div key={subIndex} className="">
                    <ul className={`pl-12 py-2  text-md text-left list-disc overflow-hidden transition-all duration-300
                    ${activeSubDropdown === sub.title ? 'animate-expand' : 'animate-contract'}`}>

                      <li className='' ><Link to={sub.path}>{sub.type}</Link></li>
              
                    </ul>
                </div>
              ))}
           </>
            )
              }
          </div>
          </>
        ))}
      </div>
      </div>
    </div>
  )
}

export default DriveTraffic
