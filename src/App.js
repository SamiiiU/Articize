import React from "react";
import Home from "./Pages/Home/Home.jsx";

import { Routes, Route, Link } from 'react-router-dom';
import EcommerceSEO from "./Pages/Services/SEO/EcommerceSEO.jsx";
import GlobalProvider from "./GlobalProvider/GlobalProvider.jsx";
import WhyUs from "./Pages/Why_US/WhyUs.jsx";
import GoogleAdsPPC from "./Pages/Services/PPC/GoogleAdsPPC.jsx";
import BasicSMA from "./Pages/Services/SMA/BasicSMA.jsx";
import LocalSEO from "./Pages/Services/SEO/LocalSEO.jsx";
import  ContentSEO  from "./Pages/Services/SEO/ContentSEO.jsx";
import  InternationalSEO from "./Pages/Services/SEO/InternationalSEO.jsx";
import  SEOAudit  from "./Pages/Services/SEO/SEOAudit.jsx";
import  VideoSEO  from "./Pages/Services/SEO/VideoSEO.jsx";
import  TechnicalSEO  from "./Pages/Services/SEO/TechnicalSEO.jsx";


// { path: '/ecommerce-seo', type: 'E-commerce SEO' },
//         { path: '/local-seo', type: 'Local SEO' },
//         { path: '/technical-seo', type: 'Technical SEO' },
//         { path: '/content-seo', type: 'Content SEO' },
//         { path: '/international-seo', type: 'International SEO' },
//         { path: '/seo-audits', type: 'SEO Audits' },
//         { path: '/video-seo', type: 'Video SEO' },
function App() {
  return (
    <GlobalProvider>
      <div className="w-full h-auto overflow-x-hidden font-inter box-border transition-all text-[#313131]">

        <Routes>

          <Route path="/" element={<Home/>} />
          
          {/* SEO PAGES  */}
          <Route path="/ecommerce-seo" element={<EcommerceSEO/>} />
          <Route path="/local-seo" element={<LocalSEO/>} />
          <Route path="/technical-seo" element={<TechnicalSEO/>} />
          <Route path="/content-seo" element={<ContentSEO/>} />
          <Route path="/international-seo" element={<InternationalSEO/>} />
          <Route path="/seo-audits" element={<SEOAudit/>} />
          <Route path="/video-seo" element={<VideoSEO/>} />

          {/* PPC pages  */}
          <Route path="/google-ads-ppc" element={<GoogleAdsPPC/>}/>

          {/* SMA pages  */}
          <Route path="/basic-social-media-advertising" element={<BasicSMA/>}/>
          
          <Route path="/why-us" element={<WhyUs/>} />
        </Routes>

        </div>
    </GlobalProvider>
  );
}

export default App;
