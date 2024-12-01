import React from 'react'

const CTA = ({heading}) => {
  return (
    <div className='w-screen bg-[#21448f] gap-10 text-white flex md:flex-row flex-col justify-center items-center  px-4 sm:px-16 md:px-28 2xl:px-48 py-6'>
        <h1 className='font-bold text-5xl flex-1'>{heading}</h1>
        <div className='md:rounded-lg flex flex-1 flex-col sm:rounded-md gap-y-4 md:w-auto w-full overflow-hidden text-lg md:text-xl xl:text-2xl'>
                    <input type='text' placeholder='Enter Your Website ' className='text-black p-4  flex-1 rounded-md  outline-none'/>
                    <span className='p-4 font-bold cursor-pointer transition-all hover:bg-[#2b6ab1] bg-[#207DE9] text-center rounded-md '>Let’s Connect</span>
        </div>
    </div>
  )
}

export default CTA
