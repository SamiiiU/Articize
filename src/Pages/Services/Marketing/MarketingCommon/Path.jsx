import React, { useContext, useEffect, useRef, useState } from 'react'
import { ContextAPI } from '../../../../GlobalProvider/ContextAPI';
import { patch } from '@mui/material';

const Path = ({ page }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleIndex = (index) => {
        setActiveIndex(index)
    }
    const divRef = useRef(null);  // Creating a ref
    const [mainHeight, setHeight] = useState(0);
    const { scrwidth } = useContext(ContextAPI) // State to store the height

    useEffect(() => {
        if (divRef.current) {
            setHeight(divRef.current.clientHeight);  // Set height after component mounts
        }
    }, []);
    return (
        <div className='w-full  px-4 sm:px-16 md:px-28 2xl:px-80 py-20 flex flex-col gap-10 text-center items-center '>
            <h1 className='2xl:text-[3rem] text-[2.5rem] font-[800]' id='headingHero'
                dangerouslySetInnerHTML={{
                    __html: page.heading, // Render HTML string safely
                }}
            >
            </h1>

            {scrwidth > 1000 ? (
                <div className='w-full  flex h-fit sm:gap-x-10 gap-x-3'>
                    <div ref={divRef} className='flex flex-col gap-4 ' >
                        {page.paths.map((path, index) => (
                            <span onClick={() => handleIndex(index)} key={index} className={` ${index == activeIndex ? 'bg-[#207DE9] text-white' : 'text-[#207DE9]'} rounded-full  cursor-pointer text-lg  w-14 h-14 flex justify-center items-center border-2 border-[#207DE9] font-bold`}>{path.letter}</span>
                        ))}
                    </div>
                    <div style={{ height: mainHeight }} className='flex-1 px-8 h-full flex flex-col justify-between relative text-left'>
                        <span>
                            <h1 className='font-semibold text-xl  mb-4  '>
                            { page.paths[activeIndex].heading || page.paths[activeIndex].focus}</h1>
                            <p className='mb-8'>{page.paths[activeIndex].matters || page.paths[activeIndex].focusOn }</p>
                        </span>

                        <span>
                                <h1 className='font-semibold text-xl  mb-4'>Why It Matters?</h1>
                            <ul className='list-item ml-6 list-disc mb-8'>
                                {page.paths[activeIndex].how.map((how, idx) => (
                                    <li key={idx} className='my-4' dangerouslySetInnerHTML={{ __html: how }} />
                                ))}
                            </ul>
                        </span>
                        <div className='w-full'>
                            <h1 className='font-semibold text-3xl text-orange-500'>OUTCOME</h1>
                            <p className='mt-3'>{page.paths[activeIndex].outcome}</p>
                        </div>

                    </div>
                </div>
            ) : (
                <div className='w-full flex flex-col gap-y-8 '>
                    {page.paths.map((path, idx) => (
                        <div key={idx} className=' p-4 flex flex-col justify-between relative text-left rounded-xl shadow-md'>
                            <h1 className='font-bold text-5xl text-blue-600'>{path.letter}</h1>
                            <span >
                                <h1 className='font-semibold text-xl  mb-4  '>{ path.heading || path.focus}</h1>
                                <p className='mb-8'>{ path.matters || path.focusOn}</p>
                            </span>

                            <span>
                                {<h1 className='font-semibold text-xl  mb-4'>Why It Matters?</h1>}
                                <ul className='list-item ml-6 list-disc mb-8'>
                                    {path.how.map((how, idx) => (
                                        <li key={idx} className='my-4' dangerouslySetInnerHTML={{ __html: how }} />
                                    ))}
                                </ul>
                            </span>
                            <div className='w-full'>
                                <h1 className='font-semibold text-xl text-orange-500'>OUTCOME</h1>
                                <p className='mt-3'>{path.outcome}</p>
                            </div>

                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Path