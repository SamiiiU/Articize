import React from 'react'
import Nav from '../../../../CommonComps/Nav/Nav'
import HeroCodeX from '../CodeXCommenPages/HeroCodeX'
import { HeroCodeXData } from '../../../../Data/ServicesData/CodeXData/HeroData'
import Footer from '../../../../CommonComps/Footer/Footer'
import { whySectionData } from '../../../../Data/ServicesData/CodeXData/WhySectionData'
import BoosterCodeX from '../CodeXCommenPages/BoosterCodeX'
import { BoosterData } from '../../../../Data/ServicesData/CodeXData/BoosterData'
import { PowerByData } from '../../../../Data/ServicesData/CodeXData/PoweredByData'
import PoweredByCodeX from '../CodeXCommenPages/PowerByCodeX'
import ApproachCodeX from '../CodeXCommenPages/ApprochCodeX'
import { ApproachData } from '../../../../Data/ServicesData/CodeXData/ApproachData'
import CTA from '../../../../CommonComps/CTA'
import QandA from '../../../../CommonComps/QandA/QandA'
import { QACodeX } from '../../../../Data/QueANDAns'
import Pricing from '../../SEO/SeoandPPCcommon/Pricing'
import { PricingData } from '../../../../Data/ServicesData/CodeXData/PricingData'
import {  CodeXTestimonalData } from '../../../../Data/TestimonalData'
import ReviewsCodeX from '../CodeXCommenPages/ReviewsCodeX'
import { ReviewItemData } from '../../../../Data/ServicesData/CodeXData/ReviewItemData'
import WhyMattersCodeX from '../CodeXCommenPages/WhyMattersCodeX'
import UniquePackage from '../CodeXCommenPages/UniquePackage'
import { customDesignData } from '../../../../Data/ServicesData/CodeXData/DesignData'

const CustomDesign = () => {
  return (
    <div className='w-full'>
        <Nav/>
        <HeroCodeX page={HeroCodeXData.customDesign}/>
        <WhyMattersCodeX page={whySectionData.customDesign}/>  
        <BoosterCodeX page={BoosterData.customDesign}/>
        <UniquePackage page={customDesignData.customPackage}/>
        <PoweredByCodeX page={PowerByData.customDesign}/>
        <ApproachCodeX page={ApproachData.customDesign}/>

        <CTA heading = {"Get a custom quote for your Custom Design Now!"} />

        <QandA page={QACodeX.CustomDesign} para = {"Explain that these services specifically target the optimization of online stores to increase their visibility in search engine results, focusing on product-specific keywords, improved user experience, and conversion rate optimization. "}/>

        <Pricing page={PricingData.customDesign} />

        <ReviewsCodeX page={ReviewItemData.customDesign} testimonals={CodeXTestimonalData.customDesign} />


        <Footer/>
    </div>
  )
}

export default CustomDesign