import React from 'react'
import HeroCyberandDevops from '../CyberAndDevopsCommonPages/HeroCyberandDevops'
import Nav from '../../../../CommonComps/Nav/Nav'
import { penetrationTestingData } from '../../../../Data/ServicesData/CyberAndDevOpsData/CyberSecurityData'
import CustomPricingCyberandDevops from '../CyberAndDevopsCommonPages/CustomPricingCyberandDevops'
import BuiltPurpose from '../CyberAndDevopsCommonPages/BuiltPurpose'

const PenetrationTesting = () => {
  return (
    <div className='w-full'>
      <Nav/>

      <HeroCyberandDevops page={penetrationTestingData.heroSection} />
      <CustomPricingCyberandDevops page={penetrationTestingData.customPricing}/>
      <BuiltPurpose page={penetrationTestingData.builtPurpose}/>
    </div>
  )
}

export default PenetrationTesting