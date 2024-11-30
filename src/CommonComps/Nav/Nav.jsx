import React, { Fragment, useContext, useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { LuMenu } from "react-icons/lu";
import logoIMG from '../../Assets/Images/CommonImages/LogoMain.png'
import { FaArrowAltCircleUp, FaArrowDown } from 'react-icons/fa';

import { mainNavData, NavigationData } from '../../Data/NavigationData';
import { ContextAPI } from '../../GlobalProvider/ContextAPI';
import { Link, useNavigate } from 'react-router-dom';
import MobNav from './MobNav';


const Nav = () => {
    const navigate = useNavigate();
    const {states} = useContext(ContextAPI)
    const [scrwidth, setWidth] = useState(window.innerWidth); //state for windows width measuring
    const [isBigMenu , setIsBigMenu]  = useState(false); // state for the navigation hover hanlde of bis screens
    const [isSmallMenu , setIsSmallMenu] = useState(true)
    const [isVisible, setIsVisible] = useState(false); // it is for scroll to top button
    const [navPath , setNavPath] = useState('/')

    const [currData , setCurrData] = useState(mainNavData.SEOandPPC)// state for managing current nav data to show
    
    //handler for main screen navigation 
    const navHandler = (e) =>{
        setCurrData(mainNavData[e]);
        setIsBigMenu(true);
    }
    const navCloserHandle = () => {
        let mainNav = document.querySelector('#big-menu')
        mainNav && mainNav.classList.add('opacity-0')
        setTimeout(() => {
          setIsBigMenu(false)
        }, 300);
    }
    //navigation handler 
    const navigator = (e) => {
       setNavPath(e)
       setTimeout(() => {
        navigate(navPath)
       } , 1000)
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
      className={`w-full bg-[#EDF5FF]  overflow-hidden transition-opacity transform-height duration-500 overflow-y-scroll animate-expand fixed z-40 px-28 pb-10 pt-32 flex justify-between gap-8`}
      id='big-menu'>
        {currData?.map((item , idx ) => (
          <div className='flex-1 rounded-lg flex flex-col bg-white p-8' key={idx}>
            <h1 className='font-bold text-xl '>{item.heading }</h1>
            {item.types?.map((stype , index) => (
              
              <Link onClick={() => setIsBigMenu(false)} to={stype.path} className="w-full font-semibold my-3 cursor-pointer hover:text-[#16316a]" key={index}>{stype.type}</Link>
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
        <Link to="/" className='w-[10%] h-20  px-4 py-4 ' style={{backgroundImage : `url(${logoIMG})`, backgroundSize : 'contain' , backgroundPosition : 'center', backgroundRepeat : 'no-repeat'}}></Link>
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
        <>
        

        {/* THis is navigation  */}
        {/* <div className='w-full fixed min-h-scree pt-20 flex flex-col  bg-teal-200'>
          <div className='w-full bg-white group'>
            <h1 className='p-4 font-bold border-y-2 border-black text-black text-4xl py-4'>SEO & PPC</h1>

            <div className='w-full px-6  py-2 text-2xl font-semibold max-h-0 group-hover:max-h-fit'>
                <h1 className='py-4 flex gap-x-2 items-center'>SEO <FaArrowDown className='rotate-[-90deg]'/></h1>
                {NavigationData.SEO.map((item, idx) => (
                  <div className="" key={idx}>
                    <p className='pl-8'>{item}</p>
                  </div>
                ))}
            </div>

          </div>
          <div className='w-full p-4 font-bold border-y-2 border-black bg-white text-black text-4xl py-8'>
            sdadsa

          </div>
          <div className='w-full p-4 font-bold border-y-2 border-black bg-white text-black text-4xl py-8'>
            sdadsa

          </div>

        </div> */}

        <MobNav/>

        </>


        
    )}

    </>
  )
}

export default Nav