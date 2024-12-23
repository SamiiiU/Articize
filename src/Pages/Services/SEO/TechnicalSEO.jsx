import React, { useContext, useEffect, useState } from 'react'
import Nav from '../../../CommonComps/Nav/Nav'
import Hero from './SeoandPPCcommon/Hero'
import WhyComp from './SeoandPPCcommon/WhyComp'
import { SEOData, TechnicalSEOData } from '../../../Data/ServicesData/SEODatas'
import OurApproach from './SeoandPPCcommon/OurApproach'
import CTA from '../../../CommonComps/CTA'
import RealResults from './SeoandPPCcommon/RealResults'
import Pricing from './SeoandPPCcommon/Pricing'
import Footer from '../../../CommonComps/Footer/Footer'

import Booster from './SeoandPPCcommon/Booster'
import PoweredBy from './SeoandPPCcommon/PoweredBy'
import QandA from '../../../CommonComps/QandA/QandA'
import { QAEcommerceSEO, QAseo } from '../../../Data/QueANDAns'
import { Reviews, SEOReviews } from '../../../Data/TestimonalData'
import ReviewsSEO  from './SeoandPPCcommon/ReviewsPage'


const TechnicalSEO = () => {
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
          <Hero page={TechnicalSEOData.heroSection}/>
          <WhyComp page={TechnicalSEOData.whySection}/>
          <Booster page={TechnicalSEOData.boostSection} />
          <PoweredBy page={TechnicalSEOData.powerBySection}/>
        <OurApproach page={TechnicalSEOData.approachSection} />
        
        <CTA heading = {"Get a custom quote for you SEO now!"} />
        <RealResults page={TechnicalSEOData.realResultsSection}  />

        <QandA page={QAseo.EcommerceSEO} para = {"Explain that these services specifically target the optimization of online stores to increase their visibility in search engine results, focusing on product-specific keywords, improved user experience, and conversion rate optimization. "}/>

        <Pricing page={TechnicalSEOData.pricingSection} />

        <ReviewsSEO page={TechnicalSEOData.reviewsSection} testimonals={SEOReviews.EcommerceSEO} />

        
        
        <Footer/>
          </>
        )}
    </div>
  )
}

export default TechnicalSEO