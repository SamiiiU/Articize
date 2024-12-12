import React, { useContext, useEffect } from 'react'
import { ContextAPI } from '../../../GlobalProvider/ContextAPI'
import Nav from '../../../CommonComps/Nav/Nav'
import Hero from './SeoandPPCcommon/Hero'
import WhyComp from './SeoandPPCcommon/WhyComp'
import { SEOData } from '../../../Data/ServicesData/SEOandPPC'
import OurApproach from './SeoandPPCcommon/OurApproach'
import CTA from '../../../CommonComps/CTA'
import RealResults from './SeoandPPCcommon/RealResults'
import Pricing from './SeoandPPCcommon/Pricing'
import Footer from '../../../CommonComps/Footer/Footer'

import Booster from './SeoandPPCcommon/Booster'
import PoweredBy from './SeoandPPCcommon/PoweredBy'
import QandA from '../../../CommonComps/QandA/QandA'
import { QAEcommerceSEO } from '../../../Data/QueANDAns'
import { Reviews } from '../../../Data/TestimonalData'
import ReviewsSEO  from './SeoandPPCcommon/ReviewsSEO'
const EcommerceSEO = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className='w-full '>
        <Nav/>
        <Hero page={SEOData.EcommerceSEO.heroSection}/>
        <WhyComp page={SEOData.EcommerceSEO.whySection}/>
        <Booster page={SEOData.EcommerceSEO.boostSection} />
        <PoweredBy page={SEOData.EcommerceSEO.powerBySection}/>
        <OurApproach page={SEOData.EcommerceSEO.approachSection} />
        
        <CTA heading = {"Get a custom quote for you SEO now!"} />
        <RealResults page={SEOData.EcommerceSEO.realResultsSection}  />

        <QandA page={QAEcommerceSEO} para = {"Explain that these services specifically target the optimization of online stores to increase their visibility in search engine results, focusing on product-specific keywords, improved user experience, and conversion rate optimization. "}/>

        <Pricing page={SEOData.EcommerceSEO.pricingSection} />

        <ReviewsSEO page={SEOData.EcommerceSEO.reviewsSection} testimonals={Reviews.EcommerceSEO} />

        
        
        <Footer/>
    </div>
  )
}

export default EcommerceSEO