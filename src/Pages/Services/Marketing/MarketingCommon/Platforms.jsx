import React from 'react'

const Platforms = ({page}) => {

  return (
    <div className='w-full  px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center '>
    <h1 className='2xl:text-[3rem] text-[2.5rem] font-[800]' id='headingHero'
     dangerouslySetInnerHTML={{
         __html: page.heading, // Render HTML string safely
       }}
     >
     </h1>
     <p className='2xl:text-xl text-lg font-normal  ' dangerouslySetInnerHTML={{__html : page.para}}></p> 

     
     {page.platforms.map((platform , index) => (
        <div key={index} className=' w-full  flex flex-col sm:px-10 h-fit my-8 '>
            <h1 className='font-bold sm:text-3xl text-xl  rounded-t-xl py-2 mb-2 text-[#013a6e] sm:text-center text-left'>{platform.heading}</h1>

            <span className='w-full  my-4  py-2 rounded-xl flex lg:flex-row flex-col items-center gap-10'>
                    <div className='lg:w-1/2 w-full  text-left  text-lg font-semibold'>
                    {platform.items.map((company , idx ) => (  
                      <p className='my-2' key={idx}>{company.itemName}</p>
                    ))}
                    </div>
                    <div className='lg:min-w-1/2  w-full flex justify-center h-fit items-center ' >
                        {platform.items.map((image , idx) => (
                          <span key={idx} className={`rounded-full sm:overflow-hidden  flex justify-center items-center sm:p-6 bg-white border-[1px] border-[#313131]  md:w-32 md:h-32 w-20 h-20 ${idx % 2 == 0 ? 'translate-y-10' : ''}`}>
                              <span className='w-full h-full' style={{backgroundImage : `url(${image.itemImg})` , backgroundSize : 'contain', backgroundPosition : 'center' , backgroundRepeat : 'no-repeat'}}/>
                          </span>
                        ))}
                    </div>
                    
            </span>
        </div>
     )) }
     
     
     </div>
  )
}

export default Platforms