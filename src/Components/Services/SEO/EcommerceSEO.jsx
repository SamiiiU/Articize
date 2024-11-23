import React, { useContext } from 'react'
import { ContextAPI } from '../../../GlobalProvider/ContextAPI'
import Nav from '../../../CommonComps/Nav/Nav'
import Hero from './SeoCommon/Hero'
import WhyComp from './SeoCommon/WhyComp'
import { SEOData } from '../../../Data/ServicesData/SEOandPPC'

const EcommerceSEO = () => {
    const {states} = useContext(ContextAPI)
  return (
    <div className='w-full '>
        <Nav/>
        <Hero page={SEOData.SEO.EcommerceSEO}/>
        <WhyComp page={SEOData.SEO.EcommerceSEO}/>
    </div>
  )
}

export default EcommerceSEO