import React from 'react'

import Nav from '../../../../CommonComps/Nav/Nav'

import HeroAI from '../AIandDataScienceCommonPages/HeroAI'
import CustomPricingAIandDataAnalysis from '../AIandDataScienceCommonPages/CustomPricingAIandDataAnalysis'
import DiscoverAIandDataAnalysis from '../AIandDataScienceCommonPages/DiscoverAIandDataAnalysis'
import BuiltPurposeAIandDataAnalysis from '../AIandDataScienceCommonPages/BuiltPurposeAIandDataAnalysis'

import CTA from '../../../../CommonComps/CTA'

import ApproachAI from '../AIandDataScienceCommonPages/ApproachAI'
import ProcessOfAIandDataAnalysis from '../AIandDataScienceCommonPages/ProcessOfAIandDataAnalysis'
import WhyMattersAIandDataAnalysis from '../AIandDataScienceCommonPages/WhyMattersAIandDataAnalysis'

import QandA from '../../../../CommonComps/QandA/QandA'

import Footer from '../../../../CommonComps/Footer/Footer'

//Data Imports
import { QACodeX } from '../../../../Data/QueANDAns'
import { nlpSolutionData } from '../../../../Data/ServicesData/AIandDataAnalysisData/AiData'



const NLPSolutions = () => {
  return (
    <div className='w-full'>
    <Nav/>
    <HeroAI page={nlpSolutionData.heroSection}/>
    <CustomPricingAIandDataAnalysis page={nlpSolutionData.customPricing}/>
    <DiscoverAIandDataAnalysis page={nlpSolutionData.discover}/>

    <BuiltPurposeAIandDataAnalysis page={nlpSolutionData.builtPurpose}/>


    <CTA heading = {"Get a custom quote for your Custom Design Now!"} />

    <ApproachAI page={nlpSolutionData.approachSection}/>

    <ProcessOfAIandDataAnalysis page={nlpSolutionData.process}/>
    
    <WhyMattersAIandDataAnalysis page={nlpSolutionData.whyChoose}/>

    <QandA page={QACodeX.CustomDesign} para = {"Explain that these services specifically target the optimization of online stores to increase their visibility in search engine results, focusing on product-specific keywords, improved user experience, and conversion rate optimization. "}/>

    <Footer/>
    </div>
  )
}

export default NLPSolutions