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
import QandA from '../../../../CommonComps/QandA/QandA'
import ReviewsCodeX from '../CodeXCommenPages/ReviewsCodeX'

import Footer from '../../../../CommonComps/Footer/Footer'

//Data Imports
import { QACodeX } from '../../../../Data/QueANDAns'
import {  CodeXTestimonalData } from '../../../../Data/TestimonalData'
import { customDesignData } from '../../../../Data/ServicesData/CodeXData/DesignData'
import CustomPackage from '../CodeXCommenPages/CustomPackage'
import Pricing from '../CodeXCommenPages/Pricing'


const CustomDesign = () => {
  return (
    <div className='w-full'>
        <Nav/>
        <HeroCodeX page={customDesignData.heroSection}/>
        <CustomPackage page={customDesignData.customPackage}/>
        <WhyNeed page={customDesignData.whyNeedSection}/>
        <PricingCalc page={customDesignData.pricingCalc} />
        
        <WhyMattersCodeX page={customDesignData.whySection}/>  
        {/* <BoosterCodeX page={customDesignData.boostSection}/> */}
        <ApproachCodeX page={customDesignData.approachSection}/>

        <CTA heading = {"Get a custom quote for your Custom Design Now!"} />
        <Pricing page={customDesignData.pricingSection}/>
        
        {/* <UniquePackage page={customDesignData.customPackage}/> */}

        <QandA page={QACodeX.CustomDesign} para = {"Explain that these services specifically target the optimization of online stores to increase their visibility in search engine results, focusing on product-specific keywords, improved user experience, and conversion rate optimization. "}/>

        <ReviewsCodeX page={customDesignData.reviewSection} testimonals={CodeXTestimonalData.customDesign} />


        <Footer/>
    </div>
  )
}

export default CustomDesign