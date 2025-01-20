import React from 'react'
import logo from '../../Assets/Images/CommonImages/LogoMain.png'
import { footerNavigations, mainNavData, NavigationData } from '../../Data/NavigationData'
import { FaArrowCircleRight } from 'react-icons/fa'
import { FaArrowRight, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full  '>
        {/* first row start here  */}
        <div className='w-full  transition-all duration-1000  px-4 sm:px-16 md:px-28 2xl:px-48 pt-10 flex mb-10 flex-wrap md:flex-row flex-col gap-y-10 gap-x-4  justify-between'>
                {/* logo and CTA section  */}
                <div className='md:w-[30%] w-full  text-sm'>
                    <div className='w-40 h-20 ' style={{backgroundImage : `url("${logo}")` , backgroundSize : 'cover' , backgroundPosition : 'center'}}/>
                    <h1 className='text-xl font-bold my-2'>HAVE QUESTIONS?</h1>

                    <p>what your business requires to reach the next level? Don't let un- certainty slow you down. Reach out to us or submit a proposal, and let's engage in a detailed discussion about your specific chal- lenges and objectives. At DevXCloud, we specialize in crafting customized solutions that are perfectly aligned with your unique business needs. Together, we can identify and implement the right strategies to enhance your operations and drive significant growth. Contact us today, and let's start building a brighter future for your business.</p>   
           
                </div>

                {/* Popular Services  */}
                <div className='min-w-fit flex flex-col  ' >
                    <h1 className='text-xl font-bold mb-8'>Popular Services</h1>
                    {footerNavigations.popularServices.map((service , index) => (
                        <Link key={index} to={service.path} className='text-sm text-[#207DE9] '>{service.type}</Link>
                    ))}
                </div>

                 {/* Who We are  */}
                 <div className='min-w-fit flex flex-col  ' >
                    <h1 className='text-xl font-bold mb-8'>Who We Are</h1>
                    {footerNavigations.whoWeAre.types.map((service , index) => (
                        <Link key={index} to={service.path} className='text-sm text-[#207DE9] '>{service.type}</Link>
                    ))}
                </div>

                 {/* Popular Services  */}
                 <div className='min-w-fit flex flex-col  ' >
                    <h1 className='text-xl font-bold mb-8'>Pricing Guide</h1>
                    {footerNavigations.pricingGuide.types.map((service , index) => (
                        <Link key={index} to={service.path} className='text-sm text-[#207DE9] '>{service.type}</Link>
                    ))}
                </div>

                {/* Contact US  */}
                    <div className='min-w-fit flex flex-col'>
                    <h1 className='text-xl font-bold mb-8'>Our Contact</h1>
                    <p className=''>Belle,Mead New Jersey</p>
                    <p className='text-[#207DE9]'>+44 1273 575190</p>
                    <p >info@devxcloud.com</p>


                        <div className='w-full my-3 flex gap-4 items-center'>
                            <a href='https://www.facebook.com/people/Sami-Ullah/pfbid02QV5wHapuS94V3qYW42n5a6ZPQmJK6WsqZa7MLDyk7sxfw6UKF7csVez2TfXnkyfEl/' target='_blank' className='hover:text-[#0760C3]'><FaFacebook size={30}/></a>
                            <a href='https://www.instagram.com/articize_agency/?igsh=b2JsNHk0NTBhOHc5' target='_blank' className='hover:text-[#0760C3]'><FaInstagram size={30}/></a>
                            <a href='https://pk.linkedin.com/in/syed-anshal-ali-358154306' target='_blank' className='hover:text-[#0760C3]'><FaLinkedin size={30}/></a>
                        </div> 
                    </div>


        </div>



        {/* second for links and copyright  */}

        <div className='flex py-8 text-white bg-[#000D4E] mt-6 justify-between items-center '>
            <h1 className='font-bold flex-1 text-center'>&copy; 2025 DEVXCLOUD. All rights reserved.</h1>


        </div>
    </div>
  )
}

export default Footer
