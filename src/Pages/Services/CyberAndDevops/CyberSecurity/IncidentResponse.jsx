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
import { incidentResponseData } from '../../../../Data/ServicesData/CyberAndDevOpsData/CyberSecurityData'

const IncidentResponse = () => {
  return (
    <div className='w-full'>
      <Nav/>

      <HeroCyberandDevops page={incidentResponseData.heroSection} />
      <CustomPricingCyberandDevops page={incidentResponseData.customPricing}/>
      <BuiltPurpose page={incidentResponseData.builtPurpose}/>
      <MakeBetter page={incidentResponseData.makeBetter}/>
      <RealResults page={incidentResponseData.realResults}/>
      <WeGot page={incidentResponseData.weGot}/>
      <WhyNeedCyberAndDevops page={incidentResponseData.whyNeed}/>

      <QandA page={QAsma.BasicSMA}/>

      <Footer />
    </div>
  )
}

export default IncidentResponse