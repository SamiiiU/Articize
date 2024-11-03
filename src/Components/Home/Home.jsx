import React from 'react'
import Hero from './HomeComps/Hero';
import PathToSuccess from './HomeComps/PathToSuccess';
import PowerOfMarketing from './HomeComps/PowerOfMarketing';
import Revenue from './HomeComps/Revenue';

const Home = () => {
  return (
    <div className='w-full  '>
        <Hero/>
        <PathToSuccess/>
        <PowerOfMarketing/>
        <Revenue/>
    </div>
  )
}


export default Home;