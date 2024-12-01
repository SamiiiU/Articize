import React, { useContext } from 'react'
import { ContextAPI } from '../../../GlobalProvider/ContextAPI'
import Nav from '../../../CommonComps/Nav/Nav'
import Hero from './SeoCommon/Hero'
import WhyComp from './SeoCommon/WhyComp'
import { SEOData } from '../../../Data/ServicesData/SEOandPPC'
import OurApproach from './SeoCommon/OurApproach'
import CTA from '../../../CommonComps/CTA'
import RealResults from './SeoCommon/RealResults'
import Pricing from './SeoCommon/Pricing'

const EcommerceSEO = () => {
    const {states} = useContext(ContextAPI)
  return (
    <div className='w-full '>
        <Nav/>
        <Hero page={SEOData.SEO.EcommerceSEO}/>
        <WhyComp page={SEOData.SEO.EcommerceSEO}/>
        <OurApproach page={SEOData.SEO.EcommerceSEO} />
        
        <CTA heading = {"Get a custom quote for you SEO now!"} />
        <RealResults page={SEOData.SEO.EcommerceSEO}  />

        <Pricing page={SEOData.SEO.EcommerceSEO} />
        
        
    </div>
  )
}

export default EcommerceSEO