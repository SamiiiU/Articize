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
        <div key={index} className='sm:w-3/4 w-full  flex flex-col sm:px-10 h-fit '>
            <h1 className='font-bold text-4xl = rounded-t-xl py-2 mb-2 text-[#013a6e] '>{platform.heading}</h1>

            <span className='w-full  my-4  py-2 rounded-xl flex items-center gap-x-10'>
                    <div className='w-1/2  text-left  text-xl font-bold'>
                    {platform.items.map((company , idx ) => (  
                      <p className='my-2' key={idx}>{company.itemName}</p>
                    ))}
                    </div>
                    <div className='sm:w-1/2  w-full flex justify-center h-52 items-center' style={{backgroundImage : `url(${platform.image})` , backgroundSize : '80%', backgroundPosition : 'center' , backgroundRepeat : 'no-repeat'}}>
                    {/* <img src= alt="popular platform" className='w-full h-full'  /> */}
                    </div>
                    
            </span>
            
        </div>
     )) }
     
     
     </div>
  )
}

export default Platforms