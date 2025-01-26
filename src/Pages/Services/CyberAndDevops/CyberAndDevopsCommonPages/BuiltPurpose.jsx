import React, { useEffect, useRef, useState } from 'react'

const BuiltPurpose = ({page}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [mainHeight, setHeight] = useState(0);  // State to store the height
    const divRef = useRef(null);  // Creating a ref


    
    const handleIndex = (index) => {
        setActiveIndex(index)
    } 
    
    useEffect(() => {
        if (divRef.current) {
            setHeight(divRef.current.clientHeight);  // Set height after component mounts
        }
    }, []);
    

  return (
    <div  className='w-full  px-4 sm:px-16 md:px-28 2xl:px-80 py-20 flex flex-col gap-10 text-center '> 


        <h1 className='2xl:text-[3rem] text-[2.5rem] font-[800]' id='headingHero'
                dangerouslySetInnerHTML={{
                    __html: page.heading, // Render HTML string safely
                }}
                >
                </h1>
                <p className='2xl:text-xl text-lg font-normal  '>{page.para}</p>
        {/* explanation section  */}
        <div  className='w-full  flex h-fit sm:gap-x-10 gap-x-3'>
        <div ref={divRef} className='flex flex-col gap-4 ' >
            {page.boostContent.map((power , index) => (
                <span onClick={() => handleIndex(index)} key={index} className={` ${index == activeIndex ? 'border-[#207DE9] text-[#207DE9] ' : 'text-[#313131]  border-gray-300'}  cursor-pointer  text-lg px-4 py-2 border-b-2 text-left  font-bold`}>{power.name}</span>
            ))}
        </div>
        <div style={{height : mainHeight , minHeight : 'fit'}} className='flex-1 px-8 h-full  flex flex-col justify-between relative text-left'>
            <span>
                <h1 className='font-semibold text-xl  mb-4 '>Why it Matters?</h1>
                <p className='mb-8'>{page.boostContent[activeIndex].whyMatters}</p>
            </span>

            <div className='w-full'>
                <h1 className='font-semibold text-xl  mb-4 '>What it Includes?</h1>
                {page.boostContent[activeIndex].includes.map((benifit , idx) => (
                    <div className='flex gap-x-4 text-left items-center mb-2' key={idx}>
                        <p className='flex-1 text-sm'>{benifit}</p>
                    </div>
                ))}
            </div>

            <span>
                <h1 className='font-semibold text-3xl text-orange-500'>Benifit</h1>
                <p className='mb-8'>{page.boostContent[activeIndex].benifit}</p>
            </span>

            

        </div>
     </div>


    </div>
  )
}

export default BuiltPurpose