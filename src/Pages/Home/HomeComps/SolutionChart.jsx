import React from 'react'
import chart from '../../../Assets/Images/HomeImages/solutionsChart.png'
const SolutionChart = () => {
    return (
        <div className='w-full  px-4 sm:px-12 2xl:px-80 py-10 flex flex-col text-center min-h-screen '>


            <h1 className='lg:text-[3.5rem] text-[2.5rem] font-[800] uppercase tracking-wide mb-4 text-darkBlue'>Built to Scale Without You </h1>

            <p className='text-lg'>You're not running a business <strong>—</strong> you're holding it together. Most businesses don't scale <strong>—</strong>  they survive.</p>

            <p className='text-lg'>Because they're built with agencies, tools, and systems duct-taped together <strong>—</strong> breaking every time you try to grow.</p>

            <p className='text-lg mt-9'>We build <strong> Growth Engines </strong> — all-in-one systems that automate, scale, and run without you.</p>
{/* 
            <span className='w-full  h-[50vh]' style={{backgroundImage : `url(${chart})` , backgroundPosition : 'center' , backgroundSize : 'contain' , backgroundRepeat : 'no-repeat'}} /> */}

        {/* <p className='lg:text-xl text-lg font-normal text-left'>
        At DevXCloud, we bring together essential digital services — from web development to advanced data analytics — all on a single platform designed for efficiency and scalability. Simplify your operations with our comprehensive digital solutions.
        </p> */}
        </div>
    )
}

export default SolutionChart