import React from 'react'
import HomeData from '../../../Data/HomeData/HomeData'
import { BsFacebook, BsLinkedin, BsTwitterX } from "react-icons/bs";

import { Link } from 'react-router-dom';

const Trust = () => {
    return (
        // Trust & Authority Section

        <div className='w-full  px-4 sm:px-12 2xl:px-80 py-10 flex flex-col text-center my-20'>
            <h1 className='lg:text-[3.5rem] text-[2.5rem] font-[800] uppercase tracking-wide mb-4 text-darkBlue'>Proven Systems <strong>—</strong> Real Businesses <br/> Real Growth</h1>

            <p className='text-lg'>No hype  No guesswork <strong>—</strong> Just real businesses scaling with proven systems <br/> See how we’ve helped companies streamline, automate, and grow <strong>—</strong> without wasting time or money.</p>

            <div className='w-full p-4 my-9 flex justify-center items-center gap-6'>
                {HomeData.trustSection.logos.map((logo , idx) => (
                    <span className='shadow-md flex justify-center items-center w-60  rounded-lg bg-white'>
                        <div  className='w-32 h-24' style={{backgroundImage : `url(${logo})`, backgroundSize : 'contain' , backgroundPosition : 'center' , backgroundRepeat : 'no-repeat'}} />
                    </span>
                ))}
            </div>

            <div className='w-full grid grid-cols-3 gap-8 '>
                {HomeData.trustSection.cards.map((card , idx) => (
                    <div key={idx} className='col-span-1 bg-white shadow-md pb-10'>
                        <div className="w-full flex justify-center items-center py-12 relative overflow-hidden "
                            style={{backgroundColor : card.colorbg}}    
                        >   
                            {/* bgOver  */}
                            <span className='absolute w-full h-[140%] rounded-full translate-y-1/2 z-0 '
                            style={{backgroundColor : card.colorOver}}/>

                            
                            <span className='px-6  rounded-full bg-white z-10'>
                                <img src={card.logo} alt={idx+1} className='w-32'/>
                            </span>
                        </div>

                        <h1 className=' text-lg text-left p-4'>
                            {card.heading}
                        </h1>

                        
                        <img src={card.logo} alt={idx+1} className='w-32 h-96 bg-slate-300 mx-4 mt-40'/>

                        <div className='w-full flex p-4 gap-x-4'>
                            <Link to={card.socialTags.fb} className=' text-3xl w-8 flex justify-center items-center p-1 h-8  rounded bg-gray-600 text-white'>
                                <BsFacebook/>
                            </Link>

                            <Link to={card.socialTags.twitter} className=' text-3xl w-8 flex justify-center items-center p-1 h-8  rounded bg-gray-600 text-white'>
                                <BsTwitterX/>
                            </Link>

                            <Link to={card.socialTags.linkedin} className=' text-3xl w-8 flex justify-center items-center p-1 h-8  rounded bg-gray-600 text-white'>
                                <BsLinkedin/>
                            </Link>

                        </div>

                        
                        <p className='p-4 text-left '>{card.tags} </p>

                        <p className='text-blue-400 text-left w-full uppercase p-4 underline underline-offset-2 cursor-pointer'>See the story</p>

                         



                    </div>
                ))}
            </div>
        </div>
    )
}

export default Trust
