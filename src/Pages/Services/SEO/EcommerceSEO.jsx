import React, { useContext, useEffect } from 'react'
import { ContextAPI } from '../../../GlobalProvider/ContextAPI'
import Nav from '../../../CommonComps/Nav/Nav'
import Hero from './SeoCommon/Hero'
import WhyComp from './SeoCommon/WhyComp'
import { SEOData } from '../../../Data/ServicesData/SEOandPPC'
import OurApproach from './SeoCommon/OurApproach'
import CTA from '../../../CommonComps/CTA'
import RealResults from './SeoCommon/RealResults'
import Pricing from './SeoCommon/Pricing'
import Footer from '../../../CommonComps/Footer/Footer'

import BG from '../../../Assets/Images/CommonImages/HeroServices.png'

const EcommerceSEO = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className='w-full '>
        <Nav/>
        <Hero page={SEOData.SEO.EcommerceSEO} BG={BG}/>
        <WhyComp page={SEOData.SEO.EcommerceSEO}/>
        <OurApproach page={SEOData.SEO.EcommerceSEO} />
        
        <CTA heading = {"Get a custom quote for you SEO now!"} />
        <RealResults page={SEOData.SEO.EcommerceSEO}  />

        <Pricing page={SEOData.SEO.EcommerceSEO} />
        
        <Footer/>
    </div>
  )
}

export default EcommerceSEO