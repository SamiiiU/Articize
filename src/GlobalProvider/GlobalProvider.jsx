import React, { useEffect, useState } from 'react'
import { ContextAPI } from './ContextAPI'
import { SEOData } from '../Data/ServicesData/MarketingData/SEODatas';

const GlobalProvider = ({children}) => {
        const [states, setState] = useState('false');
        const [serviceShow , setServiceShow] = useState(SEOData.SEO)
        const [scrwidth, setWidth] = useState(window.innerWidth); 

        useEffect(() => {
          // Function to update the width and visibility of scroll to top button
          const handleResize = () => setWidth(window.innerWidth);
          // Add event listener
          window.addEventListener('resize', handleResize);
          
          // Cleanup function to remove the event listener on unmount
          return () => {
            window.removeEventListener('resize', handleResize)
          };
          
          }, []);
  
  return (
    <ContextAPI.Provider value={{
        states,
        serviceShow,
        scrwidth
 
    }}>
        {children}
    </ContextAPI.Provider>
  )
}

export default GlobalProvider