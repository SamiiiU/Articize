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
import EcommerceDesign from "./Pages/Services/CodeX/Design/EcommerceDesign.jsx";
import WebRedesign from "./Pages/Services/CodeX/Design/WebRedesign.jsx";
import CMSThemeDesign from "./Pages/Services/CodeX/Design/CMSThemeDesign.jsx";
import ProtoTypingDesign from "./Pages/Services/CodeX/Design/ProtoTypingDesign.jsx";
import UXoptimization from "./Pages/Services/CodeX/Design/UXoptimization.jsx";
import WebAppDesign from "./Pages/Services/CodeX/Design/WebAppDesign.jsx";
import ResponsiveWebDev from "./Pages/Services/CodeX/Developement/ResponsiveWebDev.jsx";
import WebAppDev from "./Pages/Services/CodeX/Developement/WebAppDev.jsx";
import ShopifyDev from "./Pages/Services/CodeX/Developement/ShopifyDev.jsx";
import ARandVRDev from "./Pages/Services/CodeX/Developement/ARandVRDev.jsx";
import APIDev from "./Pages/Services/CodeX/Developement/APIDev.jsx";
import SoftwareDev from "./Pages/Services/CodeX/Developement/SoftwareDev.jsx";
import MobAppDev from "./Pages/Services/CodeX/Developement/MobAppDev.jsx";
import WebMaintenence from "./Pages/Services/CodeX/MLandUpdates/WebMaintenence.jsx";
import SecurityUpdates from "./Pages/Services/CodeX/MLandUpdates/SecurityUpdates.jsx";
import BackupandRecovery from "./Pages/Services/CodeX/MLandUpdates/BackupandRecovery.jsx";
import IntegrationUpdates from "./Pages/Services/CodeX/MLandUpdates/IntegrationUpdates.jsx";
import TechnicalSEOMaintenence from "./Pages/Services/CodeX/MLandUpdates/TechnicalSEOMaintenence.jsx";
import PerformanceOptimization from "./Pages/Services/CodeX/MLandUpdates/PerformanceOptimization.jsx";


function App() {
  return (
    <GlobalProvider>
      <div className="w-full h-auto overflow-x-hidden font-inter box-border transition-all text-[#313131]">

        <Routes>

          <Route path="/" element={<Home/>} />
          
          <>{/* SEO Pages   */}
          <Route path="/ecommerce-seo" element={<EcommerceSEO/>} />
          <Route path="/local-seo" element={<LocalSEO/>} />
          <Route path="/technical-seo" element={<TechnicalSEO/>} />
          <Route path="/content-seo" element={<ContentSEO/>} />
          <Route path="/international-seo" element={<InternationalSEO/>} />
          <Route path="/seo-audits" element={<SEOAudit/>} />
          <Route path="/video-seo" element={<VideoSEO/>} />
          </>
          <>{/* PPC Pages  */}   
          <Route path="/google-ads-ppc" element={<GoogleAdsPPC/>}/>
          <Route path="/amazon-ppc" element={<AmazonPPC/>}/>
          <Route path="/facebook-instagram-ppc" element={<FbInstaPPC/>}/>
          <Route path="/google-shopping-ppc" element={<GShoppingPPC/>}/>
          <Route path="/linkedin-ppc" element={<LinkedinPPC/>}/>
          <Route path="/youtube-ppc" element={<YoutubePPC/>}/>
          <Route path="/dynamic-search-ads-ppc" element={<DynamicSearchPPC/>}/>
          </>          
          <>{/* SMA pages  */}
          <Route path="/basic-social-media-advertising" element={<BasicSMA/>}/>
          <Route path="/programmatic-advertising" element={<ProgrammingSMA/>}/>
          <Route path="/enterprise-smm" element={<EnterpriceSMA/>}/>
          <Route path="/social-commerce-strategy" element={<SocialCommerceSMA/>}/>
          <Route path="/social-media-brand-audits" element={<BrandsAuditsSMA/>}/>
          </>

          {/* CODEX pages  */}

          <> {/* Designing Pages */}
          <Route path="/custom-website-design" element={<CustomDesign/>}/>
          <Route path="/ecommerce-website-design" element={<EcommerceDesign/>}/>
          <Route path="/website-redesign" element={<WebRedesign/>}/>
          <Route path="/custom-theme" element={<CMSThemeDesign/>}/>
          <Route path="/interactive-prototyping" element={<ProtoTypingDesign/>}/>
          <Route path="/ux-optimization" element={<UXoptimization/>}/>
          <Route path="/web-app-design" element={<WebAppDesign/>}/>
          </>

          <> {/* Developement Pages */}
          <Route path="/responsive-website-development" element={<ResponsiveWebDev/>}/>
          <Route path="/web-application-development" element={<WebAppDev/>}/>
          <Route path="/shopify-ecommerce-development" element={<ShopifyDev/>}/>
          <Route path="/ar-vr-development" element={<ARandVRDev/>}/>
          <Route path="/api-development-and-integration" element={<APIDev/>}/>
          <Route path="/custom-software-development" element={<SoftwareDev/>}/>
          <Route path="/mobile-app-development" element={<MobAppDev/>}/>


          
          </>

          <> {/* Maintenence Pages  */}
          {/* heading: "Machine Learnig & Updates",
      types: [
        { path: '/web-infrastructure-maintenance', type: 'Web Infrastructure & Maintenance' },
        { path: '/security-monitoring-and-updates', type: 'Security Monitoring and Updates' },
        { path: '/backup-and-recovery-solutions', type: 'Backup & Recovery Solutions' },
        { path: '/integration-updates', type: 'Integration Updates' },
        { path: '/technical-seo-maintenance', type: 'Technical SEO Maintenance' },
        { path: '/performance-optimization', type: 'Performance Optimization' },]
    }, */}
          <Route path="/web-infrastructure-maintenance" element={<WebMaintenence/>}/>
          <Route path="/security-monitoring-and-updates" element={<SecurityUpdates/>}/>
          <Route path="/backup-and-recovery-solutions" element={<BackupandRecovery/>}/>
          <Route path="/integration-updates" element={<IntegrationUpdates/>}/>
          <Route path="/technical-seo-maintenance" element={<TechnicalSEOMaintenence/>}/>
          <Route path="/performance-optimization" element={<PerformanceOptimization/>}/>

          </>


          
          {/* Why Us Pages  */}
          <Route path="/why-us" element={<WhyUs/>} />



        </Routes>

        </div>
    </GlobalProvider>
  );
}

export default App;
