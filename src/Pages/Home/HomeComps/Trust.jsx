import React from 'react'
import HomeData from '../../../Data/HomeData/HomeData'

const Trust = () => {
    return (
        // Trust & Authority Section

        <div className='w-full  px-4 sm:px-12 2xl:px-80 py-10 flex flex-col text-center min-h-screen my-20'>
            <h1 className='lg:text-[3.5rem] text-[2.5rem] font-[800] uppercase tracking-wide mb-4 text-darkBlue'>Proven Systems <strong>—</strong> Real Businesses <br/> Real Growth</h1>

            <p className='text-lg'>No hype  No guesswork <strong>—</strong> Just real businesses scaling with proven systems <br/> See how we’ve helped companies streamline, automate, and grow <strong>—</strong> without wasting time or money.</p>

            <div className='w-full p-4 my-9 flex justify-center items-center gap-6'>
                {HomeData.trustSection.logos.map((logo , idx) => (
                    <span className='shadow-md flex justify-center items-center w-60  rounded-lg bg-white'>
                        <img src={logo} alt={`img${idx}`} className='w-32' />
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Trust
