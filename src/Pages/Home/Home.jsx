import React, { useEffect } from 'react'
import Hero from './HomeComps/Hero';
import PathToSuccess from './HomeComps/PathToSuccess';
import PowerOfMarketing from './HomeComps/PowerOfMarketing';
import Revenue from './HomeComps/Revenue';
import KPIoptimization from './HomeComps/KPIoptimization';
import CTA from '../../CommonComps/CTA';
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

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className='w-full  '>
        <Nav/>
        <Hero/>
        <SolutionChart/>
        <DeliveryProcess/>
        <DriveTraffic/>
        <WhatIs/>
        {/* <PathToSuccess/> */}
        <PowerOfMarketing/>
        {/* <FuelingInnovation/> */}
        <Revenue/>
        {/* <BusinessGoals/> */}
        <QandA page={QAhome}/>
        {/* <KPIoptimization/> */}

        <CTA heading = {"Start Your Free Project Consultation Today!"} />
        <InsideCompany/>
        <ReviewsHome/>
        
        <Footer/>

        
    </div>
  )
}


export default Home;