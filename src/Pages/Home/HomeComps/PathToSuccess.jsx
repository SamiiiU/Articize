import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import HomeData from '../../../Data/HomeData/HomeData';


const PathToSuccess = () => {
  return (
    <div className='w-full  px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center '>
        <h1 className='lg:text-[3rem] text-[2.5rem] font-[800]'>How We Drive 
        <span className='text-[#207CE7]'> Digital Success</span></h1>
        <p className='lg:text-xl text-lg font-normal text-[#0b1720] '>By offering custom omnichannel marketing strategies, led by experts and backed by data, WebFX can help your business 
        hit your revenue goals. Stop juggling multiple agencies and start working with a top-rated agency that will drive results.</p>

        <div className='w-full text-left gap-8 justify-center items-center relative flex flex-wrap'>
            {/* path 1  */}
            {HomeData.pathToSuccess.map((offer , index) => (
            //     <div key={index} className='flex relative flex-wrap lg:text-xl text-lg py-8  xl:items-center gap-y-4 justify-start border-[#2080EA] border-b-2'>
            //     {/* heading  */}
            //     <h1 className='xl:flex-1 w-full text-left 2xl:text-center lg:text-2xl text-xl font-extrabold'>{offer.heading}</h1>

            //     {offer.points.map((points , idx) => (
            //         <div key={idx} className='sm:flex-1 w-full flex flex-col gap-y-4 font-medium  '>
                    
            //         <span className=' flex flex-row items-center hover:gap-x-8 transition-all duration-200  gap-x-4'>{points}< FaArrowRight /></span>
            //         </div>
            //     ))}

            // </div><
            <>
            <div key={index} className='sm:w-[30vw] xl:w-[20vw] min-h-[450px] w-full shadow-xl hover:bg-[#1F85DE] transition-all hover:text-white p-4 rounded-xl'>
                <div className='w-full rounded-xl relative h-32 overflow-hidden mb-4'>
                <img src={offer.IMG} alt={`${index + 1} Image`} className='w-full absolute rounded-xl  h-full'/>
                {/* <h1 className='absolute bottom-4 left-4 font-bold text-white'>{offer.heading}asdsa</h1> */}
                </div>

                <h1 className='font-bold text-lg mb-2 '>{offer.heading}</h1>
                {offer.points.map((point , idx) => (
                  <div key={idx} className='mb-4'>
                  <h1 className='mb-2 text-sm font-semibold'>{point.pointHeading}</h1>
                  <p className='text-sm'>{point.pointPara}</p>
                  </div>
                ))}
                

               </div>
            
            </>
            ))}



            
        </div>
    </div>
  )
}

export default PathToSuccess