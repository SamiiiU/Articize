import React, { useContext } from 'react'
import HomeData from '../../../Data/HomeData/HomeData'
import { ContextAPI } from '../../../GlobalProvider/ContextAPI'

const StrategyToScale = () => {

    const {scrwidth} = useContext(ContextAPI)
    
  return (
    <div className='w-full  px-4 sm:px-12 2xl:px-80 py-10 flex flex-col items-center text-center my-20'>
        <h1 className='lg:text-[3.5rem] text-[2.5rem] font-[800] uppercase tracking-wide mb-4 text-darkBlue'>One Powerful System <strong> — </strong>  Everything You Need.</h1>

        <p className='text-lg'>Ditch the patchwork approach — our bundled services combine AI, automation, and marketing into a seamless system. Scalable, efficient, and built for real growth — without the extra hassle.</p>

        {scrwidth > 1200 ? (
        <>
        {HomeData.provenProcess.map((item , index ) => (
            <div key={index} className='w-full flex my-8 items-center gap-10 flex-wrap mt-10'>
                {index % 2 == 0 ? (
                    <>
                    <div className='flex-1 text-left'>
                    <h1 className='font-semibold text-5xl  mb-4 text-darkBlue'>{item.heading}</h1>
                    <p className='mb-4'>{item.para}</p>

                    <h1 className='font-semibold text-xl  mb-4'>What Happens in This Step?</h1>
                    <ul className='list-item ml-6 list-disc mb-8 space-y-4  '>
                    {item.offers.map((offer , idx) => (
                        <li key={idx} dangerouslySetInnerHTML={{__html : offer}} />
                    ))}
                    </ul>              
 
                    <h1 className='font-semibold text-xl  mb-4'>Why This Matters?</h1>
                    <p>{item.matters}</p>



                    </div>
                    {item.image  && (
                        <div className='sm:w-[500px] sm:flex-1 h-full '>
                        <img src={item.image} alt={item.heading} className='w-full h-full'/>
                        </div>
                    )}
                    </>
                ) : (
                    <>
                    {item.image  && (
                        <div className='sm:w-[500px] sm:flex-1 h-full '>
                        <img src={item.image} alt={item.heading} className='w-full h-full'/>
                        </div>
                    )}

                    <div className='flex-1 text-left'>
                    <h1 className='font-semibold text-5xl  mb-4 text-darkBlue'>{item.heading}</h1>
                    <p className='mb-4'>{item.para}</p>

                    <h1 className='font-semibold text-xl  mb-4'>What We Offer?</h1>
                    <ul className='list-item ml-6 list-disc mb-8 space-y-4'>
                    {item.offers.map((offer , idx) => (
                        <li key={idx} dangerouslySetInnerHTML={{__html : offer}} />
                    ))}
                    </ul>

                    <h1 className='font-semibold text-xl  mb-4'>Why This Matters?</h1>
                    <p>{item.matters}</p>
                    </div>
                    
                    </>
                )}
            </div>
        ))}
        </>
      ) : (
        <div className='w-full flex flex-col gap-y-16'>
            {HomeData.provenProcess.map((item , index) => (
                <>
                    <div key={index} className='flex-1 text-left'>
                    <h1 className='font-semibold text-5xl  mb-4 text-darkBlue'>{item.heading}</h1>
                    <p className='mb-8'>{item.para}</p>

                    <h1 className='font-semibold text-xl  mb-4'>What We Offer?</h1>
                    <ul className='list-item ml-6 list-disc mb-8 space-y-4'>
                    {item.offers.map((offer , idx) => (
                        <li key={idx} dangerouslySetInnerHTML={{__html : offer}} />
                    ))}
                    </ul>              


                    </div> 
                    {item.image  && (
                        <div className='sm:w-[500px] sm:flex-1 h-full '>
                        <img src={item.image} alt={item.heading} className='w-full h-full'/>
                        </div>
                    )}
                </>
            )) }
        </div>
      )}
      <p className='font-bold inline w-fit mt-10 text-lg py-2 cursor-pointer text-white bg-lightBlue px-4 rounded'>
      Get Your Custom Strategy Call
            </p>
    </div>
  )
}

export default StrategyToScale