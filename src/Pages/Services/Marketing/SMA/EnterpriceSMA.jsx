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
import { EnterpriseSMMData } from '../../../../Data/ServicesData/MarketingData/SMAData'
import { QAsma } from '../../../../Data/QueANDAns'
import { SEOReviews } from '../../../../Data/TestimonalData'

const EnterpriceSMA = () => {
  const [isLoaded, setIsLoaded] = useState(true)
   
  return (
    <div className='w-full'>
        {isLoaded && (
          <>
          <Nav/>
        <Hero page={EnterpriseSMMData.heroSection}/>
        {/* <WhyComp page={GoogleAdsData.whySection}/> */}
        
        <CustomPricing page={EnterpriseSMMData.customPricing}/>
        <Booster page={EnterpriseSMMData.boostSection}/>
        <PoweredBy page={EnterpriseSMMData.powerBySection}/>
        <TailoredSEO page={EnterpriseSMMData.tailoredSection}/>
        <OurApproach page={EnterpriseSMMData.approachSection}/>

        <CTA heading = {"Get a custom quote for you Google Ads PPC now!"} />
        <Path page={EnterpriseSMMData.pathToSuccess} />

        <Platforms page={EnterpriseSMMData.platformSection}/>

        <RealResults page={EnterpriseSMMData.realResultsSection}  />

        <Pricing page={EnterpriseSMMData.pricingSection}/>

        <QandA page={QAsma.BasicSMA}/>

        <ReviewsPage page={EnterpriseSMMData.reviewsSection} testimonals={SEOReviews.EcommerceSEO} />

        <Footer />
          </>
        )}

    </div>
  )
}

export default EnterpriceSMA