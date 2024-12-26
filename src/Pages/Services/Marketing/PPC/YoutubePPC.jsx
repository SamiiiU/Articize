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
import { YoutubePPCData } from '../../../../Data/ServicesData/MarketingData/PPCData'
import { QAsma } from '../../../../Data/QueANDAns'
import { SEOReviews } from '../../../../Data/TestimonalData'

const YoutubePPC = () => {
  const [isLoaded, setIsLoaded] = useState(true)
   
  return (
    <div className='w-full'>
        {isLoaded && (
          <>
          <Nav/>
        <Hero page={YoutubePPCData.heroSection}/>
        {/* <WhyComp page={GoogleAdsData.whySection}/> */}
        
        <CustomPricing page={YoutubePPCData.customPricing}/>
        <Booster page={YoutubePPCData.boostSection}/>
        <PoweredBy page={YoutubePPCData.powerBySection}/>
        <TailoredSEO page={YoutubePPCData.tailoredSection}/>
        <OurApproach page={YoutubePPCData.approachSection}/>

        <CTA heading = {"Get a custom quote for you Google Ads PPC now!"} />
        <Path page={YoutubePPCData.pathToSuccess} />

        <Platforms page={YoutubePPCData.platformSection}/>

        <RealResults page={YoutubePPCData.realResultsSection}  />

        <Pricing page={YoutubePPCData.pricingSection}/>

        <QandA page={QAsma.BasicSMA}/>

        <ReviewsPage page={YoutubePPCData.reviewsSection} testimonals={SEOReviews.EcommerceSEO} />

        <Footer />
          </>
        )}

    </div>
  )
}

export default YoutubePPC