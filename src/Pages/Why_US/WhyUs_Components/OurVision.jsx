import React from 'react'

const OurVision = () => {
  return (
    <div className='w-full bg-[#EDF5FF]   px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center '>
      <h1 className='lg:text-[3rem] text-[2.5rem] font-[800]' id='headingHero'>
      Empowering Businesses Through <span className='text-[#207DE9]'>Our Vision</span>
        </h1>
        <p className='lg:text-xl text-lg font-normal  '>At Articized, we transform ideas into reality. Our mission is to revolutionize the digital landscape through cutting-edge solutions in SEO, PPC, AI, Web Development, App Development, Data Science, and Cyber Security.</p>


        <div className='w-full flex justify-center flex-col lg:flex-row gap-6 mt-20'>
            <div className='lg:w-1/2 w-full lg:items-start md:items-center  flex flex-col gap-10 '>
                <h1 className=' font-[800] lg:text-[63px] text-5xl leading-tight lg:text-left md:text-center text-left'>Pioneering a <span className='text-[#6ADFD7]'>Future Built</span> on Innovation</h1>
                <p className='text-left text-[18px]'>We envision a world where technology fuels growth, creativity, and endless possibilities. Our mission is to be the driving force behind your digital success, shaping a future where businesses thrive through innovation and expertise.</p>
            </div>

            <div className='lg:w-1/2 w-full h-full'>
                <div className='w-full  rounded-xl bg-slate-600 overflow-hidden'>
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurVision
