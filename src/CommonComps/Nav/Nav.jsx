import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { LuMenu } from "react-icons/lu";
import logoIMG from '../../Assets/Images/CommonImages/LogoMain.png'


const Nav = () => {
    const [scrwidth, setWidth] = useState(window.innerWidth);
    const [isOpenMenu , setIsOpenMenu]  = useState(false);

    useEffect(() => {
    // Function to update the width
    const handleResize = () => setWidth(window.innerWidth);

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
    }, []);


  return (
    <>
    {scrwidth > 1280 ? (
        <div className='z-40 absolute w-full px-10 py-2 flex justify-between items-center shadow-sm text-white bg-white'>
          {/* Logo image started  */}
        <div className='w-[10%] h-20  px-4 py-4 ' style={{backgroundImage : `url(${logoIMG})`, backgroundSize : 'cover' , backgroundPosition : 'center'}}></div>
        {/* Logo image done  */}
        <div className='w-[70%] 2xl:text-lg text-[1rem] font-semibold flex justify-between text-[#313131] 2xl:gap-x-8 py-4'>
            <span className='flex-1 flex justify-between items-center  hover:bg-black/10 px-4 rounded-md'>
                SEO  <MdOutlineKeyboardArrowDown size="1.5em"/>
            </span>
            <span className='flex-1 flex justify-between items-center hover:bg-black/10 px-4 rounded-md'>DevX <MdOutlineKeyboardArrowDown size="1.5em"/></span>
            <span className='flex-1 flex justify-between items-center  hover:bg-black/10 px-4 rounded-md'>Cybersecurity & Devops <MdOutlineKeyboardArrowDown size="1.5em" /></span>
            <span className='flex-1 flex justify-between items-center hover:bg-black/10 px-4 rounded-md'>AI Integration & Data Analysis <MdOutlineKeyboardArrowDown size="1.5em" /></span>
            <span className='flex-1 flex justify-between items-center hover:bg-black/10 px-4 rounded-md'>Why Choose Us <MdOutlineKeyboardArrowDown size="1.5em" /></span>
        </div>
        <span className='font-bold text-lg bg-[#207DE9] p-4 rounded'>Get a proposal</span>

        </div>
    ) : (
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