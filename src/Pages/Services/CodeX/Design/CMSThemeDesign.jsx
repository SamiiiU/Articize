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
import { CMSThemeDesignData } from '../../../../Data/ServicesData/CodeXData/DesignData'


const CMSThemeDesign = () => {
  return (
    <div className='w-full'>
        <Nav/>
        <HeroCodeX page={CMSThemeDesignData.heroSection}/>
        <WhyNeed page={CMSThemeDesignData.whyNeedSection}/>
        <PricingCalc page={CMSThemeDesignData.pricingCalc} />
        <WhyMattersCodeX page={CMSThemeDesignData.whySection}/>  
        <BoosterCodeX page={CMSThemeDesignData.boostSection}/>
        {/* <PoweredByCodeX page={customDesignData.poweredBySection}/> */}
        <ApproachCodeX page={CMSThemeDesignData.approachSection}/>

        <CTA heading = {"Get a custom quote for your Custom Design Now!"} />
        
        <UniquePackage page={CMSThemeDesignData.customPackage}/>

        <QandA page={QACodeX.CustomDesign} para = {"Explain that these services specifically target the optimization of online stores to increase their visibility in search engine results, focusing on product-specific keywords, improved user experience, and conversion rate optimization. "}/>

        <ReviewsCodeX page={CMSThemeDesignData.reviewSection} testimonals={CodeXTestimonalData.customDesign} />


        <Footer/>
    </div>
  )
}

export default CMSThemeDesign