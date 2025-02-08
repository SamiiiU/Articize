import React, { useContext, useEffect, useState } from 'react'

import Nav from '../../../../CommonComps/Nav/Nav'

import Hero from '../MarketingCommon/Hero'
import WhyComp from '../MarketingCommon/WhyComp'
import Booster from '../MarketingCommon/Booster'

import CustomPackage from '../../../../CommonComps/CustomPackage/CustomPackage'
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
import { AmazonPPCData } from '../../../../Data/ServicesData/MarketingData/PPCData'
import { QAseo } from '../../../../Data/QueANDAns'
import { SEOReviews } from '../../../../Data/TestimonalData'
import { ContextAPI } from '../../../../GlobalProvider/ContextAPI'
import Loading from '../../../../CommonComps/Loading/Loading'
import { Helmet } from 'react-helmet'


const GoogleAdsPPC = () => {
  const { isLoading, setIsLoading } = useContext(ContextAPI)


  // useEffect(() => {
  //   setIsLoading(true)

  //   window.scrollTo(0, 0);

  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);

  // }, []);

  return (
    <div className='w-full '>
      <Helmet >
          <title>DEVXCLOUD - Amazon PPC</title>
      </Helmet>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Nav />
          <Hero page={AmazonPPCData.heroSection} />
          <CustomPackage page={AmazonPPCData.customPricing} />
          <Booster page={AmazonPPCData.boostSection} />
          <PoweredBy page={AmazonPPCData.powerBySection} />
          <TailoredSEO page={AmazonPPCData.tailoredSection} />
          <OurApproach page={AmazonPPCData.approachSection} />

          <CTA heading={"Get a custom quote for you SEO now!"} />
          <Path page={AmazonPPCData.pathToSuccess} />

          <Platforms page={AmazonPPCData.platformSection} />
          <RealResults page={AmazonPPCData.realResultsSection} />

          <QandA page={QAseo.EcommerceSEO} para={"Explain that these services specifically target the optimization of online stores to increase their visibility in search engine results, focusing on product-specific keywords, improved user experience, and conversion rate optimization. "} />

          <Pricing page={AmazonPPCData.pricingSection} />

          <ReviewsPage page={AmazonPPCData.reviewsSection} testimonals={SEOReviews.EcommerceSEO} />

          <Footer />
        </>
      )}
    </div>
  )
}

export default GoogleAdsPPC