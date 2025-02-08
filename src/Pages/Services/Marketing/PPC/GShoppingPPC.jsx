import React, { useContext, useEffect, useState } from 'react'

import Nav from '../../../../CommonComps/Nav/Nav'

import Hero from '../MarketingCommon/Hero'
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
import { GoogleShoppingPPCData } from '../../../../Data/ServicesData/MarketingData/PPCData'
import { QAseo } from '../../../../Data/QueANDAns'
import { SEOReviews } from '../../../../Data/TestimonalData'
import { ContextAPI } from '../../../../GlobalProvider/ContextAPI'
import Loading from '../../../../CommonComps/Loading/Loading'
import { Helmet } from 'react-helmet'


const GShoppingPPC = () => {
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
          <title>DEVXCLOUD - Google Shopping PPC</title>
      </Helmet>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Nav />
          <Hero page={GoogleShoppingPPCData.heroSection} />
          <CustomPackage page={GoogleShoppingPPCData.customPricing} />
          <Booster page={GoogleShoppingPPCData.boostSection} />
          <PoweredBy page={GoogleShoppingPPCData.powerBySection} />
          <TailoredSEO page={GoogleShoppingPPCData.tailoredSection} />
          <OurApproach page={GoogleShoppingPPCData.approachSection} />

          <CTA heading={"Get a custom quote for you SEO now!"} />
          <Path page={GoogleShoppingPPCData.pathToSuccess} />

          <Platforms page={GoogleShoppingPPCData.platformSection} />
          <RealResults page={GoogleShoppingPPCData.realResultsSection} />

          <QandA page={QAseo.EcommerceSEO} para={"Explain that these services specifically target the optimization of online stores to increase their visibility in search engine results, focusing on product-specific keywords, improved user experience, and conversion rate optimization. "} />

          <Pricing page={GoogleShoppingPPCData.pricingSection} />

          <ReviewsPage page={GoogleShoppingPPCData.reviewsSection} testimonals={SEOReviews.EcommerceSEO} />

          <Footer />
        </>
      )}
    </div>
  )
}

export default GShoppingPPC