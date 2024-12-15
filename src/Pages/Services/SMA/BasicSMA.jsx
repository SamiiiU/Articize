import React, { useEffect, useState } from 'react'
import Nav from '../../../CommonComps/Nav/Nav'
import Hero from '../SEO/SeoandPPCcommon/Hero'
import { PPCData, SMAData } from '../../../Data/ServicesData/SEOandPPC'
import WhyComp from '../SEO/SeoandPPCcommon/WhyComp'
import Booster from '../SEO/SeoandPPCcommon/Booster'
import PoweredBy from '../SEO/SeoandPPCcommon/PoweredBy'
import OurApproach from '../SEO/SeoandPPCcommon/OurApproach'
import CTA from '../../../CommonComps/CTA'
import RealResults from '../SEO/SeoandPPCcommon/RealResults'
import Pricing from '../SEO/SeoandPPCcommon/Pricing'
import Footer from '../../../CommonComps/Footer/Footer'
import QandA from '../../../CommonComps/QandA/QandA'
import { QAppc } from '../../../Data/QueANDAns'
import { Reviews } from '../../../Data/TestimonalData'
import ReviewsPage from '../SEO/SeoandPPCcommon/Reviews'

const BasicSMA = () => {
    const [isLoaded, setIsLoaded] = useState(true)
    useEffect(() => {
      setIsLoaded(false)
      window.scrollTo(0, 0);
      setIsLoaded(true)
    }, [])
  return (
    <div className='w-full'>
        {isLoaded && (
            <>
            <Nav/>
        <Hero page={SMAData.BasicSMA?.heroSection}/>
        {/* <WhyComp path={SMAData.BasicSMA?.whySection}/> */}
        <Booster page={SMAData.BasicSMA?.boostSection}/>

        <PoweredBy page={SMAData.BasicSMA.powerBySection}/>
        
        <OurApproach page={SMAData.BasicSMA.approachSection}/>
        
        <CTA heading = {"Get a custom quote for your Social Media Marketing now!"} />

        <RealResults page={SMAData.BasicSMA.realResultsSection}  />

        <Pricing page={SMAData.BasicSMA.pricingSection}/>

        <QandA page={QAppc.GoogleAdsPPC}/>

        
        <ReviewsPage page={SMAData.BasicSMA.reviewsSection} testimonals={Reviews.BasicSMA} />  

        <Footer />
        </>

        )}
    </div>
  )
}

export default BasicSMA