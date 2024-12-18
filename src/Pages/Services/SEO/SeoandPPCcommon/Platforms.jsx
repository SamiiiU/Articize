import React from 'react'

const Platforms = ({page}) => {

  return (
    <div className='w-full  px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center '>
    <h1 className='lg:text-[3rem] text-[2.5rem] font-[800]' id='headingHero'
     dangerouslySetInnerHTML={{
         __html: page.heading, // Render HTML string safely
       }}
     >
     </h1>
     <p className='lg:text-xl text-lg font-normal  ' dangerouslySetInnerHTML={{__html : page.para}}></p> 

     
     {page.platforms.map((platform , index) => (
        <div key={index} className='sm:w-3/4 w-full flex flex-col rounded-md justify-center sm:px-10 h-fit '>
            <h1 className='font-semibold text-xl  mb-2 text-[#013a6e]'>{platform.heading}</h1>
            {platform.items.map((company , idx ) => (
                <span key={idx} className='w-1/2 my-4 hover:bg-[#013a6e] hover:text-white px-4 py-2 rounded-xl flex justify-between items-center '>
                    <p className=''>{company.itemName}</p>
                    <img src={company.logo} alt={company.itemName} className='w-10 h-10'/>
                </span>
            ))}
        </div>
     )) }
     
     
     </div>
  )
}

export default Platforms