import React from 'react'

import Nav from '../../../../CommonComps/Nav/Nav'

import HeroCyberandDevops from '../CyberAndDevopsCommonPages/HeroCyberandDevops'
import CustomPricingCyberandDevops from '../CyberAndDevopsCommonPages/CustomPricingCyberandDevops'
import BuiltPurpose from '../CyberAndDevopsCommonPages/BuiltPurpose'
import MakeBetter from '../CyberAndDevopsCommonPages/MakeBetter'
import RealResults from '../CyberAndDevopsCommonPages/RealResults'
import WeGot from '../CyberAndDevopsCommonPages/WeGot'
import WhyNeedCyberAndDevops from '../CyberAndDevopsCommonPages/WhyNeedCyberAndDevops'
import QandA from '../../../../CommonComps/QandA/QandA'

import Footer from '../../../../CommonComps/Footer/Footer'

import { QAsma } from '../../../../Data/QueANDAns'
import { automatedWebDepData } from '../../../../Data/ServicesData/CyberAndDevOpsData/DevopsData'

const AutomatedWebDeployement = () => {
  return (
    <div className='w-full'>
      <Nav/>

      <HeroCyberandDevops page={automatedWebDepData.heroSection} />
      <CustomPricingCyberandDevops page={automatedWebDepData.customPricing}/>
      <BuiltPurpose page={automatedWebDepData.builtPurpose}/>
      <MakeBetter page={automatedWebDepData.makeBetter}/>
      <RealResults page={automatedWebDepData.realResults}/>
      <WeGot page={automatedWebDepData.weGot}/>
      <WhyNeedCyberAndDevops page={automatedWebDepData.whyNeed}/>

      <QandA page={QAsma.BasicSMA}/>

      <Footer />
    </div>
  )
}

export default AutomatedWebDeployement