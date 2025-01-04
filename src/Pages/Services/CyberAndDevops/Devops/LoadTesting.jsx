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
import { loadTestingData } from '../../../../Data/ServicesData/CyberAndDevOpsData/DevopsData'

const LoadTesting = () => {
  return (
    <div className='w-full'>
      <Nav/>

      <HeroCyberandDevops page={loadTestingData.heroSection} />
      <CustomPricingCyberandDevops page={loadTestingData.customPricing}/>
      <BuiltPurpose page={loadTestingData.builtPurpose}/>
      <MakeBetter page={loadTestingData.makeBetter}/>
      <RealResults page={loadTestingData.realResults}/>
      <WeGot page={loadTestingData.weGot}/>
      <WhyNeedCyberAndDevops page={loadTestingData.whyNeed}/>

      <QandA page={QAsma.BasicSMA}/>

      <Footer />
    </div>
  )
}

export default LoadTesting