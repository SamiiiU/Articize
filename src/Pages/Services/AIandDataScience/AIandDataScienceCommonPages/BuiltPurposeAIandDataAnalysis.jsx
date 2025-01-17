import React, { useRef, useState } from 'react'
import CustomButton from '../../../../Prebuild_Components/CustomButton'
import { SiTicktick } from 'react-icons/si'

const BuiltPurposeAIandDataAnalysis = ({page}) => {
    const [activeIndex , setActiveIndex] = useState(null)
    const [activeFeature , setActiveFeature] = useState(null)
    const [isLearnMore , setIsLearnMore] = useState(false)
    const includesContainer = useRef() // correct syntax if wrong 

    const handleIndex = (index) => {
        setActiveIndex(index)
    }

    const handleActiveFeature = (index) => {
        setActiveFeature(index)
    }

    const handleLearnMore = () => {
        setIsLearnMore(true);
    
        if (includesContainer.current) {
            const offsetTop = includesContainer.current.offsetTop; // Get the top offset of the container
            const adjustment = 100; // Adjust this value to scroll slightly above
            window.scrollTo({
                top: offsetTop - adjustment,
                behavior: 'smooth',
            });
        }
    };
  return (
    <div  className='w-full  px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center '> 
            <h1 className='2xl:text-[3rem] text-[2.5rem] font-[800]' id='headingHero'
            dangerouslySetInnerHTML={{
                __html: page.heading, // Render HTML string safely
            }}
            >
            </h1>
            <p className='2xl:text-xl text-lg font-normal  '>{page.para}</p>

            <div className='w-full p-4 rounded-lg  transition-all h-fit'>
                <div className='w-full flex justify-center flex-wrap gap-10'>
                    {page.purposes.map((purpose , index) => (
                        <div key={index} onMouseEnter={() => handleIndex(index)} onMouseLeave={() => handleIndex(null)} className='xl:flex-1 xl:w-auto md:w-2/5 p-4 rounded-xl transition-all duration-300' style={{boxShadow : activeIndex === index ? "0px 5px 10px rgba(0, 0, 0, 0.2)" : "0px 10px 20px rgba(0, 0, 0, 0.1)"}}>
                            <img src={purpose.image} alt="" className='w-full h-40 bg-slate-400 rounded-xl' />
                            <h1 className='text-left font-bold my-4'>{purpose.header}</h1>
                            <p className='text-left'>{purpose.purpose}</p>
                        </div>
                    ))}
                </div>

                <div className='w-full flex justify-center py-8 items-center'>
                    <CustomButton 
                    onClick={() => handleLearnMore()} 
                    text={"Learn More"} className={"font-semibold text-white  text-2xl hover:bg-[#2045e9] bg-[#207DE9] "}/>
                </div>
                    {/* // this section is to be visible when scroll  */}
                <div ref={includesContainer} className='w-full origin-top  p-4 transition-all' style={{transform : `${isLearnMore ? 'scaleY(1)' : 'scaleY(0)'}` , height : `${isLearnMore ? 'auto' : '0'}`}}>
                    
                <h1 className='text-left font-bold my-4'>What We Offer?</h1>
                <p className='my-4 text-left' dangerouslySetInnerHTML={{__html : page.weOffer}}></p>
                
                <h1 className='text-left font-bold my-4'>{page.featureHeading}</h1>

                <div className='flex justify-evenly flex-wrap gap-4 w-full my-2' >
                {page.features.map((feature , idx) => (
                           <div onMouseEnter={() => handleActiveFeature(idx)} onMouseLeave={() => handleActiveFeature(null)} style={{backgroundColor : idx == activeFeature ? '#207DE9' : 'white', color :idx == activeFeature && 'white' , boxShadow : '0px 5px 10px rgba(0, 0, 0, 0.12)'}} className='sm:w-[350px] w-full rounded-xl text-left bg-slate-400 p-4 ' key={idx}>
                            <h1 className='text-left font-bold my-4'>{feature.header}</h1>

                            <p className='my-2 font-semibold'>Details</p>
                            <p className='mb-4'>{feature.details}</p>

                            <p className='my-2 font-semibold'>Use Case</p>
                            <p className='mb-4 '>{feature.useCase}</p>
                           </div>
                ))}
                </div>

                <h1 className='text-left font-bold my-4 mt-10'>How We Works?</h1>
                    {page.howWeWorks.map((how , idx) => (
                        <div className='flex gap-x-4 text-left items-center mb-2' key={idx}>
                        <SiTicktick className='text-orange-500 text-sm'/>
                        <p className='flex-1 text-sm' dangerouslySetInnerHTML={{__html : how}}></p>
                        </div>
                    ))}
                </div>

                
                
            </div>
    </div>
  )
}

export default BuiltPurposeAIandDataAnalysis
