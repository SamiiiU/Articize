import React, { useContext } from 'react'
import { ContextAPI } from '../../../GlobalProvider/ContextAPI'
import Nav from '../../../CommonComps/Nav/Nav'
import Hero from './SeoCommon/Hero'
import WhyComp from './SeoCommon/WhyComp'

const EcommerceSEO = () => {
    const {states} = useContext(ContextAPI)
  return (
    <div className='w-full '>
        <Nav/>
        <Hero/>
        <WhyComp/>
    </div>
  )
}

export default EcommerceSEO