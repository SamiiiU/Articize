import React, { useContext, useEffect, useState } from 'react'

import Nav from '../../../../CommonComps/Nav/Nav'

import Hero from '../MarketingCommon/Hero'
import WhyComp from '../MarketingCommon/WhyComp'
import CustomPricing from '../MarketingCommon/CustomPricing'
import Booster from '../MarketingCommon/Booster'
import PoweredBy from '../MarketingCommon/PoweredBy'
import { TailoredSEO } from '../MarketingCommon/TailoredSEO'
import OurApproach from '../MarketingCommon/OurApproach'

import CTA from '../../../../CommonComps/CTA'

import Path from '../MarketingCommon/Path'
import Platforms from '../MarketingCommon/Platforms'
import RealResults from '../MarketingCommon/RealResults'
import QandA from '../../../../CommonComps/QandA/QandA'
import Pricing from '../MarketingCommon/Pricing'
import ReviewsPage from '../MarketingCommon/ReviewsPage'

import Footer from '../../../../CommonComps/Footer/Footer'

//Data imports 
import { AuditSEOData } from '../../../../Data/ServicesData/MarketingData/SEODatas'
import { QAseo } from '../../../../Data/QueANDAns'
import { SEOReviews } from '../../../../Data/TestimonalData'


const SEOAudit = () => {
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
          <Hero page={AuditSEOData.heroSection}/>
          {/* <WhyComp page={AuditSEOData.whySection}/> */}
          
          <CustomPricing page={AuditSEOData.customPricing}/>
          <Booster page={AuditSEOData.boostSection} />
          <PoweredBy page={AuditSEOData.powerBySection}/>
          <TailoredSEO page={AuditSEOData.tailoredSection}/>
        <OurApproach page={AuditSEOData.approachSection} />
        
        <CTA heading = {"Get a custom quote for you SEO now!"} />
        <Path page={AuditSEOData.pathToSuccess} />
        
        <Platforms page={AuditSEOData.platformSection}/>
        <RealResults page={AuditSEOData.realResultsSection}  />

        <QandA page={QAseo.EcommerceSEO} para = {"Explain that these services specifically target the optimization of online stores to increase their visibility in search engine results, focusing on product-specific keywords, improved user experience, and conversion rate optimization. "}/>

        <Pricing page={AuditSEOData.pricingSection} />

        <ReviewsPage page={AuditSEOData.reviewsSection} testimonals={SEOReviews.EcommerceSEO} />

        <Footer/>
          </>
        )}
    </div>
  )
}

export default SEOAudit