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
import { firewallData } from '../../../../Data/ServicesData/CyberAndDevOpsData/CyberSecurityData'

const Firewall = () => {
  return (
    <div className='w-full'>
      <Nav/>

      <HeroCyberandDevops page={firewallData.heroSection} />
      <CustomPricingCyberandDevops page={firewallData.customPricing}/>
      <BuiltPurpose page={firewallData.builtPurpose}/>
      <MakeBetter page={firewallData.makeBetter}/>
      <RealResults page={firewallData.realResults}/>
      <WeGot page={firewallData.weGot}/>
      <WhyNeedCyberAndDevops page={firewallData.whyNeed}/>

      <QandA page={QAsma.BasicSMA}/>

      <Footer />
    </div>
  )
}

export default Firewall