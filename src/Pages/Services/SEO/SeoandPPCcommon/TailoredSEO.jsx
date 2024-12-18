import React, { useEffect, useState } from 'react'

export const TailoredSEO = ({page}) => {
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
    <h1 className='lg:text-[3rem] text-[2.5rem] font-[800]' id='headingHero'
     dangerouslySetInnerHTML={{
         __html: page.heading, // Render HTML string safely
       }}
     >
     </h1>
     <p className='lg:text-xl text-lg font-normal  ' dangerouslySetInnerHTML={{__html : page.para}}></p>

      {screenWidth > 640 && (
        <>
        {page.tailoredItems.map((item , index ) => (
            <div key={index} className='w-full flex my-8 items-center gap-10 flex-wrap '>
                {index % 2 == 0 ? (
                    <>
                    <div className='flex-1 text-left'>
                    <h1 className='font-semibold text-xl  mb-4 text-[#013a6e]'>{item.heading}</h1>
                    <p className='mb-8'>{item.para}</p>

                    <h1 className='font-semibold text-xl  mb-4'>What We Offer?</h1>
                    <ul className='list-item ml-6 list-disc mb-8'>
                    {item.offers.map((offer , idx) => (
                        <li key={idx} dangerouslySetInnerHTML={{__html : offer}} />
                    ))}
                    </ul>

                    <h1 className='font-semibold text-xl  mb-4'>Why Choose Us?</h1>    
                    <p>{item.chooseUs}</p>                


                    </div>
                    <div className='sm:w-[500px] sm:flex-1 h-full '>
                    <img src={item.image} alt={item.heading} className='w-full h-full'/>
                    </div>
                    </>
                ) : (
                    <>
                    <div className='sm:w-[500px] sm:flex-1 h-full bg-fuchsia-200'>
                    <img src={item.image} alt={item.heading} className='w-full h-full'/>
                    </div>

                    <div className='flex-1 text-left'>
                    <h1 className='font-semibold text-xl  mb-4 text-[#013a6e]'>{item.heading}</h1>
                    <p className='mb-8'>{item.para}</p>

                    <h1 className='font-semibold text-xl  mb-4'>What We Offer?</h1>
                    <ul className='list-item ml-6 list-disc mb-8'>
                    {item.offers.map((offer , idx) => (
                        <li key={idx} dangerouslySetInnerHTML={{__html : offer}} />
                    ))}
                    </ul>

                    <h1 className='font-semibold text-xl  mb-4'>Why Choose Us?</h1>    
                    <p>{item.chooseUs}</p>                


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
