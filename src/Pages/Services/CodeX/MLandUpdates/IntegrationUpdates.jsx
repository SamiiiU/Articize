import React from 'react'

import Nav from '../../../../CommonComps/Nav/Nav'

import HeroCodeX from '../CodeXCommenPages/HeroCodeX'

import WhyNeed from '../CodeXCommenPages/WhyNeed'
import PricingCalc from '../CodeXCommenPages/PricingCalc'
import WhyMattersCodeX from '../CodeXCommenPages/WhyMattersCodeX'
import BoosterCodeX from '../CodeXCommenPages/BoosterCodeX'

import PoweredByCodeX from '../CodeXCommenPages/PowerByCodeX'

import ApproachCodeX from '../CodeXCommenPages/ApprochCodeX'
import CTA from '../../../../CommonComps/CTA'
import UniquePackage from '../CodeXCommenPages/UniquePackage'
import QandA from '../../../../CommonComps/QandA/QandA'
import ReviewsCodeX from '../CodeXCommenPages/ReviewsCodeX'

import Footer from '../../../../CommonComps/Footer/Footer'

//Data Imports
import { QACodeX } from '../../../../Data/QueANDAns'
import {  CodeXTestimonalData } from '../../../../Data/TestimonalData'
import { integrationUpdatesData } from '../../../../Data/ServicesData/CodeXData/MLandUpdatesData'


const IntegrationUpdates = () => {
  return (
    <div className='w-full'>
        <Nav/>
        <HeroCodeX page={integrationUpdatesData.heroSection}/>
        <WhyNeed page={integrationUpdatesData.whyNeedSection}/>
        <PricingCalc page={integrationUpdatesData.pricingCalc} />
        <WhyMattersCodeX page={integrationUpdatesData.whySection}/>  
        <BoosterCodeX page={integrationUpdatesData.boostSection}/>
        {/* <PoweredByCodeX page={integrationUpdatesData.poweredBySection}/> */}
        <ApproachCodeX page={integrationUpdatesData.approachSection}/>

        <CTA heading = {"Get a custom quote for your Custom Design Now!"} />
        
        <UniquePackage page={integrationUpdatesData.customPackage}/>

        <QandA page={QACodeX.CustomDesign} para = {"Explain that these services specifically target the optimization of online stores to increase their visibility in search engine results, focusing on product-specific keywords, improved user experience, and conversion rate optimization. "}/>

        <ReviewsCodeX page={integrationUpdatesData.reviewSection} testimonals={CodeXTestimonalData.customDesign} />


        <Footer/>
    </div>
  )
}

export default IntegrationUpdates