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
import { LinkedinPPCData } from '../../../../Data/ServicesData/MarketingData/PPCData'
import { QAsma } from '../../../../Data/QueANDAns'
import { SEOReviews } from '../../../../Data/TestimonalData'

const LinkedinPPC = () => {
  const [isLoaded, setIsLoaded] = useState(true)
   
  return (
    <div className='w-full'>
        {isLoaded && (
          <>
          <Nav/>
        <Hero page={LinkedinPPCData.heroSection}/>
        {/* <WhyComp page={GoogleAdsData.whySection}/> */}
        
        <CustomPricing page={LinkedinPPCData.customPricing}/>
        <Booster page={LinkedinPPCData.boostSection}/>
        <PoweredBy page={LinkedinPPCData.powerBySection}/>
        <TailoredSEO page={LinkedinPPCData.tailoredSection}/>
        <OurApproach page={LinkedinPPCData.approachSection}/>

        <CTA heading = {"Get a custom quote for you Google Ads PPC now!"} />
        <Path page={LinkedinPPCData.pathToSuccess} />

        <Platforms page={LinkedinPPCData.platformSection}/>

        <RealResults page={LinkedinPPCData.realResultsSection}  />

        <Pricing page={LinkedinPPCData.pricingSection}/>

        <QandA page={QAsma.BasicSMA}/>

        <ReviewsPage page={LinkedinPPCData.reviewsSection} testimonals={SEOReviews.EcommerceSEO} />

        <Footer />
          </>
        )}

    </div>
  )
}

export default LinkedinPPC