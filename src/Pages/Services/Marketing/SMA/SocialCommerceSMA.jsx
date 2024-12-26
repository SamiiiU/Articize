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
import { SocialCommerceSMAData } from '../../../../Data/ServicesData/MarketingData/SMAData'
import { QAsma } from '../../../../Data/QueANDAns'
import { SEOReviews } from '../../../../Data/TestimonalData'

const SocialCommerceSMA = () => {
  const [isLoaded, setIsLoaded] = useState(true)
   
  return (
    <div className='w-full'>
        {isLoaded && (
          <>
          <Nav/>
        <Hero page={SocialCommerceSMAData.heroSection}/>
        {/* <WhyComp page={GoogleAdsData.whySection}/> */}
        
        <CustomPricing page={SocialCommerceSMAData.customPricing}/>
        <Booster page={SocialCommerceSMAData.boostSection}/>
        <PoweredBy page={SocialCommerceSMAData.powerBySection}/>
        <TailoredSEO page={SocialCommerceSMAData.tailoredSection}/>
        <OurApproach page={SocialCommerceSMAData.approachSection}/>

        <CTA heading = {"Get a custom quote for you Google Ads PPC now!"} />
        <Path page={SocialCommerceSMAData.pathToSuccess} />

        <Platforms page={SocialCommerceSMAData.platformSection}/>

        <RealResults page={SocialCommerceSMAData.realResultsSection}  />

        <Pricing page={SocialCommerceSMAData.pricingSection}/>

        <QandA page={QAsma.BasicSMA}/>

        <ReviewsPage page={SocialCommerceSMAData.reviewsSection} testimonals={SEOReviews.EcommerceSEO} />

        <Footer />
          </>
        )}

    </div>
  )
}

export default SocialCommerceSMA