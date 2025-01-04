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
import { multiCloudData } from '../../../../Data/ServicesData/CyberAndDevOpsData/DevopsData'

const MultiCloud = () => {
  return (
    <div className='w-full'>
      <Nav/>

      <HeroCyberandDevops page={multiCloudData.heroSection} />
      <CustomPricingCyberandDevops page={multiCloudData.customPricing}/>
      <BuiltPurpose page={multiCloudData.builtPurpose}/>
      <MakeBetter page={multiCloudData.makeBetter}/>
      <RealResults page={multiCloudData.realResults}/>
      <WeGot page={multiCloudData.weGot}/>
      <WhyNeedCyberAndDevops page={multiCloudData.whyNeed}/>

      <QandA page={QAsma.BasicSMA}/>

      <Footer />
    </div>
  )
}

export default MultiCloud