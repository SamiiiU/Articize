import React, { useEffect, useState } from 'react'
import { SiTicktick } from 'react-icons/si';

const MakeBetter = ({page}) => {
    const [screenWidth , setScreenWidth] = useState(window.innerWidth)
        const handleResize = () => setScreenWidth(window.innerWidth);
    useEffect(() => {
        // Add event listener
        window.addEventListener('resize', handleResize);
        
        return () => {
          window.removeEventListener('resize', handleResize)
        }});
  return (
    <div className='w-full  px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center '>
    <h1 className='2xl:text-[3rem] text-[2.5rem] font-[800]' id='headingHero'
     dangerouslySetInnerHTML={{
         __html: page.heading, // Render HTML string safely
       }}
     >
     </h1>
     <p className='lg:text-xl text-lg font-normal  ' dangerouslySetInnerHTML={{__html : page.para}}></p>

      {screenWidth > 640 && (
        <>
        {page.makes.map((make , index ) => (
            <div key={index} className='w-full flex my-8 items-center gap-10 flex-wrap '>
                {index % 2 == 0 ? (
                    <>
                    <div className='flex-1 text-left'>
                    <h1 className='font-semibold text-xl  mb-4 text-[#013a6e]'>{make.heading}</h1>
                    

                    {make.offers.map((include , idx) => (
                        <div className='flex gap-x-4 text-left items-center mb-2' key={idx}>
                        <SiTicktick  className='text-orange-500 text-sm'/>
                        <p className='flex-1 text-sm' dangerouslySetInnerHTML={{__html : include}}></p>
                        </div>
                ))}
              

                    </div>
                    <div className='sm:w-[500px] sm:flex-1 h-full '>
                    <img src={make.image} alt={make.heading} className='w-full h-full'/>
                    </div>
                    </>
                ) : (
                    <>
                    <div className='sm:w-[500px] sm:flex-1 h-full '>
                    <img src={make.image} alt={make.heading} className='w-full h-full'/>
                    </div>

                    <div className='flex-1 text-left'>
                    <h1 className='font-semibold text-xl  mb-4 text-[#013a6e]'>{make.heading}</h1>
                    

                    {make.offers.map((include , idx) => (
                        <div className='flex gap-x-4 text-left items-center mb-2' key={idx}>
                        <SiTicktick  className='text-orange-500 text-sm'/>
                        <p className='flex-1 text-sm' dangerouslySetInnerHTML={{__html : include}}></p>
                        </div>
                ))}
              

                    </div>
                    
                    </>
                )}
            </div>
        ))}
        </>
      )}
     </div>
  )
}

export default MakeBetter