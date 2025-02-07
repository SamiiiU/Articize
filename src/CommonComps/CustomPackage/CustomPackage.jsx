import React, { useContext, useState } from 'react'
import './CustomPackage.css'
import { SiTicktick } from 'react-icons/si'
import { ContextAPI } from '../../GlobalProvider/ContextAPI'
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import FeaturedPlayListRoundedIcon from '@mui/icons-material/FeaturedPlayListRounded';
import bgBox from '../../Assets/Images/ServicesIMG/BgBoxes.jpg'


const CustomPackage = ({page}) => {
    const [activeIndex ,setActiveIndex] = useState(null)
    const [activeHover , setActiveHover] = useState(false)
    
    const {scrwidth} = useContext(ContextAPI)
     

    const handleIndex = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }
  return (
    <div className='w-full relative text-[#313131] bg-white px-4 sm:px-16 md:px-28 2xl:px-80 py-20 flex flex-col gap-10 text-center items-center '>
        <span className='w-full z-0 opacity-40 h-full absolute top-0 bg-teal-500 ' style={{backgroundImage : `url(${bgBox})`}}></span>

          <div className='w-full z-10 max-w-[950px] '>
                <div onMouseEnter={() => setActiveHover(true)} onMouseLeave={() => setActiveHover(false)} className='w-full flex z-10 lg:flex-row shadow-2xl flex-col flex-wrap text-left  h-auto transition-all rounded-3xl bg-white ' style={{boxShadow: activeHover ? "0px 5px 10px rgba(0, 0, 0, 0.6)" : "0px 10px 20px rgba(0, 0, 0, 0.3)",}}>
                    {/* first col  */}
                    <div className='flex-1 z-10 flex flex-col justify-between lg:border-r-2 border-[#313131]/30'>
                        <span className='w-full min-h-40 rounded-tl-[1.3rem] lg:rounded-tr-none rounded-tr-3xl font-semibold bg-[#013a6e] text-2xl text-white text-center flex justify-center items-center px-10 py-8 relative'>
                            <h1 dangerouslySetInnerHTML={{__html : page.mainHeading}}/>
                            <span className="absolute -top-1/4 bg-white p-3 rounded-full " ><LocalMallRoundedIcon sx={{ color: '#207DE9' ,  fontSize: 40}}/></span>
                        </span> 

                        <span className='px-4 w-full '>
                            <h1 className='font-bold text-lg mt-5 leading-relaxed flex items-center gap-x-2'><EditNoteRoundedIcon sx={{ color: '#207DE9' ,  fontSize: 25}}/> OVERVIEW </h1>
                            <p>{page.overview}</p>

                            <h1 className='font-bold text-lg mt-5 leading-relaxed flex items-center gap-x-2'> <AutoGraphRoundedIcon sx={{ color: '#207DE9' ,  fontSize: 25}}/> BENIFITS</h1>
                            {page.benifits.map((benifit , index) => (
                                <div key={index} className='mb-8'>
                                    <h1 className='font-bold  '>{benifit.heading}</h1>
                                    <p >{benifit.description}</p>
                                </div>
                            ))}
                        </span>

                        <div className='w-full flex justify-center items-center my-10'>
                            <span className='px-8 py-2 rounded-xl cursor-pointer text-white bg-[#013a6e] text-lg font-semibold'>
                                Get Started
                            </span>
                        </div>

                    </div>

                    <div className='flex flex-1 z-10 flex-col justify-between lg:border-t-none lg:border-t-0 border-t-2 border-[#313131] min-h-full '>
                        <span className='px-4 w-full flex-1 py-8 z-10'>
                            <h1 className='font-bold text-lg mt-5 leading-relaxed flex items-center gap-x-2'> <FeaturedPlayListRoundedIcon sx={{ color: '#207DE9' ,  fontSize: 25}}/>Key Features</h1>

                            {page.keyFeatures.map((feature , index) => (
                                <div key={index} className=' flex my-6'>
                                    
                                        <h1 className='font-semibold min-w-fit flex items-center gap-x-2'>
                                        <SiTicktick  className='text-[#207DE9] text-sm'/>
                                        { scrwidth > 600 ? feature.heading + " : " : feature.heading }   
                                        </h1> 
                                        <div className='relative px-2'>
                                        {scrwidth > 600 && (
                                            activeIndex != index  ?
                                                (<span className='px-2 font-semibold text-lg ' onMouseEnter={() => handleIndex(index)} > ...</span> ) :
                                                <span onMouseLeave={() => handleIndex(null)} className='bubble bottom-4 bg-[#207DE9] text-white p-2 z-30 sm:min-w-[300px]  text-sm rounded-xl  absolute sm:left-0 -left-12' >
                                                    <p className='transition-all  animate-fadeIn'>{feature.description}</p>
                                                    <div className="tail absolute -bottom-4 w-10 h-5  bg-[#207DE9]"></div>
                                                </span> 
                                            
                                        )}   
                                        </div>
                                    
                                    
                                </div>
                            ))}
                        </span>
                        <span className='w-full z-10 rounded-br-3xl lg:rounded-bl-none rounded-bl-3xl flex-col bg-[#013a6e] text-white text-center flex justify-center items-center px-10 py-4'>
                            <p className=''>Starting At</p>
                            <h1 className='text-xl font-bold'>{page.startingAt}</h1>
                        </span> 
                    </div>

                </div>
          </div>

            
        </div>
  )
}

export default CustomPackage