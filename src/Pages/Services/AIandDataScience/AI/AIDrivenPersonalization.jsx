import React from 'react'

import Nav from '../../../../CommonComps/Nav/Nav'

import HeroCodeX from '../AIandDataScienceCommonPages/HeroCodeX'

import WhyNeed from '../AIandDataScienceCommonPages/WhyNeed'
import PricingCalc from '../AIandDataScienceCommonPages/PricingCalc'
import WhyMattersCodeX from '../AIandDataScienceCommonPages/WhyMattersCodeX'
import BoosterCodeX from '../AIandDataScienceCommonPages/BoosterCodeX'

import PoweredByCodeX from '../AIandDataScienceCommonPages/PowerByCodeX'

import ApproachCodeX from '../AIandDataScienceCommonPages/ApprochCodeX'
import CTA from '../../../../CommonComps/CTA'
import UniquePackage from '../AIandDataScienceCommonPages/UniquePackage'
import QandA from '../../../../CommonComps/QandA/QandA'
import ReviewsCodeX from '../AIandDataScienceCommonPages/ReviewsCodeX'

import Footer from '../../../../CommonComps/Footer/Footer'

//Data Imports
import { QACodeX } from '../../../../Data/QueANDAns'
import {  CodeXTestimonalData } from '../../../../Data/TestimonalData'
import { apiDevData } from '../../../../Data/ServicesData/CodeXData/DevelopmentData'



const AIDrivenPersonalization = () => {
  return (
    <div className='w-full'>
    <Nav/>
    <HeroCodeX page={apiDevData.heroSection}/>
    <WhyNeed page={apiDevData.whyNeedSection}/>
    <PricingCalc page={apiDevData.pricingCalc} />
    <WhyMattersCodeX page={apiDevData.whySection}/>  
    <BoosterCodeX page={apiDevData.boostSection}/>
    <ApproachCodeX page={apiDevData.approachSection}/>

    <CTA heading = {"Get a custom quote for your Custom Design Now!"} />
    
    <UniquePackage page={apiDevData.customPackage}/>

    <QandA page={QACodeX.CustomDesign} para = {"Explain that these services specifically target the optimization of online stores to increase their visibility in search engine results, focusing on product-specific keywords, improved user experience, and conversion rate optimization. "}/>

    <ReviewsCodeX page={apiDevData.reviewSection} testimonals={CodeXTestimonalData.customDesign} />


    <Footer/>
    </div>
  )
}

export default AIDrivenPersonalization