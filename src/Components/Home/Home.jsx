import React from 'react'
import Hero from './HomeComps/Hero';
import PathToSuccess from './HomeComps/PathToSuccess';
import PowerOfMarketing from './HomeComps/PowerOfMarketing';

const Home = () => {
  return (
    <div className='w-full  '>
        <Hero/>
        <PathToSuccess/>
        <PowerOfMarketing/>
    </div>
  )
}


export default Home;