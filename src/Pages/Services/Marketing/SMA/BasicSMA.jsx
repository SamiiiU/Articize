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
import { BasicSMAData } from '../../../../Data/ServicesData/MarketingData/SMAData'
import { QAsma } from '../../../../Data/QueANDAns'
import { SEOReviews } from '../../../../Data/TestimonalData'

const BasicSMA = () => {
  const [isLoaded, setIsLoaded] = useState(true)
   
  return (
    <div className='w-full'>
        {isLoaded && (
          <>
          <Nav/>
        <Hero page={BasicSMAData.heroSection}/>
        {/* <WhyComp page={GoogleAdsData.whySection}/> */}
        
        <CustomPricing page={BasicSMAData.customPricing}/>
        <Booster page={BasicSMAData.boostSection}/>
        <PoweredBy page={BasicSMAData.powerBySection}/>
        <TailoredSEO page={BasicSMAData.tailoredSection}/>
        <OurApproach page={BasicSMAData.approachSection}/>

        <CTA heading = {"Get a custom quote for you Google Ads PPC now!"} />
        <Path page={BasicSMAData.pathToSuccess} />

        <Platforms page={BasicSMAData.platformSection}/>

        <RealResults page={BasicSMAData.realResultsSection}  />

        <Pricing page={BasicSMAData.pricingSection}/>

        <QandA page={QAsma.BasicSMA}/>

        <ReviewsPage page={BasicSMAData.reviewsSection} testimonals={SEOReviews.EcommerceSEO} />

        <Footer />
          </>
        )}

    </div>
  )
}

export default BasicSMA