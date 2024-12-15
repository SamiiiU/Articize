import React, { useContext, useEffect, useState } from 'react'
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
import { QAEcommerceSEO, QAseo } from '../../../Data/QueANDAns'
import { Reviews } from '../../../Data/TestimonalData'
import ReviewsSEO  from './SeoandPPCcommon/Reviews'


const VideoSEO = () => {
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
          <Hero page={SEOData.VideoSEO.heroSection}/>
          <WhyComp page={SEOData.VideoSEO.whySection}/>
           <Booster page={SEOData.VideoSEO.boostSection} />
          <PoweredBy page={SEOData.VideoSEO.powerBySection}/>
        <OurApproach page={SEOData.VideoSEO.approachSection} />
        
        <CTA heading = {"Get a custom quote for you SEO now!"} />
        <RealResults page={SEOData.VideoSEO.realResultsSection}  />

        <QandA page={QAseo.EcommerceSEO} para = {"Explain that these services specifically target the optimization of online stores to increase their visibility in search engine results, focusing on product-specific keywords, improved user experience, and conversion rate optimization. "}/>

        <Pricing page={SEOData.VideoSEO.pricingSection} />

        <ReviewsSEO page={SEOData.VideoSEO.reviewsSection} testimonals={Reviews.EcommerceSEO} />

        
        
        <Footer/>
          </>
        )}
    </div>
  )
}

export default VideoSEO