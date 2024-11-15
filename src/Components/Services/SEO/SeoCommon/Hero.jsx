import React, { useContext } from 'react'
import BG from '../../../../Assets/Images/CommonImages/HeroServices.png'
import heroIMG from '../../../../Assets/Images/ServicesIMG/EcommerceBG.png'
import { ContextAPI } from '../../../../GlobalProvider/ContextAPI'

const Hero = () => {
    const {serviceShow} = useContext(ContextAPI)
  return (
    <div className='w-full  bg-[#00316A] px-4 sm:px-16 md:px-28 2xl:px-48 
    sm:pt-56 pt-28 pb-10 flex justify-center  '
    style={{backgroundImage : `url(${BG})` , backgroundSize : 'cover' , backgroundPosition : 'center' }}>
        <div className='w-full flex justify-center flex-col lg:flex-row gap-10 text-black'>
            {/* Home text  */}
            <div className='lg:w-3/4 w-full lg:items-start md:items-center  flex flex-col gap-10 '>
                <h1 className=' font-[800] lg:text-[63px] text-5xl leading-none lg:text-left md:text-center text-left'>{serviceShow.heroHeading}</h1>
                <p className='text-[18px]'>{serviceShow.heroText}</p>

                <div className='md:rounded-lg flex md:flex-row flex-col sm:rounded-md gap-y-4 md:w-auto w-full overflow-hidden text-lg md:text-xl xl:text-2xl'>
                    <input type='text' placeholder='Enter Your Website ' className='text-black p-4 md:rounded-none rounded-md  outline-none'/>
                    <span className='p-4 font-bold cursor-pointer bg-[#207DE9] text-center rounded-md md:rounded-none text-white'> Send me proposal </span>
                </div>
            </div>

            {/* Home IMG  */}
            <div className='lg:w-1/2 w-full h-full  '>
                <div className='w-full h-[26rem] ' style={{backgroundImage : `url(${serviceShow.heroIMG})` , backgroundSize : 'contain' , backgroundPosition : 'center' , backgroundRepeat : 'no-repeat'}}/>

            </div>
        </div>
    </div>
  )
}

export default Hero