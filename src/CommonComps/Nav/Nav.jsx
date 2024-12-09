import React, { Fragment, useContext, useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { LuMenu } from "react-icons/lu";
import logoIMG from '../../Assets/Images/CommonImages/LogoMain.png'
import { FaArrowAltCircleUp, FaArrowCircleRight, FaArrowDown } from 'react-icons/fa';

import { mainNavData, NavigationData } from '../../Data/NavigationData';
import { ContextAPI } from '../../GlobalProvider/ContextAPI';
import { Link, useNavigate } from 'react-router-dom';
import MobNav from './MobNav';
import { FaArrowRight } from 'react-icons/fa6';


const Nav = () => {
    const navigate = useNavigate();
    const {states} = useContext(ContextAPI)
    const [scrwidth, setWidth] = useState(window.innerWidth); //state for windows width measuring
    const [isBigMenu , setIsBigMenu]  = useState(false); // state for the navigation hover hanlde of bis screens
    const [isSmallMenu , setIsSmallMenu] = useState(true)
    const [isVisible, setIsVisible] = useState(false); // it is for scroll to top button


    const [currDataIndex , setCurrDataIndex] = useState(0)// state for managing current nav data to show
    
    //handler for main screen navigation 
    const navHandler = (index) =>{
        setCurrDataIndex(index);
        setIsBigMenu(true);
    }

    const navCloserHandle = () => {
        let mainNav = document.querySelector('#big-menu')
        mainNav && mainNav.classList.add('opacity-0')
        setTimeout(() => {
          setIsBigMenu(false)
        }, 300);
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
    
    }, []);

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
    

      



    {/* main navigation for large devices is here started  */}
    {scrwidth > 1280 ? (
        <>
        <div  className='z-50 fixed w-full px-10  flex justify-between items-center shadow-sm text-white bg-white'>
          {/* Logo image started  */}
        <Link to="/" className='w-[10%] h-16  px-4  ' style={{backgroundImage : `url(${logoIMG})`, backgroundSize : 'contain' , backgroundPosition : 'center', backgroundRepeat : 'no-repeat'}}></Link>
        {/* Logo image done  */}
        <div className='w-[70%] 2xl:text-lg h-16   flex  justify-between text-[#313131] 2xl:gap-x-8 '>

            {mainNavData.map((category , index)=> (
              <span key={index} onMouseEnter={() => navHandler(index)} className='flex-1 group flex justify-start  items-center  hover:bg-[#EDF5FF] cursor-pointer px-4 rounded-md'>
              <h1 className='flex-1'>{category.navigator} </h1> <MdOutlineKeyboardArrowDown className='rotate-180 group-hover:rotate-[360deg] transition-all' size={25}/>
              </span>
            ))}

            <Link to='/why-us'  className='flex-1 group flex justify-start items-center hover:bg-[#EDF5FF] cursor-pointer px-4 rounded-md'>Why Choose Us</Link>
        </div>
        <span className='font-bold text-lg py-2 cursor-pointer bg-[#207DE9] px-4 rounded'>Get a proposal</span>

        </div>


        {isBigMenu && (
          <div key={currDataIndex} onMouseLeave={navCloserHandle}
      className={`w-full bg-[#EDF5FF] overflow-y-scroll min-h-screen transition-opacity transform-height duration-500  animate-expand fixed z-40 px-28 pb-10 pt-24 flex justify-between gap-8`}
      id='big-menu'>
        

        {mainNavData[currDataIndex].sections.map((pages , index) => (
          <div key={index} className='flex-1 shadow-xl rounded-lg flex flex-col bg-white py-4 px-4' style={{backgroundImage : `url('${pages?.IMG}')` , backgroundPosition : 'center' , backgroundSize: 'cover'}}>
          <h1 className='font-bold mb-3'>{pages.heading}</h1>
          {pages.types?.map((stype , idx) => (
            
            <>
            <Link key={idx} onClick={() => setIsBigMenu(false)} to={stype.path} 
            className="flex items-center my-1  gap-x-3 cursor-pointer hover:text-[#1F85DE] transition-all group ">
              <span className=''>{stype.type}</span> 
            <FaArrowRight size="0.8em" className='opacity-0 w-8 -translate-x-4 group-hover:translate-x-4 group-hover:opacity-100 transition-all'/>
            </Link>
            
            </>
          ))}
        </div>
        ))}

         </div>)}
        
        </>

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