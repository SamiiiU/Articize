import React from 'react'

const WhyNeedCyberAndDevops = ({page}) => {
  return (
    <div className='w-full  px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center '>
     <h1 className='2xl:text-[3rem] z-10 text-[2.5rem] font-[800]'  
        dangerouslySetInnerHTML={{
            __html: page.heading, 
          }}
        >
        </h1>

        <div className='w-full flex flex-wrap  '>
            {page.whyNeed.map((need , index) => (
                <div key={index} className='md:w-1/2 w-full p-6  text-left'>
                    <h1 className='font-bold text-2xl mb-4 '><span className='text-[#207DE9]'>{`0${index + 1} : `}</span> {need.header}</h1>
                    <p dangerouslySetInnerHTML={{__html : need.text}}></p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default WhyNeedCyberAndDevops