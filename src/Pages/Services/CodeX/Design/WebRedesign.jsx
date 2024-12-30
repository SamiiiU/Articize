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
import { WebRedesignData } from '../../../../Data/ServicesData/CodeXData/DesignData'


const WebRedesign = () => {
  return (
    <div className='w-full'>
        <Nav/>
        <HeroCodeX page={WebRedesignData.heroSection}/>
        <WhyNeed page={WebRedesignData.whyNeedSection}/>
        <PricingCalc page={WebRedesignData.pricingCalc} />
        <WhyMattersCodeX page={WebRedesignData.whySection}/>  
        <BoosterCodeX page={WebRedesignData.boostSection}/>
        {/* <PoweredByCodeX page={customDesignData.poweredBySection}/> */}
        <ApproachCodeX page={WebRedesignData.approachSection}/>

        <CTA heading = {"Get a custom quote for your Custom Design Now!"} />
        
        <UniquePackage page={WebRedesignData.customPackage}/>

        <QandA page={QACodeX.CustomDesign} para = {"Explain that these services specifically target the optimization of online stores to increase their visibility in search engine results, focusing on product-specific keywords, improved user experience, and conversion rate optimization. "}/>

        <ReviewsCodeX page={WebRedesignData.reviewSection} testimonals={CodeXTestimonalData.customDesign} />


        <Footer/>
    </div>
  )
}

export default WebRedesign