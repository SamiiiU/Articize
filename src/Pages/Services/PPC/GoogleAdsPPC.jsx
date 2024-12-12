import React from 'react'
import Hero from '../SEO/SeoandPPCcommon/Hero'
import { PPCData } from '../../../Data/ServicesData/SEOandPPC'
import Nav from '../../../CommonComps/Nav/Nav'
import WhyComp from '../SEO/SeoandPPCcommon/WhyComp'
import Booster from '../SEO/SeoandPPCcommon/Booster'
import PoweredBy from '../SEO/SeoandPPCcommon/PoweredBy'
import OurApproach from '../SEO/SeoandPPCcommon/OurApproach'
import CTA from '../../../CommonComps/CTA'
import RealResults from '../SEO/SeoandPPCcommon/RealResults'
import Pricing from '../SEO/SeoandPPCcommon/Pricing'
import ReviewsSEO from '../SEO/SeoandPPCcommon/ReviewsSEO'
import Footer from '../../../CommonComps/Footer/Footer'
import { Reviews } from '../../../Data/TestimonalData'

const GoogleAdsPPC = () => {
  return (
    <div className='w-full'>
        <Nav/>
        <Hero page={PPCData.GoogleAdsPPC?.heroSection}/>
        <WhyComp page={PPCData.GoogleAdsPPC.whySection}/>
        <Booster page={PPCData.GoogleAdsPPC?.boostSection}/>
        <PoweredBy page={PPCData.GoogleAdsPPC.powerBySection}/>

        <OurApproach page={PPCData.GoogleAdsPPC.approachSection}/>

        <CTA heading = {"Get a custom quote for you Google Ads PPC now!"} />

        <RealResults page={PPCData.GoogleAdsPPC.realResultsSection}  />

        <Pricing page={PPCData.GoogleAdsPPC.pricingSection}/>

        
        <ReviewsSEO page={PPCData.GoogleAdsPPC.reviewsSection} testimonals={Reviews.GoogleAdsPPC} />

        <Footer />

    </div>
  )
}

export default GoogleAdsPPC