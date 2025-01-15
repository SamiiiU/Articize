import React, { useState } from 'react'
import HomeData from '../../../Data/HomeData/HomeData'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';

const DriveTraffic = () => {

    const [activeDropdown, setActiveDropdown] = useState(null); // Tracks main heading
    const [activeDropdownIndex, setActiveDropdownIndex] = useState(null); // Tracks main heading index
    
    const [activeSubDropdown, setActiveSubDropdown] = useState(null); // Tracks subheading
    const [activeSubDropdownIndex, setActiveSubDropdownIndex] = useState(null); // Track subheading index
  
  
    // Toggle dropdown for main headings
    const handleDropdownToggle = (mainHeading, index) => {
      setActiveDropdown(activeDropdown === mainHeading ? null : mainHeading);
      setActiveDropdownIndex(activeDropdownIndex === index ? null : index)
    };
  
    // Toggle dropdown for subheadings
    const handleSubDropdownToggle = (subHeading , subIndex) => {
      setActiveSubDropdown(activeSubDropdown === subHeading ? null : subHeading);
      setActiveSubDropdownIndex(activeSubDropdownIndex === subIndex ? null : subIndex)
    };

  return (
    <div className='w-full   px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center '>

      <h1 className='lg:text-5xl text-2xl font-[800]'>Drive Targetted Traffic</h1>
      
      
      <p className='2xl:text-xl text-lg font-normal text-[#0b1720] '>Are you looking to boost your website's visibility and attract more qualified visitors? We harness the power of advanced digital strategies to pinpoint and engage your ideal audience. Wondering how to convert clicks into customers and outshine your competition? Our integrated approach not only draws in traffic but ensures it’s the right traffic, optimizing every interaction for maximum engagement and conversion. Ready to see your online presence soar? Our related services are listed below, designed to enhance your website and help attract more traffic effectively.</p>
      <div className='w-full py-2'>
      {HomeData.driveTrafic.map((main, index) => (
          <div key={index} className=" ">
            {/* Main Heading */}
            <h1 
              onClick={() => handleDropdownToggle(main.mainHeading , index)}
              className={`w-full ${index != 0 && ''} text-left  flex justify-start gap-x-4 items-center text-xl focus:border-0  py-4 font-bold focus:outline-none ${index === activeDropdownIndex && 'text-[#207DE9] border-[#313131] ' }`}>{main.mainHeading} <MdOutlineKeyboardArrowDown  className={`text-xl transition-all ${index === activeDropdownIndex ? 'rotate-0' : '-rotate-90'}`}/></h1>

            {/* Subheadings */}
            {activeDropdown === main.mainHeading && (
                <>
                <p className='text-left mb-2 px-4 text-md'>{main.mainPara}</p>
                {main.subHeadings.map((sub, subIndex) => (
                
                <div key={subIndex} className="">
                
                  <div onClick={() => handleSubDropdownToggle(sub.title , subIndex)}
                    className={`w-full text-left  py-2 font-medium px-4  text-lg focus:outline-none flex justify-start gap-x-4 items-center  overflow-hidden transition-all duration-300
                    ${activeDropdown === main.mainHeading ? 'animate-expand' : 'animate-contract'}`}>
                        <p className={` transition-all${subIndex === activeSubDropdownIndex && 'text-[#207DE9]'}`}>{sub.title}</p> <MdOutlineKeyboardArrowDown  className={`text-xl transition-all ${subIndex === activeSubDropdownIndex ? 'rotate-0' : '-rotate-90'}`}/>
                </div>

                  {/* Links */}
                  {activeSubDropdown === sub.title && (
                    <ul className={`pl-12 py-2  text-md text-left list-disc overflow-hidden transition-all duration-300
                    ${activeSubDropdown === sub.title ? 'animate-expand' : 'animate-contract'}`}>
                      {sub.links.map((link, linkIndex) => (
                        <li  key={linkIndex} className='my-2' ><Link to={link.path}>{link.type}</Link></li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
                
                </>
            )
              }
          </div>
        ))}
      </div>
    </div>
  )
}

export default DriveTraffic
