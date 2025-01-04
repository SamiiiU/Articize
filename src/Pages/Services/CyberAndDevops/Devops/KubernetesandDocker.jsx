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
import { kubernetesData } from '../../../../Data/ServicesData/CyberAndDevOpsData/DevopsData'

const KubernetesandDocker = () => {
  return (
    <div className='w-full'>
      <Nav/>

      <HeroCyberandDevops page={kubernetesData.heroSection} />
      <CustomPricingCyberandDevops page={kubernetesData.customPricing}/>
      <BuiltPurpose page={kubernetesData.builtPurpose}/>
      <MakeBetter page={kubernetesData.makeBetter}/>
      <RealResults page={kubernetesData.realResults}/>
      <WeGot page={kubernetesData.weGot}/>
      <WhyNeedCyberAndDevops page={kubernetesData.whyNeed}/>

      <QandA page={QAsma.BasicSMA}/>

      <Footer />
    </div>
  )
}

export default KubernetesandDocker