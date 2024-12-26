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
import { ProgrammingSMAData } from '../../../../Data/ServicesData/MarketingData/SMAData'
import { QAsma } from '../../../../Data/QueANDAns'
import { SEOReviews } from '../../../../Data/TestimonalData'

const ProgrammingSMA = () => {
  const [isLoaded, setIsLoaded] = useState(true)
   
  return (
    <div className='w-full'>
        {isLoaded && (
          <>
          <Nav/>
        <Hero page={ProgrammingSMAData.heroSection}/>
        {/* <WhyComp page={GoogleAdsData.whySection}/> */}
        
        <CustomPricing page={ProgrammingSMAData.customPricing}/>
        <Booster page={ProgrammingSMAData.boostSection}/>
        <PoweredBy page={ProgrammingSMAData.powerBySection}/>
        <TailoredSEO page={ProgrammingSMAData.tailoredSection}/>
        <OurApproach page={ProgrammingSMAData.approachSection}/>

        <CTA heading = {"Get a custom quote for you Google Ads PPC now!"} />
        <Path page={ProgrammingSMAData.pathToSuccess} />

        <Platforms page={ProgrammingSMAData.platformSection}/>

        <RealResults page={ProgrammingSMAData.realResultsSection}  />

        <Pricing page={ProgrammingSMAData.pricingSection}/>

        <QandA page={QAsma.BasicSMA}/>

        <ReviewsPage page={ProgrammingSMAData.reviewsSection} testimonals={SEOReviews.EcommerceSEO} />

        <Footer />
          </>
        )}

    </div>
  )
}

export default ProgrammingSMA