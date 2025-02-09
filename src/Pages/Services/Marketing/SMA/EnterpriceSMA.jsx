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
import { EnterpriseSMMData } from '../../../../Data/ServicesData/MarketingData/SMAData'
import { QAseo } from '../../../../Data/QueANDAns'
import { SEOReviews } from '../../../../Data/TestimonalData'
import { ContextAPI } from '../../../../GlobalProvider/ContextAPI'
import Loading from '../../../../CommonComps/Loading/Loading'
import { Helmet } from 'react-helmet'


const EnterpriceSMA = () => {
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
          <Hero page={EnterpriseSMMData.heroSection} />
          <CustomPackage page={EnterpriseSMMData.customPricing} />
          <Booster page={EnterpriseSMMData.boostSection} />
          <PoweredBy page={EnterpriseSMMData.powerBySection} />
          <TailoredSEO page={EnterpriseSMMData.tailoredSection} />
          <OurApproach page={EnterpriseSMMData.approachSection} />

          <CTA heading={"Get a custom quote for you SEO now!"} />
          <Path page={EnterpriseSMMData.pathToSuccess} />

          <Platforms page={EnterpriseSMMData.platformSection} />
          <RealResults page={EnterpriseSMMData.realResultsSection} />

          <QandA page={QAseo.EcommerceSEO} para={"Explain that these services specifically target the optimization of online stores to increase their visibility in search engine results, focusing on product-specific keywords, improved user experience, and conversion rate optimization. "} />

          <Pricing page={EnterpriseSMMData.pricingSection} />

          <ReviewsPage page={EnterpriseSMMData.reviewsSection} testimonals={SEOReviews.EcommerceSEO} />

          <Footer />
        </>
      )}
    </div>
  )
}

export default EnterpriceSMA