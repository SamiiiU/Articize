import React, { useCallback, useContext, useEffect, useState } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { ContextAPI } from '../../../../GlobalProvider/ContextAPI';

const WhyComp = () => {
    const {serviceShow} = useContext(ContextAPI)
    const [showKeyDetail , setshowKeyDetail] = useState({
        value : 1,
        show : false
    });

    const toggleShowKeyDetail = (e) => {
        setshowKeyDetail(prevState => ({
            value: e || 0,
            show: prevState.show == true ? false : true
        }));

    }
    useEffect(() => {
        document.querySelector('#headingHero').innerHTML = serviceShow?.whyHeading
    }, [])

  return (
    <div className='w-full  px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center '>
        <h1 className='lg:text-[3rem] text-[2.5rem] font-[800]' id='headingHero'></h1>
        <p className='lg:text-xl text-lg font-normal text-[#0b1720] '>{serviceShow.whyPara}</p>

        <div className='w-full transition-all duration-1000 flex flex-col  gap-y-7'>
        {serviceShow?.whyKeys.map((item , idx) => (
            <div key={idx} className='relative hover:h-fit transition-all group shadow-lg overflow-hidden' onMouseEnter={() => toggleShowKeyDetail(idx)} onMouseLeave={toggleShowKeyDetail}>
            <div className='w-full group-hover:px-16 z-50 rounded-2xl py-4 px-8 transition-all flex justify-between '>
                <h1 className='font-bold'>{item.heading}</h1>
                {item.icon}
            </div>
            {idx == showKeyDetail.value && (
                <p  className='transition-all rounded-b-3xl top-10 animate-expand text-white text-blue bg-blue-950 overflow-hidden py-7 px-4'>{item.explanation}
                </p>
            )}

            </div>
        ))}
        </div>      
    </div>
  )
}

export default WhyComp