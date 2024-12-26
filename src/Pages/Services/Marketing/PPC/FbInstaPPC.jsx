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
import { FbInstaPPCData } from '../../../../Data/ServicesData/MarketingData/PPCData'
import { QAsma } from '../../../../Data/QueANDAns'
import { SEOReviews } from '../../../../Data/TestimonalData'

const FbInstaPPC = () => {
  const [isLoaded, setIsLoaded] = useState(true)
   
  return (
    <div className='w-full'>
        {isLoaded && (
          <>
          <Nav/>
        <Hero page={FbInstaPPCData.heroSection}/>
        {/* <WhyComp page={GoogleAdsData.whySection}/> */}
        
        <CustomPricing page={FbInstaPPCData.customPricing}/>
        <Booster page={FbInstaPPCData.boostSection}/>
        <PoweredBy page={FbInstaPPCData.powerBySection}/>
        <TailoredSEO page={FbInstaPPCData.tailoredSection}/>
        <OurApproach page={FbInstaPPCData.approachSection}/>

        <CTA heading = {"Get a custom quote for you Google Ads PPC now!"} />
        <Path page={FbInstaPPCData.pathToSuccess} />

        <Platforms page={FbInstaPPCData.platformSection}/>

        <RealResults page={FbInstaPPCData.realResultsSection}  />

        <Pricing page={FbInstaPPCData.pricingSection}/>

        <QandA page={QAsma.BasicSMA}/>

        <ReviewsPage page={FbInstaPPCData.reviewsSection} testimonals={SEOReviews.EcommerceSEO} />

        <Footer />
          </>
        )}

    </div>
  )
}

export default FbInstaPPC