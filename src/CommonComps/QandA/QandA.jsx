 import { AnimatePresence , motion} from 'framer-motion'
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
 
const QandA = ({page , para}) => {
    const [showKeyIndex , setshowKeyIndex] = useState(null)


    const toggleShowKeyDetail = (idx) =>{
        
        setshowKeyIndex(showKeyIndex === idx ? null : idx)
    }
    
   return (
     <div className='w-full  px-4 sm:px-16 md:px-28 2xl:px-48 py-10 flex flex-col gap-10 text-center items-center '>
        <h1 className='lg:text-[3rem] text-[2.5rem] font-[800]'>Frequently  Asked <span className='text-[#207CE7]'> Question  </span>and<span className='text-[#207CE7]'> Answers </span> </h1>
        <p className='lg:text-xl text-lg font-normal text-[#0b1720] '>{para || "See how Articize improves the KPIs that drive actual business growth"}</p>

        <div className='w-full transition-all flex flex-col  gap-y-7' >

        {page.map((item , idx) => (
            <div  key={idx} className='relative hover:h-fit transition-all shadow-lg overflow-hidden' >
            <div onMouseDown={() => toggleShowKeyDetail(idx)}  className={`w-full bg-white  z-50 rounded-2xl py-4 px-8 transition-all flex justify-between  '}`}>
                <h1 className='font-bold'>Q: {item.question}</h1>
                <MdOutlineKeyboardArrowDown style={{transform : idx == showKeyIndex ? 'rotateZ(180deg)' : ''} } className='transition-all text-3xl duration-300'  />
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
            {item.answer}
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
 

 export default QandA;