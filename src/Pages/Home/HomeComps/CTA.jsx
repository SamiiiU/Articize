import React from 'react'

const CTA = () => {
  return (
    <div className='w-full  px-4 sm:px-12 2xl:px-80 py-10 flex flex-col text-center my-20'>
        <h1 className='lg:text-[3.5rem] text-[2.5rem] font-[800] uppercase tracking-wide mb-4 text-darkBlue'>Not Sure What You Need? <br/> Let’s Figure It Out Together.
        </h1>

        <p className='text-lg'>We’ll take a look at your business, break down what’s working <br/> what’s holding you back, and show you exactly how to scale <strong> — </strong> without wasted time or money.<br/> No fluff, no pressure <strong> — </strong> just a clear path to growth.
        </p>

        <div className='flex w-full justify-center gap-10'>
            <p className='font-bold inline mt-10 text-lg py-2 cursor-pointer text-white bg-lightBlue px-4 rounded'>
            Get My Custom Growth Plan
            </p>
                        
        </div>
    </div>
  )
}

export default CTA