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
import { compilanceManagementData } from '../../../../Data/ServicesData/CyberAndDevOpsData/CyberSecurityData'

const CompilanceManagement = () => {
  return (
    <div className='w-full'>
      <Nav/>

      <HeroCyberandDevops page={compilanceManagementData.heroSection} />
      <CustomPricingCyberandDevops page={compilanceManagementData.customPricing}/>
      <BuiltPurpose page={compilanceManagementData.builtPurpose}/>
      <MakeBetter page={compilanceManagementData.makeBetter}/>
      <RealResults page={compilanceManagementData.realResults}/>
      <WeGot page={compilanceManagementData.weGot}/>
      <WhyNeedCyberAndDevops page={compilanceManagementData.whyNeed}/>

      <QandA page={QAsma.BasicSMA}/>

      <Footer />
    </div>
  )
}

export default CompilanceManagement