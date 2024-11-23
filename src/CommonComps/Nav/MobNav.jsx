import React, { useState } from 'react'
import { mobNavigationData} from '../../Data/NavigationData';

import logoIMG from '../../Assets/Images/CommonImages/LogoMain.png'
import { LuCross, LuMenu } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';



const MobNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [activeDropdown, setActiveDropdown] = useState(null); // Tracks main heading
  const [activeDropdownIndex, setActiveDropdownIndex] = useState(null); // Tracks main heading index
  
  const [activeSubDropdown, setActiveSubDropdown] = useState(null); // Tracks subheading
  const [activeSubDropdownIndex, setActiveSubDropdownIndex] = useState(null); // Track subheading index

  // Toggle menu visibility
  const toggleMenu = () => setMenuOpen(!menuOpen);

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
    <>
      
      {/* //This is nav bar  */}
        <div className='fixed text-[#313131] w-full z-50 px-4 py-2 flex justify-between items-center shadow-sm  bg-white'>
          <div className='w-36 h-[4rem] px-4 py-4 ' style={{backgroundImage : `url(${logoIMG})`, backgroundSize : 'cover' , backgroundPosition : 'center'}}> </div> 

          <span onClick={toggleMenu} className=' text-4xl text-right'>{menuOpen ? <RxCross2 /> :   <LuMenu/>}
        </span> 

        
        </div>

      {/* Navigation Menu */}
      <div
        className={`fixed z-40 text-[#313131] top-full left-0 w-full min-h-screen pt-20 bg-white shadow-lg transition-transform duration-300 ${
          menuOpen ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {mobNavigationData.map((main, index) => (
          <div key={index} className=" ">
            {/* Main Heading */}
            <h1 
              onClick={() => handleDropdownToggle(main.mainHeading , index)}
              className={`w-full ${index != 0 && ''} text-left px-8 flex justify-between items-center text-xl focus:border-0  py-4 font-bold focus:outline-none ${index === activeDropdownIndex && 'text-[#207DE9] border-[#313131] bg-[#f9fbff]' }`}>{main.mainHeading} <MdOutlineKeyboardArrowDown  className={`text-xl transition-all ${index === activeDropdownIndex ? 'rotate-0' : 'rotate-180'}`}/></h1>

            {/* Subheadings */}
            {activeDropdown === main.mainHeading &&
              main.subHeadings.map((sub, subIndex) => (
                <div key={subIndex} className="">
                  <div onClick={() => handleSubDropdownToggle(sub.title , subIndex)}
                    className={`w-full text-left  py-2 font-medium px-8  text-xl focus:outline-none flex justify-between items-center bg-[#f9fbff] gap-x-8 overflow-hidden transition-all duration-300
                    ${activeDropdown === main.mainHeading ? 'animate-expand' : 'animate-contract'}`}>
                        <p className={`flex-1 transition-all${subIndex === activeSubDropdownIndex && 'text-[#207DE9]'}`}>{sub.title}</p> <MdOutlineKeyboardArrowDown  className={`text-xl transition-all ${subIndex === activeSubDropdownIndex ? 'rotate-0' : 'rotate-180'}`}/>
                    </div>

                  {/* Links */}
                  {activeSubDropdown === sub.title && (
                    <ul className={`pl-12 py-2 bg-[#f9fbff] text-lg  list-disc overflow-hidden transition-all duration-300
                    ${activeSubDropdown === sub.title ? 'animate-expand' : 'animate-contract'}`}>
                      {sub.links.map((link, linkIndex) => (
                        <li  key={linkIndex} className='my-2' onClick={toggleMenu}><Link to={link.path}>{link.type}</Link></li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default MobNav;
