import React, { useContext, useEffect } from 'react'


const HeroCodeX = ({page}) => {

  return (
    <div className='w-full xl:min-h-[80vh] bg-[#00316A] px-4 sm:px-16 md:px-28 2xl:px-48 
    sm:pt-40 pt-28 pb-28 flex justify-center  '
    style={{backgroundImage : `url(${page.bg})` , backgroundSize : 'cover' , backgroundPosition : 'center' }}>
        <div className='w-full flex justify-center flex-col lg:flex-row gap-10'>
            {/* Home text  */}
            <div className='lg:w-3/4 w-full lg:items-start md:items-center  flex flex-col gap-10 '>
                <h1 className=' font-[800] 2xl:text-[63px] text-5xl leading-none lg:text-left md:text-center text-left'>{page.heading}</h1>
                <p className='text-[18px]'>{page.para}</p>

                <div className='md:rounded-lg flex md:flex-row flex-col sm:rounded-md gap-y-4 md:w-auto w-full overflow-hidden text-lg md:text-xl '>
                    <input type='text' placeholder='Enter Your Website ' className=' p-4 md:rounded-none rounded-md  outline-none'/>
                    <span className='p-4 font-bold cursor-pointer bg-[#207DE9] text-center rounded-md md:rounded-none text-white'> Send me proposal </span>
                </div>
            </div>

            {/* Home IMG  */}
            <div className='lg:w-1/2 w-full h-full  '>
                <div className='w-full h-[26rem] ' style={{backgroundImage : `url(${page.img})` , backgroundSize : 'contain' , backgroundPosition : 'center' , backgroundRepeat : 'no-repeat'}}/>
            </div>
        </div>
    </div>
  )
}

export default HeroCodeX