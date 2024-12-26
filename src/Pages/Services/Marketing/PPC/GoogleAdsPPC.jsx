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
import { GoogleAdsData } from '../../../../Data/ServicesData/MarketingData/PPCData'
import { QAsma } from '../../../../Data/QueANDAns'
import { SEOReviews } from '../../../../Data/TestimonalData'

const GoogleAdsPPC = () => {
  const [isLoaded, setIsLoaded] = useState(true)
   
  return (
    <div className='w-full'>
        {isLoaded && (
          <>
          <Nav/>
        <Hero page={GoogleAdsData.heroSection}/>
        {/* <WhyComp page={GoogleAdsData.whySection}/> */}
        
        <CustomPricing page={GoogleAdsData.customPricing}/>
        <Booster page={GoogleAdsData.boostSection}/>
        <PoweredBy page={GoogleAdsData.powerBySection}/>
        <TailoredSEO page={GoogleAdsData.tailoredSection}/>
        <OurApproach page={GoogleAdsData.approachSection}/>

        <CTA heading = {"Get a custom quote for you Google Ads PPC now!"} />
        <Path page={GoogleAdsData.pathToSuccess} />

        <Platforms page={GoogleAdsData.platformSection}/>

        <RealResults page={GoogleAdsData.realResultsSection}  />

        <Pricing page={GoogleAdsData.pricingSection}/>

        <QandA page={QAsma.BasicSMA}/>

        <ReviewsPage page={GoogleAdsData.reviewsSection} testimonals={SEOReviews.EcommerceSEO} />

        <Footer />
          </>
        )}

    </div>
  )
}

export default GoogleAdsPPC