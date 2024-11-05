import React from 'react'
import logo from '../../Assets/Images/CommonImages/LogoMain.png'
import { NavigationData } from '../../Data/NavigationData'
import { FaArrowCircleRight } from 'react-icons/fa'
import { FaArrowRight, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='w-full bg-[#0B1720] transition-all duration-1000 text-white px-4 sm:px-16 md:px-28 2xl:px-48 pt-10  '>
        {/* first row start here  */}
        <div className='w-full flex mb-10 md:flex-row flex-col gap-y-10 justify-center items-center'>
                {/* logo and CTA section  */}
                <div className='flex-1 md:pr-10 md:border-r-4  border-white'>
                    <div className='w-40 h-20 ' style={{backgroundImage : `url("${logo}")` , backgroundSize : 'cover' , backgroundPosition : 'center'}}/>
                    <p>Articized is your creative digital agency, transforming ideas into impactful digital solutions. From innovative web designs to targeted marketing strategies, we bring your brand to life online</p>   
                    <div className='w-full my-3 flex gap-4 items-center'>
                        <a href='https://www.facebook.com/people/Sami-Ullah/pfbid02QV5wHapuS94V3qYW42n5a6ZPQmJK6WsqZa7MLDyk7sxfw6UKF7csVez2TfXnkyfEl/' target='_blank' className='hover:text-[#0760C3]'><FaFacebook size={30}/></a>
                        <a href='https://www.instagram.com/articize_agency/?igsh=b2JsNHk0NTBhOHc5' target='_blank' className='hover:text-[#0760C3]'><FaInstagram size={30}/></a>
                        <a href='https://pk.linkedin.com/in/syed-anshal-ali-358154306' target='_blank' className='hover:text-[#0760C3]'><FaLinkedin size={30}/></a>
                    </div>           
                </div>
                {/* CTA card herer started  */}
                <div className='flex-1 md:pl-10'>
                    <div className='w-full rounded-3xl flex-col flex gap-y-3 z-0  items-center overflow-hidden py-4 px-12  bg-[#CCE4FF] relative '>
                        <span className='absolute z-10 w-[110%] -top-1/2 h-full rounded-[50%] bg-[#0760C3]'/>
                        {/* heading */}
                        <h1 className='font-medium z-20 text-lg'> Ready to elevate your digital presence? Contact us today!</h1>

                        <input type='text' placeholder='Enter your gmail' className='text-black  z-20 p-4 w-full rounded-md  outline-none'/>

                        <span className='p-4 font-bold cursor-pointer transition-all hover:bg-[#2b6ab1] bg-[#207DE9] text-center rounded-md '>Let’s Connect</span>
                </div>
            {/* CTA here ended */}
            </div>
        </div>


        {/* Second row : services section here */}
        <div className='w-full flex gap-y-5 items-start flex-wrap gap-x-5'>
            {/* Service 1 */}
            <div className='lg:flex-1 min-w-48'>
               <h1 className='font-bold mb-5 text-3xl'> SEO & PPC</h1>
               {/* category 1  */}
               <div className='transition-all group'>
               <h2 className='cursor-pointer py-2 flex items-center gap-x-2 hover:gap-x-4 transition-all duration-200'>SEARCH ENGINE OPTIMIZATION <FaArrowRight/></h2>
               <ul className='transition-all duration-1000 group-hover:max-h-fit group-hover:opacity-100 opacity-0 max-h-0 translate-x-3 text-left ease-in-out overflow-hidden'>
                    {NavigationData.SEO.map((item , idx) => (
                        <li className='cursor-pointer hover:text-[#3161c3]' key={idx}>{item}</li>
                    ))}

               </ul>
               </div>

                {/* category 2  */}
                <div className='transition-all group'>
               <h2 className='cursor-pointer py-2 flex items-center gap-x-2 hover:gap-x-4 transition-all duration-200'>PAY PER CLICK <FaArrowRight/></h2>
               <ul className='transition-all duration-1000 group-hover:max-h-fit group-hover:opacity-100 opacity-0 max-h-0 translate-x-3 text-left ease-in-out overflow-hidden'>
                    {NavigationData.PPC.map((item , idx) => (
                        <li className='cursor-pointer hover:text-[#3161c3]' key={idx}>{item}</li>
                    ))}

               </ul>
               </div>

                {/* category 3  */}
                <div className='transition-all group'>
               <h2 className='cursor-pointer py-2 flex items-center gap-x-2 hover:gap-x-4 transition-all duration-200'>SOCIAL MEDIA ADVERTISING <FaArrowRight/></h2>
               <ul className='transition-all duration-1000 group-hover:max-h-fit group-hover:opacity-100 opacity-0 max-h-0 translate-x-3 text-left ease-in-out overflow-hidden'>
                    {NavigationData.SMA.map((item , idx) => (
                        <li className='cursor-pointer hover:text-[#3161c3]' key={idx}>{item}</li>
                    ))}

               </ul>
               </div>
            </div>

            {/* Service 2 */}
            <div className='lg:flex-1 min-w-48'>
               <h1 className='font-bold mb-5 text-3xl'>DevX</h1>
               {/* category 1  */}
               <div className='transition-all group'>
               <h2 className='cursor-pointer py-2 flex  items-center gap-x-2 hover:gap-x-4 transition-all duration-200'>DESIGN <FaArrowRight/></h2>
               <ul className='transition-all duration-1000 group-hover:max-h-fit group-hover:opacity-100 opacity-0 max-h-0 translate-x-3 text-left ease-in-out overflow-hidden'>
                    {NavigationData.design.map((item , idx) => (
                        <li className='cursor-pointer hover:text-[#3161c3]' key={idx}>{item}</li>
                    ))}

               </ul>
               </div>

                {/* category 2  */}
                <div className='transition-all group'>
               <h2 className='cursor-pointer py-2 flex items-center gap-x-2 hover:gap-x-4 transition-all duration-200'>DEVELOPMENT <FaArrowRight/></h2>
               <ul className='transition-all duration-1000 group-hover:max-h-fit group-hover:opacity-100 opacity-0 max-h-0 translate-x-3 text-left ease-in-out overflow-hidden'>
                    {NavigationData.developement.map((item , idx) => (
                        <li className='cursor-pointer hover:text-[#3161c3]' key={idx}>{item}</li>
                    ))}

               </ul>
               </div>

                {/* category 3  */}
                <div className='transition-all group'>
               <h2 className='cursor-pointer py-2 flex items-center gap-x-2 hover:gap-x-4 transition-all duration-200'>MAINTENANCE & UPDATES <FaArrowRight/></h2>
               <ul className='transition-all duration-1000 group-hover:max-h-fit group-hover:opacity-100 opacity-0 max-h-0 translate-x-3 text-left ease-in-out overflow-hidden'>
                    {NavigationData.MandU.map((item , idx) => (
                        <li className='cursor-pointer hover:text-[#3161c3]' key={idx}>{item}</li>
                    ))}

               </ul>
               </div>
            </div>

            {/* Service 3 */}
            <div className='lg:flex-1 min-w-48 '>
               <h1 className='font-bold mb-5 text-3xl'> CYBERSECURITY & DEVOPS</h1>
               {/* category 1  */}
               <div className='transition-all group'>
               <h2 className='cursor-pointer py-2 flex items-center gap-x-2 hover:gap-x-4 transition-all duration-200'>CYBERSECURITY <FaArrowRight/></h2>
               <ul className='transition-all duration-1000 group-hover:max-h-fit group-hover:opacity-100 opacity-0 max-h-0 translate-x-3 text-left ease-in-out overflow-hidden'>
                    {NavigationData.cyberSecurity.map((item , idx) => (
                        <li className='cursor-pointer hover:text-[#3161c3]' key={idx}>{item}</li>
                    ))}

               </ul>
               </div>

                {/* category 2  */}
                <div className='transition-all group'>
               <h2 className='cursor-pointer py-2 flex  items-center gap-x-2 hover:gap-x-4 transition-all duration-200'>DEVOPS <FaArrowRight/></h2>
               <ul className='transition-all duration-1000 group-hover:max-h-fit group-hover:opacity-100 opacity-0 max-h-0 translate-x-3 text-left ease-in-out overflow-hidden'>
                    {NavigationData.devOps.map((item , idx) => (
                        <li className='cursor-pointer hover:text-[#3161c3]' key={idx}>{item}</li>
                    ))}

               </ul>
               </div>

            </div>

            {/* Service 4 */}
            <div className='lg:flex-1 min-w-48'>
               <h1 className='font-bold mb-5 text-3xl'> AI INTEGRATION & DATA ANALYSIS</h1>
               {/* category 1  */}
               <div className='transition-all group'>
               <h2 className='cursor-pointer py-2 flex  items-center gap-x-2 hover:gap-x-4 transition-all duration-200'>AI INTEGRATION <FaArrowRight/></h2>
               <ul className='transition-all duration-1000 group-hover:max-h-fit group-hover:opacity-100 opacity-0 max-h-0 translate-x-3 text-left ease-in-out overflow-hidden'>
                    {NavigationData.AI.map((item , idx) => (
                        <li className='cursor-pointer hover:text-[#3161c3]' key={idx}>{item}</li>
                    ))}

               </ul>
               </div>

                {/* category 2  */}
                <div className='transition-all group'>
               <h2 className='cursor-pointer py-2 flex  items-center gap-x-2 hover:gap-x-4 transition-all duration-200'>DATA ANALYSIS <FaArrowRight/></h2>
               <ul className='transition-all duration-1000 group-hover:max-h-fit group-hover:opacity-100 opacity-0 max-h-0 translate-x-3 text-left ease-in-out overflow-hidden'>
                    {NavigationData.dataAnalysis.map((item , idx) => (
                        <li className='cursor-pointer hover:text-[#3161c3]' key={idx}>{item}</li>
                    ))}

               </ul>
               </div>
            </div>
        </div>


        {/* third for links and copyright  */}

        <div className='flex py-8 border-t-2 border-white mt-6 justify-between items-center '>
            <h1 className='font-bold flex-1 text-center'>&copy; 2024 Articized. All rights reserved.</h1>


        </div>
    </div>
  )
}

export default Footer
