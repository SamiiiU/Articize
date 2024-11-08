import React, { useState } from 'react'
import { ContextAPI } from './ContextAPI'
import { SEOData } from '../Data/ServicesData/SEOandPPC';
import { useNavigate } from 'react-router-dom';

const GlobalProvider = ({children}) => {
        const [states, setState] = useState('false');
        const [serviceShow , setServiceShow] = useState(SEOData.SEO)


  
  return (
    <ContextAPI.Provider value={{
        states,
        serviceShow,
 
    }}>
        {children}
    </ContextAPI.Provider>
  )
}

export default GlobalProvider