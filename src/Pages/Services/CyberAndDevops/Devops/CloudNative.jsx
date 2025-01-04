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
import { cloudNativeData } from '../../../../Data/ServicesData/CyberAndDevOpsData/DevopsData'

const CloudNative = () => {
  return (
    <div className='w-full'>
      <Nav/>

      <HeroCyberandDevops page={cloudNativeData.heroSection} />
      <CustomPricingCyberandDevops page={cloudNativeData.customPricing}/>
      <BuiltPurpose page={cloudNativeData.builtPurpose}/>
      <MakeBetter page={cloudNativeData.makeBetter}/>
      <RealResults page={cloudNativeData.realResults}/>
      <WeGot page={cloudNativeData.weGot}/>
      <WhyNeedCyberAndDevops page={cloudNativeData.whyNeed}/>

      <QandA page={QAsma.BasicSMA}/>

      <Footer />
    </div>
  )
}

export default CloudNative