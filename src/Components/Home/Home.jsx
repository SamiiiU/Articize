import React from 'react'
import Hero from './HomeComps/Hero';
import PathToSuccess from './HomeComps/PathToSuccess';
import PowerOfMarketing from './HomeComps/PowerOfMarketing';
import Revenue from './HomeComps/Revenue';
import KPIoptimization from './HomeComps/KPIoptimization';
import CTA from '../../CommonComps/CTA';
import Reviews from './HomeComps/ReviewsHome';
import ReviewsHome from './HomeComps/ReviewsHome';

const Home = () => {

  return (
    <div className='w-full  '>
        <Hero/>
        <PathToSuccess/>
        <PowerOfMarketing/>
        <Revenue/>
        <KPIoptimization/>

        <CTA/>

        <ReviewsHome/>

        
    </div>
  )
}


export default Home;