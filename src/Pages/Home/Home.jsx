import React, { useEffect } from 'react'
import Hero from './HomeComps/Hero';
import PathToSuccess from './HomeComps/PathToSuccess';
import PowerOfMarketing from './HomeComps/PowerOfMarketing';
import Revenue from './HomeComps/Revenue';
import KPIoptimization from './HomeComps/KPIoptimization';
import CTA from './HomeComps/CTA';
import Reviews from './HomeComps/ReviewsHome';
import ReviewsHome from './HomeComps/ReviewsHome';
import Footer from '../../CommonComps/Footer/Footer';
import Nav from '../../CommonComps/Nav/Nav';
import FlipCard from '../../Prebuild_Components/FlipCard/FlipCard';
import BusinessGoals from './HomeComps/BusinessGoals';
import FuelingInnovation from './HomeComps/FuelingInnovation';
import InsideCompany from './HomeComps/InsideCompany';
import QandA from '../../CommonComps/QandA/QandA';
import { QAhome } from '../../Data/QueANDAns';
import SolutionChart from './HomeComps/SolutionChart';
import DeliveryProcess from './HomeComps/DeliveryProcess';
import DriveTraffic from './HomeComps/DriveTraffic';
import WhatIs from './HomeComps/WhatIs';
import { Helmet } from 'react-helmet';
import Trust from './HomeComps/Trust';
import OutCome from './HomeComps/OutCome';
import BundledServices from './HomeComps/BundledServices';
import StrategyToScale from './HomeComps/StrategyToScale';
import CaseStudies from './HomeComps/CaseStudies';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className='w-full  '>
        <Helmet >
          <title>DEVXCLOUD - HOME</title>
        </Helmet>
        <Nav/>
        <Hero/>
        <SolutionChart/>
        <Trust/>

        <OutCome/>

        <CTA 
        heading={"Not Sure What You Need? <br/> Let’s Figure It Out Together."} 
        para={"We’ll take a look at your business, break down what’s working <br/> what’s holding you back, and show you exactly how to scale <strong> — </strong> without wasted time or money.<br/> No fluff, no pressure <strong> — </strong> just a clear path to growth."}
        cta={"Get My Custom Growth Plan"}
        />

        <BundledServices/>

        
        <StrategyToScale/>

        <CaseStudies/>
        <QandA page={QAhome}/>
        {/* <KPIoptimization/> */}

        <CTA 
        heading = {" Let’s Build a Business That Grows Itself"} 
        para={"Your business deserves to grow without depending on your time and energy. With the right systems, it can attract customers, deliver consistently, and scale—without burning you out. Let’s make that happen."} 
        cta={"Get My Growth Blueprint"}
        />
        {/* <InsideCompany/>
        <ReviewsHome/> */}
        
        <Footer/>

        
    </div>
  )
}


export default Home;