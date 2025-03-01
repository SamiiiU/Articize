import React, { Fragment, useContext, useEffect, useState } from 'react'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
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



  const [currDataIndex, setCurrDataIndex] = useState(null)

  const { scrwidth } = useContext(ContextAPI);

  //handler for main screen navigation 
  const navHandler = (index , status ) => {
        setIsBigMenu(status == true ? false : true);
      
    
      if(index-1 != currDataIndex){
        setTimeout(() => {
        setIsBigMenu(status);
        setCurrDataIndex(index-1);
        
      }, 200);
      }else{
        setCurrDataIndex(null)
      } 
      
    
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
          <div className={`z-50 fixed w-full  transition-all duration-500  bg-white `}>
            <div className='flex items-center py-2 px-4'>
              {/* Logo image started  */}
              <Link to="/" className='w-[7%] h-16  px-4  ' style={{ backgroundImage: `url(${logoIMG})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}/>
              {/* Logo image done  */}
              <div className='w-full h-16  flex items-center 2xl:gap-x-4 mx-10'>

                {mainNavData.map((category, index) => (
                  <span >
                    <h1 key={index} onClick={() => navHandler(category.idx, true )} className={
                      ` text-darkBlue cursor-pointer flex items-center gap-x-3 px-8 py-2  rounded-md hover:text-lightBlue  text-md font-[700] ${category.idx-1  == currDataIndex && ' text-lightBlue' }`
                    }>
                      {category.navigator} 
                      <ArrowBackIosRoundedIcon className={`-rotate-90 text-sm transition-all duration-200  ${category.idx-1  == currDataIndex && 'rotate-90' }`} sx={{ fontSize: 11 }}/> 

                    </h1>
                  </span>
                ))}

              </div>

              <span className='font-bold min-w-fit text-lg py-2 cursor-pointer text-white bg-greenButton px-4 rounded '>Get a proposal</span>

            </div>
            
            <AnimatePresence>
            {/* // ${index < mainNavData[currDataIndex].sections.length - 1 && 'border-r-[1px] border-textColor/20' } */}
            {isBigMenu  && (
            <motion.div
              initial={{ opacity : 0}}  // Start with height 0
              animate={{ opacity : 1}} // Expand to auto when state is true
              exit={{ opacity : 0}} // Smooth collapse on exit
              transition={{ duration: 0.2 , ease : 'easeInOut'}} // Smooth transition
              className={`w-full  bg-darkBlue/50 h-screen  fixed z-40 2xl:px-96 px-4 pb-10   gap-8 `}
            >

              <div className='grid grid-cols-2 grid-rows-2 p-10 bg-white gap-6' onMouseLeave={() => navHandler(0 , false )}>
                {mainNavData[currDataIndex].sections.map((pages, index) => (
                  <div  key={index} className={`min-w-[40%] col-span-1 hover:bg-[#0077B6]/10 rounded-md max-w-1/2  flex flex-col  2xl:min-h-52   py-4 px-4
                    
                  `} style={{ backgroundImage: `url('${pages?.IMG}')`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                    <h1 className='font-bold mb-3 text-xl flex gap-x-4'>{pages.heading} {pages.icon}</h1>
                    {pages.types?.map((stype, idx) => (

                      <>
                        <Link key={idx} onClick={() => setIsBigMenu(false)} to={stype.path}
                          className="flex items-center  font-normal gap-x-3 cursor-pointer hover:text-[#1F85DE]  transition-all group ">
                          <span className='text-md '>{stype.type}</span>
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