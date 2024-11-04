import React, { useState } from 'react'
import HomeData from '../../../Data/HomeData/HomeData'

import '../../../Assets/CustomCSS/Scrollbar.css'
const KPIoptimization = () => {

    const [currKPI , setCurrKPI] = useState(HomeData.Kpi[1]);

    const handleKPI = (e) => {
        setCurrKPI(HomeData.Kpi[e]);
    }

  return (
    <div className='w-full  px-4 sm:px-16 md:px-28 2xl:px-48 py-20 flex flex-col gap-10 text-center items-center '>
        <h1 className='lg:text-[3rem] text-[2.5rem] font-[800]'>Empower Your Business:  <span className='text-[#207CE7]'>Optimize the KPIs </span>  That Matter Most</h1>
        
        <div className='w-full font-bold flex-wrap uppercase flex justify-center items-center sm:gap-x-12 gap-4 '>
            <span className='px-4 py-6 rounded-lg hover:text-[#207ce7] text-[#808b90] cursor-pointer hover:bg-[#EDF5FF]' onClick={() => handleKPI(1)}>Unlock</span>
            <span className='px-4 py-6 rounded-lg hover:text-[#207ce7] text-[#808b90] cursor-pointer hover:bg-[#EDF5FF]' onClick={() => handleKPI(2)}>Transform</span>
            <span className='px-4 py-6 rounded-lg hover:text-[#207ce7] text-[#808b90] cursor-pointer hover:bg-[#EDF5FF]' onClick={() => handleKPI(3)}>Secure</span>
            <span className='px-4 py-6 rounded-lg hover:text-[#207ce7] text-[#808b90] cursor-pointer hover:bg-[#EDF5FF]' onClick={() => handleKPI(4)}>Discover</span>
        </div>
      
        <div className='sm:w-3/4 w-full p-5 rounded-lg shadow-custom-equal text-left'>
            <h1 className='font-bold text-xl mb-5'>{currKPI.heading}</h1>
            <p>{currKPI.description}</p>

            <div className=' overflow-x-scroll custom-scrollbar mt-8 flex justify-between items-center gap-x-6 '>
                {currKPI.features.map((feature , idx) => (
                    <span key={idx} className='p-4 md:w-auto flex md:flex-1 min-w-40 justify-center items-center md:h-20 text-white text-center rounded-3xl bg-[#00448F] font-semibold'>{feature}</span>
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default KPIoptimization
