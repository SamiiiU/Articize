import React from 'react'

const CTA = ({heading , para , cta}) => {
  return (
    <div className='w-full  px-4 sm:px-12 2xl:px-80 py-10 flex flex-col text-center my-20'>
        <h1 className='lg:text-[3.5rem] text-[2.5rem] font-[800] uppercase tracking-wide mb-4 text-darkBlue' dangerouslySetInnerHTML={{__html : heading}}/>
        

        <p className='text-lg' dangerouslySetInnerHTML={{__html : para}}/>

        <div className='flex w-full justify-center gap-10'>
          <p className='font-bold inline mt-10 text-lg py-2 cursor-pointer text-white bg-lightBlue px-4 rounded' dangerouslySetInnerHTML={{__html : cta}}/>
        </div>
    </div>
  )
}

export default CTA