import React, { useContext, useEffect, useRef, useState } from 'react'
import CustomSlider from '../../../../Prebuild_Components/CustomSlider/CustomSlider'
import { SiTicktick } from 'react-icons/si'
import ScrollCounter from '../../../../Prebuild_Components/ScrollCounter'
import { ContextAPI } from '../../../../GlobalProvider/ContextAPI'

const RealResults = ({page}) => {
  const refs = useRef([]); // to store refs to all container divs
  const [maxHeight, setMaxHeight] = useState(0);
  const { scrwidth } = useContext(ContextAPI) // state to store the maximum height

  // Attach ref dynamically and initialize it if it doesn't already exist
  const addToRefs = (el, index) => {
      if (el && !refs.current[index]) {
          refs.current[index] = el;
      }
  };

  useEffect(() => {
      // Calculate and set the maximum height after all components have rendered
      const heights = refs.current.map(ref => ref.clientHeight);
      const max = Math.max(...heights);
      setMaxHeight(max);
      console.log(maxHeight)
  }, [scrwidth]); 
  return (
    <div className='w-full  px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center '>
        <h1 className='2xl:text-[3rem] text-[2.5rem] font-[800]' id='headingHero'
        dangerouslySetInnerHTML={{
            __html: page.heading, // Render HTML string safely
          }}
        >
        </h1>
        <p className='2xl:text-xl text-lg font-normal  '>{page.para}</p>
          
        
        <div className="lg:w-3/4 w-full py-2 rounded-2xl mx-auto my-8">
    <CustomSlider  >
      {page.results.map((result, index) => (
        <div 
        ref={el => addToRefs(el, index)}
        style={{
          height: `${maxHeight}px`  // Apply calculated max height
        }}
        key={index} className=" overflow-hidden shadow-md  custom-scrollbar pt-20 pb-5 bg-white rounded-2xl text-left px-4 relative flex flex-col justify-between">
          {/* Client Heading */}
          <div className="p-4 sm:pr-10 absolute left-0 top-0 bg-[#207DE9] text-white rounded-br-full font-semibold">
            {result.header}
          </div>
          
          {/* Slide Content */}
          <>
          <h1 className="font-bold tracking-wide">CHALLENGE</h1>
          <p className="font-normal mb-4">{result.challenge}</p>
          </>
          
          <>
          <h1 className="font-bold tracking-wide">APPROACH</h1>
          {result.approaches.map((approach , idx) => (
            <div className='flex gap-x-4 items-center mb-2' key={idx}>
                <p>{approach}</p>
            </div>
          ))}
          </>

          <>
          <h1 className="mt-8 font-bold tracking-wide">RESULTS</h1>

          <h1 className=' text-3xl text-[#6ADFD7] font-bold flex'><ScrollCounter from={0} to={result.increase} timing={3}/>%</h1>
          <p className=''>{result.increaseIn}</p>
          </>
          
        </div>
      ))}
    </CustomSlider>
     </div>
    </div>
  )
}

export default RealResults
