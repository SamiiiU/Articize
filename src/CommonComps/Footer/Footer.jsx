import React from 'react'
import logo from '../../Assets/Images/CommonImages/LogoMain.png'
import { footerNavigations, mainNavData, NavigationData } from '../../Data/NavigationData'
import { FaArrowCircleRight } from 'react-icons/fa'
import { FaArrowRight, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full transition-all duration-1000  px-4 sm:px-16 md:px-28 2xl:px-48 pt-10  '>
        {/* first row start here  */}
        <div className='w-full flex mb-10 flex-wrap md:flex-row flex-col gap-y-10 gap-x-8  justify-evenly'>
                {/* logo and CTA section  */}
                <div className='md:w-[40%] w-full  text-sm'>
                    <div className='w-40 h-20 ' style={{backgroundImage : `url("${logo}")` , backgroundSize : 'cover' , backgroundPosition : 'center'}}/>
                    <p>Articized is your creative digital agency, transforming ideas into impactful digital solutions. From innovative web designs to targeted marketing strategies, we bring your brand to life online</p>   
                    <div className='w-full my-3 flex gap-4 items-center'>
                        <a href='https://www.facebook.com/people/Sami-Ullah/pfbid02QV5wHapuS94V3qYW42n5a6ZPQmJK6WsqZa7MLDyk7sxfw6UKF7csVez2TfXnkyfEl/' target='_blank' className='hover:text-[#0760C3]'><FaFacebook size={30}/></a>
                        <a href='https://www.instagram.com/articize_agency/?igsh=b2JsNHk0NTBhOHc5' target='_blank' className='hover:text-[#0760C3]'><FaInstagram size={30}/></a>
                        <a href='https://pk.linkedin.com/in/syed-anshal-ali-358154306' target='_blank' className='hover:text-[#0760C3]'><FaLinkedin size={30}/></a>
                    </div>           
                </div>

                {/* Popular Services  */}
                <div className='min-w-fit flex flex-col gap-y-2 ' >
                    <h1 className='text-xl font-bold mb-8'>Popular Services</h1>
                    {footerNavigations.popularServices.map((service , index) => (
                        <Link to={service.path} className='text-sm text-[#207DE9] '>{service.type}</Link>
                    ))}
                </div>

                 {/* Who We are  */}
                 <div className='min-w-fit flex flex-col gap-y-2 ' >
                    <h1 className='text-xl font-bold mb-8'>Who We Are</h1>
                    {footerNavigations.whoWeAre.types.map((service , index) => (
                        <Link to={service.path} className='text-sm text-[#207DE9] '>{service.type}</Link>
                    ))}
                </div>

                 {/* Popular Services  */}
                 <div className='min-w-fit flex flex-col gap-y-2 ' >
                    <h1 className='text-xl font-bold mb-8'>Pricing Guide</h1>
                    {footerNavigations.pricingGuide.types.map((service , index) => (
                        <Link to={service.path} className='text-sm text-[#207DE9] '>{service.type}</Link>
                    ))}
                </div>


        </div>



        {/* Second row : services section here */}
        


        {/* third for links and copyright  */}

        <div className='flex py-8 border-t-2 border-white mt-6 justify-between items-center '>
            <h1 className='font-bold flex-1 text-center'>&copy; 2024 DEVXCLOUD. All rights reserved.</h1>


        </div>
    </div>
  )
}

export default Footer
