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
import { AnimatePresence , motion } from 'framer-motion';


const Nav = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // const [scrwidth, setWidth] = useState(window.innerWidth); //state for windows width measuring
  const [isBigMenu, setIsBigMenu] = useState(false); // state for the navigation hover hanlde of bis screens
  const [isVisible, setIsVisible] = useState(false); // it is for scroll to top button



  const [currDataIndex, setCurrDataIndex] = useState(0)

  const { scrwidth } = useContext(ContextAPI);

  //handler for main screen navigation 
  const navHandler = (index , status ) => {
        setIsBigMenu(status == true ? false : true);
      
    
      setTimeout(() => {
        setIsBigMenu(status);
        setCurrDataIndex(index);
        
      }, 200);
    
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // User is scrolling down
        setIsNavbarVisible(false);
      } else {
        // User is scrolling up
        setIsNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);




  useEffect(() => {

    window.addEventListener('scroll', toggleVisibility);
    // Cleanup function to remove the event listener on unmount
    return () => {
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
      <span onClick={scrollToTop} className={`z-50 fixed sm:bottom-5 bottom-10 ${!isVisible && 'hidden opacity-100'} right-5 lg:text-5xl text-3xl transition-all text-white  bg-[#16316a] lg:p-2 cursor-pointer rounded-full  `}><FaArrowAltCircleUp /></span>

      {scrwidth > 1280 ? (
        <div  >
          <div className={`z-50 fixed w-full  transition-all ${isNavbarVisible ? 'translate-y-0' : '-translate-y-20'} shadow-lg bg-white `}>
            <div className='flex items-center py-3 px-4'>
              {/* Logo image started  */}
              <Link to="/" className='w-[8%] h-16  px-4  ' style={{ backgroundImage: `url(${logoIMG})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></Link>
              {/* Logo image done  */}
              <div className='w-full h-16  flex items-center 2xl:gap-x-4 mx-6'>

                {mainNavData.map((category, index) => (
                  <span >
                    <h1 key={index} onClick={() => navHandler(index, true )} className=' text-darkBlue cursor-pointer px-4 py-2  rounded-md   text-md font-semibold'>{category.navigator} </h1>
                  </span>
                ))}

              </div>

              <span className='font-bold min-w-fit text-lg py-2 cursor-pointer text-white bg-[#207DE9] px-4 rounded '>Get a proposal</span>

            </div>
            
            <AnimatePresence>

            {isBigMenu  && (
            <motion.div
              initial={{ opacity : 0}}  // Start with height 0
              animate={{ opacity : 1}} // Expand to auto when state is true
              exit={{ opacity : 0}} // Smooth collapse on exit
              transition={{ duration: 0.2 , ease : 'easeInOut'}} // Smooth transition
              className={`w-full  bg-darkBlue/50 h-screen  fixed z-40 2xl:px-40 px-4 pb-10   gap-8 `}
            >

              <div className='flex justify-between '>
                {mainNavData[currDataIndex].sections.map((pages, index) => (
                  <div onMouseLeave={() => navHandler(0 , false )} key={index} className={`flex-1  shadow-xl flex flex-col min-h-[70vh] 2xl:min-h-[50vh] h-full ${index < mainNavData[currDataIndex].sections.length - 1 && 'border-r-[1px] border-textColor/20' } bg-white py-4 px-4`} style={{ backgroundImage: `url('${pages?.IMG}')`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                    <h1 className='font-bold mb-3'>{pages.heading}</h1>
                    {pages.types?.map((stype, idx) => (

                      <>
                        <Link key={idx} onClick={() => setIsBigMenu(false)} to={stype.path}
                          className="flex items-center my-3 font-normal gap-x-3 cursor-pointer hover:text-[#1F85DE] transition-all group ">
                          <span className='text-sm'>{stype.type}</span>
                          <FaArrowRight size="0.8em" className='opacity-0 w-8 -translate-x-4 group-hover:translate-x-4 group-hover:opacity-100 transition-all' />
                        </Link>

                      </>
                    ))}

                  </div>
                ))}
              </div>

            </motion.div>)}
            </AnimatePresence>
          </div>



          

        </div >

      ) : (

        // Nav for small devices is started here 
        <>


          <MobNav />

        </>



      )}

    </>
  )
}

export default Nav