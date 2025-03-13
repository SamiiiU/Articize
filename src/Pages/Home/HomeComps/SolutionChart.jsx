import React, { useState } from 'react'
import chart from '../../../Assets/Images/HomeImages/solutionsChart.png'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import HomeData from '../../../Data/HomeData/HomeData';
import '../Home.css'

const SolutionChart = () => {
    const [activeIndex , setActiveIndex] = useState(0)
    const [mouseOverIndex , setMouseOverIndex] = useState(null)

    const handleIndex = (index) =>{
        setActiveIndex(index)
    }
    const handleMouseOver = (index) => {
        setMouseOverIndex(index != activeIndex ? index : null)
    }

    return (
        <div className='w-full  px-4 sm:px-12 2xl:px-80 py-10 flex flex-col text-center min-h-screen my-20'>


            <h1 className='lg:text-[3.5rem] text-[2.5rem] font-[800] uppercase tracking-wide mb-4 text-darkBlue'>Built to Scale Without You </h1>

            <p className='text-lg'>You're not running a business <strong>—</strong> you're holding it together. Most businesses don't scale <strong>—</strong>  they survive.</p>

            <p className='text-lg'>Because they're built with agencies, tools, and systems duct-taped together <strong>—</strong> breaking every time you try to grow.</p>

            <p className='text-lg my-9'>We build <strong> Growth Engines </strong> — all-in-one systems that automate, scale, and run without you.</p>

            <div className='w-full flex gap-20 justify-between  '>
                <div  className='min-w-[40%] flex flex-col gap-8'>
                {HomeData.builtToScale.map((item, idx) => (
                    <span 
                    onMouseEnter={() => handleMouseOver(idx)} 
                    onMouseLeave={() => handleMouseOver(null)}
                    onClick={() => handleIndex(idx)} key={idx} 

                    style={{
                        
                        color : activeIndex == idx ? '#0176d3' : '' , 
                        boxShadow: activeIndex == idx && "0px 0px 20px rgba(0, 0, 0, 0.2)" ,
                        }} className={`py-6 px-8 text-2xl rounded-xl items-center transition-all flex gap-x-4 ${idx == mouseOverIndex && 'hoverEffect'}`}>
                        <span>{item.icon}</span>
                        <h1 className=' font-semibold'>{item.heading}</h1>

                    </span>
                ))}
                </div>

                <div className='flex-1 p-6 rounded-xl bg-darkBlue text-white text-left relative'>
                    <h1 className='font-bold text-4xl '>{HomeData.builtToScale[activeIndex].heading}</h1>
                    <p className='mt-8 text-xl '>{HomeData.builtToScale[activeIndex].para}</p>

                    {/* <h1 className='w-full flex justify-center items-center' >
                        <img className='h-60' src={HomeData.builtToScale[activeIndex].image} alt="" />
                    </h1> */}


                        
                        <p className='font-bold absolute bottom-5 left-5 inline text-left  text-lg py-2 cursor-pointer text-white bg-greenButton px-4 rounded'>
                            Know More
                        </p>
                        

                </div>
            </div>
        </div>
    )
}

export default SolutionChart