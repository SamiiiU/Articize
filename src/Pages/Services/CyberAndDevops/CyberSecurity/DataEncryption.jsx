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
import { encryptionSolutionsData } from '../../../../Data/ServicesData/CyberAndDevOpsData/CyberSecurityData'

const DataEncryption = () => {
  return (
    <div className='w-full'>
      <Nav/>

      <HeroCyberandDevops page={encryptionSolutionsData.heroSection} />
      <CustomPricingCyberandDevops page={encryptionSolutionsData.customPricing}/>
      <BuiltPurpose page={encryptionSolutionsData.builtPurpose}/>
      <MakeBetter page={encryptionSolutionsData.makeBetter}/>
      <RealResults page={encryptionSolutionsData.realResults}/>
      <WeGot page={encryptionSolutionsData.weGot}/>
      <WhyNeedCyberAndDevops page={encryptionSolutionsData.whyNeed}/>

      <QandA page={QAsma.BasicSMA}/>

      <Footer />
    </div>
  )
}

export default DataEncryption