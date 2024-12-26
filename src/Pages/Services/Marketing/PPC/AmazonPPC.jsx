import React, { useEffect, useState } from 'react'
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
import { AmazonPPCData } from '../../../../Data/ServicesData/MarketingData/PPCData'
import { QAsma } from '../../../../Data/QueANDAns'
import { SEOReviews } from '../../../../Data/TestimonalData'

const AmazonPPC = () => {
  const [isLoaded, setIsLoaded] = useState(true)
   
  return (
    <div className='w-full'>
        {isLoaded && (
          <>
          <Nav/>
        <Hero page={AmazonPPCData.heroSection}/>
        {/* <WhyComp page={AmazonPPCData.whySection}/> */}
        
        <CustomPricing page={AmazonPPCData.customPricing}/>
        <Booster page={AmazonPPCData.boostSection}/>
        <PoweredBy page={AmazonPPCData.powerBySection}/>
        <TailoredSEO page={AmazonPPCData.tailoredSection}/>
        <OurApproach page={AmazonPPCData.approachSection}/>

        <CTA heading = {"Get a custom quote for you Google Ads PPC now!"} />
        <Path page={AmazonPPCData.pathToSuccess} />

        <Platforms page={AmazonPPCData.platformSection}/>

        <RealResults page={AmazonPPCData.realResultsSection}  />

        <Pricing page={AmazonPPCData.pricingSection}/>

        <QandA page={QAsma.BasicSMA}/>

        <ReviewsPage page={AmazonPPCData.reviewsSection} testimonals={SEOReviews.EcommerceSEO} />

        <Footer />
          </>
        )}

    </div>
  )
}

export default AmazonPPC