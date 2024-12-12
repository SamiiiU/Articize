import React, { useContext, useEffect } from 'react'
import { ContextAPI } from '../../../GlobalProvider/ContextAPI'
import Nav from '../../../CommonComps/Nav/Nav'
import Hero from './SeoCommon/Hero'
import WhyComp from './SeoCommon/WhyComp'
import { SEOData } from '../../../Data/ServicesData/SEOandPPC'
import OurApproach from './SeoCommon/OurApproach'
import CTA from '../../../CommonComps/CTA'
import RealResults from './SeoCommon/RealResults'
import Pricing from './SeoCommon/Pricing'
import Footer from '../../../CommonComps/Footer/Footer'

import BG from '../../../Assets/Images/CommonImages/HeroServices.png'
import Booster from './SeoCommon/Booster'
import PoweredBy from './SeoCommon/PoweredBy'
import QandA from '../../../CommonComps/QandA/QandA'
import { QAEcommerceSEO } from '../../../Data/QueANDAns'

const EcommerceSEO = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className='w-full '>
        <Nav/>
        <Hero page={SEOData.SEO.EcommerceSEO} BG={BG}/>
        <WhyComp page={SEOData.SEO.EcommerceSEO}/>
        <Booster page={SEOData.SEO.EcommerceSEO} />
        <PoweredBy page={SEOData.SEO.EcommerceSEO}/>
        <OurApproach page={SEOData.SEO.EcommerceSEO} />
        
        <CTA heading = {"Get a custom quote for you SEO now!"} />
        <RealResults page={SEOData.SEO.EcommerceSEO}  />

        <QandA page={QAEcommerceSEO} para = {"Explain that these services specifically target the optimization of online stores to increase their visibility in search engine results, focusing on product-specific keywords, improved user experience, and conversion rate optimization."}/>

        <Pricing page={SEOData.SEO.EcommerceSEO} />
        
        <Footer/>
    </div>
  )
}

export default EcommerceSEO