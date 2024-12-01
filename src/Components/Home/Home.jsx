import React from 'react'
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

const Home = () => {

  return (
    <div className='w-full  '>
        <Nav/>
        <Hero/>
        <PathToSuccess/>
        <PowerOfMarketing/>
        <Revenue/>
        <KPIoptimization/>

        <CTA heading = {"Start Your Free Project Consultation Today!"} />

        <ReviewsHome/>
        <Footer/>

        
    </div>
  )
}


export default Home;