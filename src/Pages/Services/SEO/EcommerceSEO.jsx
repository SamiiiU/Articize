import React, { useContext, useEffect, useState } from 'react'
import Nav from '../../../CommonComps/Nav/Nav'
import Hero from './SeoandPPCcommon/Hero'
import WhyComp from './SeoandPPCcommon/WhyComp'
import { EcommerceSEOData} from '../../../Data/ServicesData/SEODatas'
import OurApproach from './SeoandPPCcommon/OurApproach'
import CTA from '../../../CommonComps/CTA'
import RealResults from './SeoandPPCcommon/RealResults'
import Pricing from './SeoandPPCcommon/Pricing'
import Footer from '../../../CommonComps/Footer/Footer'

import Booster from './SeoandPPCcommon/Booster'
import PoweredBy from './SeoandPPCcommon/PoweredBy'
import QandA from '../../../CommonComps/QandA/QandA'
import { QAEcommerceSEO, QAseo } from '../../../Data/QueANDAns'
import { SEOReviews } from '../../../Data/TestimonalData'
import { TailoredSEO } from './SeoandPPCcommon/TailoredSEO'
import Platforms from './SeoandPPCcommon/Platforms'
import Path from './SeoandPPCcommon/Path'
import CustomPricing from './SeoandPPCcommon/CustomPricing'
import ReviewsPage from './SeoandPPCcommon/ReviewsPage'


const EcommerceSEO = () => {
  const [isLoaded, setIsLoaded] = useState(true)
  // useEffect(() => {
  //   setIsLoaded(false)
  //   window.scrollTo(0, 0);
  //   setIsLoaded(true)
  // }, [])

  return (
    <div className='w-full '>
        {isLoaded && (
          <>
          <Nav/>
          <Hero page={EcommerceSEOData.heroSection}/>
          {/* <WhyComp page={EcommerceSEOData.whySection}/> */}
          <CustomPricing page={EcommerceSEOData.customPricing}/>
          <Booster page={EcommerceSEOData.boostSection} />
          <PoweredBy page={EcommerceSEOData.powerBySection}/>
          <TailoredSEO page={EcommerceSEOData.tailoredSection}/>
          <OurApproach page={EcommerceSEOData.approachSection} />
        
        <CTA heading = {"Get a custom quote for you SEO now!"} />
        <Path page={EcommerceSEOData.pathToSuccess} />

        <Platforms page={EcommerceSEOData.platformSection}/>
        <RealResults page={EcommerceSEOData.realResultsSection}  />

        <QandA page={QAseo.EcommerceSEO} para = {"Explain that these services specifically target the optimization of online stores to increase their visibility in search engine results, focusing on product-specific keywords, improved user experience, and conversion rate optimization. "}/>

        <Pricing page={EcommerceSEOData.pricingSection} />

        <ReviewsPage page={EcommerceSEOData.reviewsSection} testimonals={SEOReviews.EcommerceSEO} />
        

        
        
        <Footer/>
          </>
        )}
    </div>
  )
}

export default EcommerceSEO