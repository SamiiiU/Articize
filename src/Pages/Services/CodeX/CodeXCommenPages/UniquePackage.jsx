import React from 'react'
import { SiTicktick } from 'react-icons/si'
import CustomButton from '../../../../Prebuild_Components/CustomButton'

const UniquePackage = ({page}) => {
  return (
    <div className='w-full  px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center '>
        <h1 className='2xl:text-[3rem] text-[2.5rem] font-[800]'
        dangerouslySetInnerHTML={{
            __html: page.heading, // Render HTML string safely
          }}
        >
        </h1>



            <div style={{  boxShadow :  "" }} className={`md:w-3/4 w-full  max-w-4xl bg-white rounded-2xl relative flex sm:flex-row flex-col gap-x-4 transition-all duration-300`}>

                <div className='md:w-1/2 w-full p-6 bg-[#013a6e] rounded-l-xl flex flex-col justify-between'>
                    <h1 className='text-left text-white text-4xl font-bold' dangerouslySetInnerHTML={{__html : page.mainHeading}}></h1>

                    <CustomButton text={page.buttonText} className={"bg-white text-[#013a6e] font-semibold"}/>

                </div>

                <div className='md:w-1/2 w-full p-6'>
                    <h1 className='font-bold mb-4 text-xl text-left'>You Will Get</h1>

                    {page.youGet.map((include , index) => 
                    <div className='flex gap-x-4 text-left items-center mb-2' key={index}>
                    <SiTicktick  className='text-orange-500 text-sm'/>
                    <p className='flex-1 text-sm' dangerouslySetInnerHTML={{__html : include}}></p>
                    </div>
                )}
                </div>

              
            </div>

            
        </div>
  )
}

export default UniquePackage