import React from "react";
import Home from "./Components/Home/Home.jsx";

import { Routes, Route, Link } from 'react-router-dom';
import EcommerceSEO from "./Components/Services/SEO/EcommerceSEO.jsx";
import GlobalProvider from "./GlobalProvider/GlobalProvider.jsx";



function App() {
  return (
    <GlobalProvider>
      <div className="w-full h-auto overflow-x-hidden font-inter box-border transition-all text-[#313131]">

        <Routes>

          <Route path="/" element={<Home/>} />
          
          {/* SEO PAGES  */}
          <Route path="/ecommerce-seo" element={<EcommerceSEO/>} />
        </Routes>

        </div>
    </GlobalProvider>
  );
}

export default App;
