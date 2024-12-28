import React from 'react'
import Nav from '../../../../CommonComps/Nav/Nav'
import HeroCodeX from '../CodeXCommenPages/HeroCodeX'
import Footer from '../../../../CommonComps/Footer/Footer'
import BoosterCodeX from '../CodeXCommenPages/BoosterCodeX'
import PoweredByCodeX from '../CodeXCommenPages/PowerByCodeX'
import ApproachCodeX from '../CodeXCommenPages/ApprochCodeX'
import CTA from '../../../../CommonComps/CTA'
import QandA from '../../../../CommonComps/QandA/QandA'
import { QACodeX } from '../../../../Data/QueANDAns'
import {  CodeXTestimonalData } from '../../../../Data/TestimonalData'
import ReviewsCodeX from '../CodeXCommenPages/ReviewsCodeX'
import WhyMattersCodeX from '../CodeXCommenPages/WhyMattersCodeX'
import UniquePackage from '../CodeXCommenPages/UniquePackage'
import { customDesignData } from '../../../../Data/ServicesData/CodeXData/DesignData'
import PricingCalc from '../CodeXCommenPages/PricingCalc'
import WhyNeed from '../CodeXCommenPages/WhyNeed'

const CustomDesign = () => {
  return (
    <div className='w-full'>
        <Nav/>
        <HeroCodeX page={customDesignData.heroSection}/>
        <WhyNeed page={customDesignData.whyNeedSection}/>
        <PricingCalc page={customDesignData.pricingCalc} />
        <WhyMattersCodeX page={customDesignData.whySection}/>  
        <BoosterCodeX page={customDesignData.boostSection}/>
        {/* <PoweredByCodeX page={customDesignData.poweredBySection}/> */}
        <ApproachCodeX page={customDesignData.approachSection}/>

        <CTA heading = {"Get a custom quote for your Custom Design Now!"} />
        
        <UniquePackage page={customDesignData.customPackage}/>

        <QandA page={QACodeX.CustomDesign} para = {"Explain that these services specifically target the optimization of online stores to increase their visibility in search engine results, focusing on product-specific keywords, improved user experience, and conversion rate optimization. "}/>

        <ReviewsCodeX page={customDesignData.reviewSection} testimonals={CodeXTestimonalData.customDesign} />


        <Footer/>
    </div>
  )
}

export default CustomDesign