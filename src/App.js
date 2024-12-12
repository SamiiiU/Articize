import React from "react";
import Home from "./Pages/Home/Home.jsx";

import { Routes, Route, Link } from 'react-router-dom';
import EcommerceSEO from "./Pages/Services/SEO/EcommerceSEO.jsx";
import GlobalProvider from "./GlobalProvider/GlobalProvider.jsx";
import WhyUs from "./Pages/Why_US/WhyUs.jsx";
import GoogleAdsPPC from "./Pages/Services/PPC/GoogleAdsPPC.jsx";



function App() {
  return (
    <GlobalProvider>
      <div className="w-full h-auto overflow-x-hidden font-inter box-border transition-all text-[#313131]">

        <Routes>

          <Route path="/" element={<Home/>} />
          
          {/* SEO PAGES  */}
          <Route path="/ecommerce-seo" element={<EcommerceSEO/>} />

          {/* PPC pages  */}
          <Route path="/google-ads-ppc" element={<GoogleAdsPPC/>}/>


          
          <Route path="/why-us" element={<WhyUs/>} />
        </Routes>

        </div>
    </GlobalProvider>
  );
}

export default App;
