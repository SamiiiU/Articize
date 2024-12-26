import React from "react";
import Home from "./Pages/Home/Home.jsx";

import { Routes, Route, Link } from 'react-router-dom';
import EcommerceSEO from "./Pages/Services/Marketing/SEO/EcommerceSEO.jsx";
import GlobalProvider from "./GlobalProvider/GlobalProvider.jsx";
import WhyUs from "./Pages/Why_US/WhyUs.jsx";
import GoogleAdsPPC from "./Pages/Services/Marketing/PPC/GoogleAdsPPC.jsx";
import BasicSMA from "./Pages/Services/Marketing/SMA/BasicSMA.jsx";
import LocalSEO from "./Pages/Services/Marketing/SEO/LocalSEO.jsx";
import  ContentSEO  from "./Pages/Services/Marketing/SEO/ContentSEO.jsx";
import  InternationalSEO from "./Pages/Services/Marketing/SEO/InternationalSEO.jsx";
import  SEOAudit  from "./Pages/Services/Marketing/SEO/SEOAudit.jsx";
import  VideoSEO  from "./Pages/Services/Marketing/SEO/VideoSEO.jsx";
import  TechnicalSEO  from "./Pages/Services/Marketing/SEO/TechnicalSEO.jsx";
import CustomDesign from "./Pages/Services/CodeX/Design/CustomDesign.jsx";
import AmazonPPC from "./Pages/Services/Marketing/PPC/AmazonPPC.jsx";
import FbInstaPPC from "./Pages/Services/Marketing/PPC/FbInstaPPC.jsx";
import GShoppingPPC from "./Pages/Services/Marketing/PPC/GShoppingPPC.jsx";
import LinkedinPPC from "./Pages/Services/Marketing/PPC/LinkedinPPC.jsx";
import YoutubePPC from "./Pages/Services/Marketing/PPC/YoutubePPC.jsx";
import DynamicSearchPPC from "./Pages/Services/Marketing/PPC/DynamicSearchPPC.jsx";
import ProgrammingSMA from "./Pages/Services/Marketing/SMA/ProgrammingSMA.jsx";
import EnterpriceSMA from "./Pages/Services/Marketing/SMA/EnterpriceSMA.jsx";
import SocialCommerceSMA from "./Pages/Services/Marketing/SMA/SocialCommerceSMA.jsx";
import { SocialMediaBrandsSMAData } from "./Data/ServicesData/MarketingData/SMAData.js";
import BrandsAuditsSMA from "./Pages/Services/Marketing/SMA/BrandAuditsSMA.jsx";

// heading: "Social Media Advertisement (SMA)",
//       types: [

//         { path: '/basic-social-media-advertising', type: "Basic Social Media Advertising" },
//         { path: '/programmatic-advertising', type: "Programmatic Advertising" },
//         { path: '/enterprise-smm', type: "Enterprise (SMM)" },
//         { path: '/social-commerce-strategy', type: "Social Commerce Strategy" },
//         { path: '/social-media-brand-audits', type: "Social Media Brand Audits" },
//       ]
function App() {
  return (
    <GlobalProvider>
      <div className="w-full h-auto overflow-x-hidden font-inter box-border transition-all text-[#313131]">

        <Routes>

          <Route path="/" element={<Home/>} />
          
          {// SEO PAGES  
          <>
          <Route path="/ecommerce-seo" element={<EcommerceSEO/>} />
          <Route path="/local-seo" element={<LocalSEO/>} />
          <Route path="/technical-seo" element={<TechnicalSEO/>} />
          <Route path="/content-seo" element={<ContentSEO/>} />
          <Route path="/international-seo" element={<InternationalSEO/>} />
          <Route path="/seo-audits" element={<SEOAudit/>} />
          <Route path="/video-seo" element={<VideoSEO/>} />
          </>
           }
          {// PPC pages  
          <>
          <Route path="/google-ads-ppc" element={<GoogleAdsPPC/>}/>
          <Route path="/amazon-ppc" element={<AmazonPPC/>}/>
          <Route path="/facebook-instagram-ppc" element={<FbInstaPPC/>}/>
          <Route path="/google-shopping-ppc" element={<GShoppingPPC/>}/>
          <Route path="/linkedin-ppc" element={<LinkedinPPC/>}/>
          <Route path="/youtube-ppc" element={<YoutubePPC/>}/>
          <Route path="/dynamic-search-ads-ppc" element={<DynamicSearchPPC/>}/>
          </>}

          {/* SMA pages  */}
          <Route path="/basic-social-media-advertising" element={<BasicSMA/>}/>
          <Route path="/programmatic-advertising" element={<ProgrammingSMA/>}/>
          <Route path="/enterprise-smm" element={<EnterpriceSMA/>}/>
          <Route path="/social-commerce-strategy" element={<SocialCommerceSMA/>}/>
          <Route path="/social-media-brand-audits" element={<BrandsAuditsSMA/>}/>

          {/* CODEX pages  */}
          {/* Design pages  */}
          <Route path="/custom-website-design" element={<CustomDesign/>}/>
          
          {/* Why Us Pages  */}
          <Route path="/why-us" element={<WhyUs/>} />



        </Routes>

        </div>
    </GlobalProvider>
  );
}

export default App;
