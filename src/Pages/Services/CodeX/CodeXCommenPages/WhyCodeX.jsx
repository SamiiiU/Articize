import React, {  useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion';

const WhyCodeX = ({page}) => {
    const [showKeyIndex , setshowKeyIndex] = useState(null)

    const toggleShowKeyDetail = (idx) =>{
        
        setshowKeyIndex(showKeyIndex === idx ? null : idx)
    }

    

  return (
    <div className='w-full bg-[#EDF5FF]  px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center '>
        <h1 className='lg:text-[3rem] text-[2.5rem] font-[800]' id='headingHero'
        dangerouslySetInnerHTML={{
            __html: page.heading, // Render HTML string safely
          }}
        >
        </h1>
        <p className='lg:text-xl text-lg font-normal  '>{page.para}</p>

        <div className='w-full transition-all flex flex-col  gap-y-7'>
        {page?.whyKeys.map((item , idx) => (
            <div key={idx} className='relative hover:h-fit rounded-2xl transition-all shadow-lg overflow-hidden' onMouseEnter={() => toggleShowKeyDetail(idx)} onMouseLeave={() => toggleShowKeyDetail(null)}>
            <div className={`w-full bg-white  z-50 rounded-t-2xl py-4 px-8 transition-all flex justify-between  ${idx === showKeyIndex && 'text-[#207DE9]'}`}>
                <h1 className='font-bold'>{item.heading}</h1>
                {item.icon}
            </div>
            <AnimatePresence>
            {idx == showKeyIndex && (
                    <motion.p
            initial={{ maxHeight: 0 , paddingTop: 0, paddingBottom: 0}}  // Start with height 0
            animate={{  maxHeight: '500px' , paddingTop: 16, paddingBottom: 16 }} // Expand to auto when state is true
            exit={{ maxHeight: 0 , paddingTop: 0, paddingBottom: 0}} // Smooth collapse on exit
            transition={{ duration: 0.5 , ease : 'easeIn'}} // Smooth transition
            id='whyKey'
            className='text-left rounded-b-3xl top-10 text-white text-blue bg-blue-950 overflow-hidden  px-4'
            >
            {item.explanation}
                     </motion.p>
            )}
            </AnimatePresence>  

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

export default WhyCodeX