import React from 'react'
import logo from '../../Assets/Images/CommonImages/LogoMain.png'
import { mainNavData, NavigationData } from '../../Data/NavigationData'
import { FaArrowCircleRight } from 'react-icons/fa'
import { FaArrowRight, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full transition-all duration-1000  px-4 sm:px-16 md:px-28 2xl:px-48 pt-10  '>
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
            {mainNavData.map((category , index) => (<div className='lg:flex-1 min-w-48'>
               <h1 key={index} className='font-bold mb-5 text-3xl'>{category.navigator}</h1>
               {/* category 1  */}
               {category.sections.map((service , serviceIdx) => (
                <div key={serviceIdx} className='transition-all group'>
                <h2 className='cursor-pointer py-2 flex items-center gap-x-2 hover:gap-x-4 transition-all duration-200'>{service.heading} </h2>
                <ul className='transition-all duration-1000 opacity-0 translate-x-3 text-left ease-in-out overflow-hidden'>
                     {
                        
                     }
 
                </ul>
                </div>
               ))}

{/* <Link  className='cursor-pointer hover:text-[#3161c3]' >{}</Link > */}
                
            </div>))}

            
            
        </div>


        {/* third for links and copyright  */}

        <div className='flex py-8 border-t-2 border-white mt-6 justify-between items-center '>
            <h1 className='font-bold flex-1 text-center'>&copy; 2024 Articized. All rights reserved.</h1>


        </div>
    </div>
  )
}

export default Footer
