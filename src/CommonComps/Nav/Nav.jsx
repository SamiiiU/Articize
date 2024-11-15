import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { LuMenu } from "react-icons/lu";
import logoIMG from '../../Assets/Images/CommonImages/LogoMain.png'
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { useRef } from 'react';
import { mainNavData } from '../../Data/NavigationData';


const Nav = () => {
    const [scrwidth, setWidth] = useState(window.innerWidth); //state for windows width measuring
    const [isBigMenu , setIsBigMenu]  = useState(false); // state for the navigation hover hanlde of bis screens
    const [isSmallMenu , setIsSmallMenu] = useState(true)
    const [isVisible, setIsVisible] = useState(false); // it is for scroll to top button

    const [currData , setCurrData] = useState(mainNavData.SEOandPPC)// state for managing current nav data to show
    
    //handler for main screen navigation 
    const navHandler = (e) =>{
        
          setCurrData(mainNavData[e]);
          console.log("currData" , currData , "ele" , e);
          setIsBigMenu(true);
      
    }
    const navCloserHandle = () => {
        setIsBigMenu(false)
    }

    useEffect(() => {
    // Function to update the width and visibility of scroll to top button
    const handleResize = () => setWidth(window.innerWidth);
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    window.addEventListener('scroll', toggleVisibility);
    // Cleanup function to remove the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize)
       window.removeEventListener('scroll', toggleVisibility)
    };
    
    }, [currData]);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    // Scroll to top function
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };


  return (
    <>

    {/* button for scrolling to top  */}
    <span onClick={scrollToTop} className= {`z-50 fixed sm:bottom-5 bottom-1/2 ${!isVisible && 'hidden opacity-100'} right-5 lg:text-5xl text-3xl transition-all text-white  bg-[#16316a] lg:p-2 cursor-pointer rounded-full  `}><FaArrowAltCircleUp/></span>
    
    
    {/* services detailed navigation div starts here  */}
    {isBigMenu && (<div onMouseLeave={navCloserHandle}
      className={`w-full overflow-hidden transition-opacity transform-height duration-700 bg-white animate-expand fixed z-40 px-28 pb-10 pt-32 flex justify-between gap-8`}
      >
        {currData?.map((item , idx ) => (
          <div className='flex-1 rounded-lg bg-[#EDF5FF] p-8' key={idx}>
            <h1 className='font-bold text-xl '>{item.heading }</h1>
            {item.types?.map((stype , idx) => (
              <p className='font-semibold my-3 cursor-pointer hover:text-[#16316a]'>{stype}</p>
            ))}
          </div>
        ))}
        
        {/* {Object.entries(currData).map(([key , value]) =>  (
          
        ))} */}
        
    </div>)}




    {/* main navigation for large devices is here started  */}
    {scrwidth > 1280 ? (
        <div  className='z-50 fixed w-full px-10 py-2 flex justify-between items-center shadow-sm text-white bg-white'>
          {/* Logo image started  */}
        <div className='w-[10%] h-20  px-4 py-4 ' style={{backgroundImage : `url(${logoIMG})`, backgroundSize : 'cover' , backgroundPosition : 'center'}}></div>
        {/* Logo image done  */}
        <div className='w-[70%] 2xl:text-lg text-[1rem] font-semibold flex justify-between text-[#313131] 2xl:gap-x-8 py-4'>

            <span  onMouseEnter={() => navHandler('SEOandPPC')} className='flex-1 group flex justify-start items-center  hover:bg-[#EDF5FF] cursor-pointer px-4 rounded-md'>
              <h1 className='flex-1'>SEO </h1> <MdOutlineKeyboardArrowDown className='rotate-180 group-hover:rotate-[360deg] transition-all' size={25}/>
            </span>

            <span  onMouseEnter={() => navHandler("DevX")} className='flex-1 group flex justify-start items-center hover:bg-[#EDF5FF] cursor-pointer px-4 rounded-md'><h1 className='flex-1'>DevX </h1><MdOutlineKeyboardArrowDown className='rotate-180 group-hover:rotate-[360deg] transition-all' size={25}/></span>

            <span  onMouseEnter={() => navHandler("CSDEVOPS")} className='flex-1 group flex justify-start items-center  hover:bg-[#EDF5FF] cursor-pointer px-4 rounded-md'><h1 className='flex-1'>Cybersecurity & Devops</h1> <MdOutlineKeyboardArrowDown className='rotate-180 group-hover:rotate-[360deg] transition-all' size={25} /></span>

            <span onMouseEnter={() => navHandler('AIandDA')} className='flex-1 group flex justify-start items-center hover:bg-[#EDF5FF] cursor-pointer px-4 rounded-md'> <h1 className='flex-1'>AI Integration & Data Analysis</h1> <MdOutlineKeyboardArrowDown className='rotate-180 group-hover:rotate-[360deg] transition-all' size={25} /></span>

            <span  className='flex-1 group flex justify-start items-center hover:bg-[#EDF5FF] cursor-pointer px-4 rounded-md'><h1 className='flex-1'>Why Choose Us</h1> <MdOutlineKeyboardArrowDown className='rotate-180 group-hover:rotate-[360deg] transition-all' size={25} /></span>
        </div>
        <span className='font-bold text-lg bg-[#207DE9] p-4 rounded'>Get a proposal</span>

        </div>

    ) : (
      
        // Nav for small devices is started here 
        <div className='absolute w-full px-4 py-2 flex justify-between items-center shadow-sm  bg-white'>
          <div className='w-36 h-[4rem] px-4 py-4 ' style={{backgroundImage : `url(${logoIMG})`, backgroundSize : 'cover' , backgroundPosition : 'center'}}> </div> 

          <span className='  text-4xl text-right'><LuMenu/>
        </span> 

        
        </div>
        
    )}

        {/* <div className='z-50 absolute w-full min-h-screen bg-white/20'>

        </div> */}
    </>
  )
}

export default Nav