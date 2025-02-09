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
import { ProgrammingSMAData } from '../../../../Data/ServicesData/MarketingData/SMAData'
import { QAseo } from '../../../../Data/QueANDAns'
import { SEOReviews } from '../../../../Data/TestimonalData'
import { ContextAPI } from '../../../../GlobalProvider/ContextAPI'
import Loading from '../../../../CommonComps/Loading/Loading'
import { Helmet } from 'react-helmet'


const ProgrammingSMA = () => {
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
          <title>DEVXCLOUD - Technical SEO</title>
      </Helmet>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Nav />
          <Hero page={ProgrammingSMAData.heroSection} />
          <CustomPackage page={ProgrammingSMAData.customPricing} />
          <Booster page={ProgrammingSMAData.boostSection} />
          <PoweredBy page={ProgrammingSMAData.powerBySection} />
          <TailoredSEO page={ProgrammingSMAData.tailoredSection} />
          <OurApproach page={ProgrammingSMAData.approachSection} />

          <CTA heading={"Get a custom quote for you SEO now!"} />
          <Path page={ProgrammingSMAData.pathToSuccess} />

          <Platforms page={ProgrammingSMAData.platformSection} />
          <RealResults page={ProgrammingSMAData.realResultsSection} />

          <QandA page={QAseo.EcommerceSEO} para={"Explain that these services specifically target the optimization of online stores to increase their visibility in search engine results, focusing on product-specific keywords, improved user experience, and conversion rate optimization. "} />

          <Pricing page={ProgrammingSMAData.pricingSection} />

          <ReviewsPage page={ProgrammingSMAData.reviewsSection} testimonals={SEOReviews.EcommerceSEO} />

          <Footer />
        </>
      )}
    </div>
  )
}

export default ProgrammingSMA