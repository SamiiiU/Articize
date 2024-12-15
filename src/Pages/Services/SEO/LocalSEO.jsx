import React, { useEffect, useState } from 'react'
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
import {  QAseo } from '../../../Data/QueANDAns'
import { Reviews } from '../../../Data/TestimonalData'
import ReviewsSEO  from './SeoandPPCcommon/Reviews'


const LocalSEO = () => {
  const [isLoaded, setIsLoaded] = useState(true)
  useEffect(() => {
    setIsLoaded(false)
    window.scrollTo(0, 0);
    setIsLoaded(true)
  }, [])

  return (
    <div className='w-full '>
        {isLoaded && (
          <>
          <Nav/>
          <Hero page={SEOData.LocalSEO.heroSection}/>
          <WhyComp page={SEOData.LocalSEO.whySection}/>
          <Booster page={SEOData.LocalSEO.boostSection} />
          <PoweredBy page={SEOData.LocalSEO.powerBySection}/>
        <OurApproach page={SEOData.LocalSEO.approachSection} />
        
        <CTA heading = {"Get a custom quote for you SEO now!"} />
        <RealResults page={SEOData.LocalSEO.realResultsSection}  />

        <QandA page={QAseo.EcommerceSEO} para = {"Explain that these services specifically target the optimization of online stores to increase their visibility in search engine results, focusing on product-specific keywords, improved user experience, and conversion rate optimization. "}/>

        <Pricing page={SEOData.LocalSEO.pricingSection} />

        <ReviewsSEO page={SEOData.LocalSEO.reviewsSection} testimonals={Reviews.EcommerceSEO} />

        
        
        <Footer/>
          </>
        )}
    </div>
  )
}

export default LocalSEO