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
import { serverLessImplementationData } from '../../../../Data/ServicesData/CyberAndDevOpsData/DevopsData'

const ServerlessImplementation = () => {
  return (
    <div className='w-full'>
      <Nav/>

      <HeroCyberandDevops page={serverLessImplementationData.heroSection} />
      <CustomPricingCyberandDevops page={serverLessImplementationData.customPricing}/>
      <BuiltPurpose page={serverLessImplementationData.builtPurpose}/>
      <MakeBetter page={serverLessImplementationData.makeBetter}/>
      <RealResults page={serverLessImplementationData.realResults}/>
      <WeGot page={serverLessImplementationData.weGot}/>
      <WhyNeedCyberAndDevops page={serverLessImplementationData.whyNeed}/>

      <QandA page={QAsma.BasicSMA}/>

      <Footer />
    </div>
  )
}

export default ServerlessImplementation