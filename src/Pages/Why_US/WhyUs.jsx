import React from 'react'
import WhyHero from './WhyUs_Components/WhyHero'
import Nav from '../../CommonComps/Nav/Nav'
import OurVision from './WhyUs_Components/OurVision'
import Footer from '../../CommonComps/Footer/Footer'
import CTA from '../../CommonComps/CTA'
import WhyChoseUs from './WhyUs_Components/WhyChoseUs'

const WhyUs = () => {
  return (
    <div className='w-full'>
        <Nav/>
       <WhyHero/>
       <OurVision/>
       <CTA heading={"Get free consultation now!"}/>
        <WhyChoseUs/>
       <Footer/>

    </div>
  )
}

export default WhyUs
