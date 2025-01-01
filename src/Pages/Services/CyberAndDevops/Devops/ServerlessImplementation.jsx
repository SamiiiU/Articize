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
import { penetrationTestingData } from '../../../../Data/ServicesData/CyberAndDevOpsData/CyberSecurityData'

const ServerlessImplementation = () => {
  return (
    <div className='w-full'>
      <Nav/>

      <HeroCyberandDevops page={penetrationTestingData.heroSection} />
      <CustomPricingCyberandDevops page={penetrationTestingData.customPricing}/>
      <BuiltPurpose page={penetrationTestingData.builtPurpose}/>
      <MakeBetter page={penetrationTestingData.makeBetter}/>
      <RealResults page={penetrationTestingData.realResults}/>
      <WeGot page={penetrationTestingData.weGot}/>
      <WhyNeedCyberAndDevops page={penetrationTestingData.whyNeed}/>

      <QandA page={QAsma.BasicSMA}/>

      <Footer />
    </div>
  )
}

export default ServerlessImplementation