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
import { zeroTrustData } from '../../../../Data/ServicesData/CyberAndDevOpsData/CyberSecurityData'

const ZeroTrust = () => {
  return (
    <div className='w-full'>
      <Nav/>

      <HeroCyberandDevops page={zeroTrustData.heroSection} />
      <CustomPricingCyberandDevops page={zeroTrustData.customPricing}/>
      <BuiltPurpose page={zeroTrustData.builtPurpose}/>
      <MakeBetter page={zeroTrustData.makeBetter}/>
      <RealResults page={zeroTrustData.realResults}/>
      <WeGot page={zeroTrustData.weGot}/>
      <WhyNeedCyberAndDevops page={zeroTrustData.whyNeed}/>

      <QandA page={QAsma.BasicSMA}/>

      <Footer />
    </div>
  )
}

export default ZeroTrust