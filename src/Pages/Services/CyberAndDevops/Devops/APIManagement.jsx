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
import { apiManagementData } from '../../../../Data/ServicesData/CyberAndDevOpsData/DevopsData'

const APIManagement = () => {
  return (
    <div className='w-full'>
      <Nav/>

      <HeroCyberandDevops page={apiManagementData.heroSection} />
      <CustomPricingCyberandDevops page={apiManagementData.customPricing}/>
      <BuiltPurpose page={apiManagementData.builtPurpose}/>
      <MakeBetter page={apiManagementData.makeBetter}/>
      <RealResults page={apiManagementData.realResults}/>
      <WeGot page={apiManagementData.weGot}/>
      <WhyNeedCyberAndDevops page={apiManagementData.whyNeed}/>

      <QandA page={QAsma.BasicSMA}/>

      <Footer />
    </div>
  )
}

export default APIManagement