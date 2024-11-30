import React, {  useState } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { ContextAPI } from '../../../../GlobalProvider/ContextAPI';
import DropDownKey from '../../../../Prebuild_Components/DropDownKey';

const WhyComp = ({page}) => {
    const [showKeyIndex , setshowKeyIndex] = useState(null)
    const [showKey , setShowKey] = useState(null)

    const toggleShowKeyDetail = (idx) =>{
        
        setshowKeyIndex(showKeyIndex === idx ? null : idx)
    }

    

  return (
    <div className='w-full  px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center '>
        <h1 className='lg:text-[3rem] text-[2.5rem] font-[800]' id='headingHero'>{page.whyHeading}</h1>
        <p className='lg:text-xl text-lg font-normal  '>{page.whyPara}</p>

        <div className='w-full transition-all duration-1000 flex flex-col  gap-y-7'>
        {page?.whyKeys.map((item , idx) => (
            <div key={idx} className='relative hover:h-fit transition-all shadow-lg overflow-hidden' onMouseEnter={() => toggleShowKeyDetail(idx)} onMouseLeave={() => toggleShowKeyDetail(null)}>
            <div className={`w-full  z-50 rounded-2xl py-4 px-8 transition-all flex justify-between  ${idx === showKeyIndex && 'text-[#207DE9]'}`}>
                <h1 className='font-bold'>{item.heading}</h1>
                {item.icon}
            </div>
            {idx == showKeyIndex && (
                <p id='whyKey' className='transition-all duration-300 text-left rounded-b-3xl top-10 animate-expand text-white text-blue bg-blue-950 overflow-hidden py-7 px-4'>{item.explanation}
                </p>
            )}

            </div>
        ))}
        {/* {page?.whyKeys.map((item ,index) => (
            <DropDownKey
            key={index}
            {...item}
            />
        ) )} */}
        </div>      
    </div>
  )
}

export default WhyComp