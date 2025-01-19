import React from 'react'
import chart from '../../../Assets/Images/HomeImages/solutionsChart.png'
const SolutionChart = () => {
    return (
        <div className='w-full  px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center '>


            <h1 className='lg:text-[3rem] text-[2.5rem] font-[800]'>Empower Your <span className='text-[#207CE7]'>Digital Journey
            </span> with Integrated Solutions </h1>

            <span className='w-full md:h-[80vh] h-[50vh]' style={{backgroundImage : `url(${chart})` , backgroundPosition : 'center' , backgroundSize : 'contain' , backgroundRepeat : 'no-repeat'}} />

        <p className='lg:text-xl text-lg font-normal text-left'>
        At DevXCloud, we bring together essential digital services — from web development to advanced data analytics — all on a single platform designed for efficiency and scalability. Simplify your operations with our comprehensive digital solutions.
        </p>
        </div>
    )
}

export default SolutionChart