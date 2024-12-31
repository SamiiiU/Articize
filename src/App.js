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
import PenetrationTesting from "./Pages/Services/CyberAndDevops/CyberSecurity/PenetrationTesting.jsx";
import Vulnerability from "./Pages/Services/CyberAndDevops/CyberSecurity/Vulnerability.jsx";
import IncidentResponse from "./Pages/Services/CyberAndDevops/CyberSecurity/IncidentResponse.jsx";
import Firewall from "./Pages/Services/CyberAndDevops/CyberSecurity/Firewall.jsx";
import DataEncryption from "./Pages/Services/CyberAndDevops/CyberSecurity/DataEncryption.jsx";
import CompilanceManagement from "./Pages/Services/CyberAndDevops/CyberSecurity/CompilanceManagement.jsx";
import ZeroTrust from "./Pages/Services/CyberAndDevops/CyberSecurity/ZeroTrust.jsx";
import ServerlessImplementation from "./Pages/Services/CyberAndDevops/Devops/ServerlessImplementation.jsx";
import APIManagement from "./Pages/Services/CyberAndDevops/Devops/APIManagement.jsx";
import AutomatedWebDeployement from "./Pages/Services/CyberAndDevops/Devops/AutomatedWebDeployement.jsx";
import CloudNative from "./Pages/Services/CyberAndDevops/Devops/CloudNative.jsx";
import LoadTesting from "./Pages/Services/CyberAndDevops/Devops/LoadTesting.jsx";
import MultiCloud from "./Pages/Services/CyberAndDevops/Devops/MultiCloud.jsx";
import KubernetesandDocker from "./Pages/Services/CyberAndDevops/Devops/KubernetesandDocker.jsx";
import AIandGPTIntegration from "./Pages/Services/AIandDataScience/AI/AIandGPTIntegration.jsx";
import AIDrivenPersonalization from "./Pages/Services/AIandDataScience/AI/AIDrivenPersonalization.jsx";
import AIPoweredAutomation from "./Pages/Services/AIandDataScience/AI/AIPoweredAutomation.jsx";
import NLPSolutions from "./Pages/Services/AIandDataScience/AI/NLPSolutions.jsx";
import VoiceInterFaces from "./Pages/Services/AIandDataScience/AI/VoiceInterFaces.jsx";
import ChatBotsandVirtualAssistant from "./Pages/Services/AIandDataScience/AI/ChatBotsandVirtualAssistant.jsx";
import PowerAutomate from "./Pages/Services/AIandDataScience/DataAnalysis/PowerAutomate.jsx";
import PowerBIDashboards from "./Pages/Services/AIandDataScience/DataAnalysis/PowerBIDashboards.jsx";
import ExcelInsights from "./Pages/Services/AIandDataScience/DataAnalysis/ExcelInsights.jsx";
import PredictiveAnalytics from "./Pages/Services/AIandDataScience/DataAnalysis/PredictiveAnalytics.jsx";
import DataCleaning from "./Pages/Services/AIandDataScience/DataAnalysis/DataCleaning.jsx";
import BigDataSolutions from "./Pages/Services/AIandDataScience/DataAnalysis/BigDataSolutions.jsx";
import SentimentAnalysis from "./Pages/Services/AIandDataScience/DataAnalysis/SentimentAnalysis.jsx";


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
          <Route path="/web-infrastructure-maintenance" element={<WebMaintenence/>}/>
          <Route path="/security-monitoring-and-updates" element={<SecurityUpdates/>}/>
          <Route path="/backup-and-recovery-solutions" element={<BackupandRecovery/>}/>
          <Route path="/integration-updates" element={<IntegrationUpdates/>}/>
          <Route path="/technical-seo-maintenance" element={<TechnicalSEOMaintenence/>}/>
          <Route path="/performance-optimization" element={<PerformanceOptimization/>}/>

          </>

          {/* CyberSecurity And Devops  */}

          <> {/* Cyber Security  */}
          <Route path="/penetration-testing" element={<PenetrationTesting/>}/>
          <Route path="/vulnerability-assessment-and-management" element={<Vulnerability/>}/>
          <Route path="/incident-response-and-recovery" element={<IncidentResponse/>}/>
          <Route path="/firewall-and-network-security-setup" element={<Firewall/>}/>
          <Route path="/data-encryption-solutions" element={<DataEncryption/>}/>
          <Route path="/compliance-management" element={<CompilanceManagement/>}/>
          <Route path="/zero-trust-architecture" element={<ZeroTrust/>}/>  
          </>

          <> {/* Devops  */}

          <Route path="/serverless-architecture-implementation" element={<ServerlessImplementation/>}/>
          <Route path="/api-management-and-automation" element={<APIManagement/>}/>
          <Route path="/automated-web-deployment" element={<AutomatedWebDeployement/>}/>
          <Route path="/cloud-native-web-application" element={<CloudNative/>}/>
          <Route path="/load-testing-and-performance-optimization" element={<LoadTesting/>}/>
          <Route path="/multi-cloud-web-infrastructure-setup" element={<MultiCloud/>}/>
          <Route path="/kubernetes-docker-containerization" element={<KubernetesandDocker/>}/>

          </>

          <> {/* AI  */}
          <Route path="/ai-and-gpt-integration" element={<AIandGPTIntegration/>}/>
          <Route path="/ai-driven-personalization-engines" element={<AIDrivenPersonalization/>}/>
          <Route path="/ai-powered-automation-and-optimization" element={<AIPoweredAutomation/>}/>
          <Route path="/natural-language-processing-nlp-solutions" element={<NLPSolutions/>}/>
          <Route path="/ai-powered-voice-interfaces" element={<VoiceInterFaces/>}/>
          <Route path="/ai-chatbots-virtual-assistants" element={<ChatBotsandVirtualAssistant/>}/>
          </>
          
          <> {/* Data Analysis  */}

          <Route path="/power-automate" element={<PowerAutomate/>}/>
          <Route path="/power-bi-dashboards" element={<PowerBIDashboards/>}/>
          <Route path="/excel-insights" element={<ExcelInsights/>}/>
          <Route path="/predictive-analytics-and-machine-learning" element={<PredictiveAnalytics/>}/>
          <Route path="/data-cleaning-and-preprocessing" element={<DataCleaning/>}/>
          <Route path="/big-data-analytics-solutions" element={<BigDataSolutions/>}/>
          <Route path="/sentiment-analysis" element={<SentimentAnalysis/>}/>

          </>
          {/* Why Us Pages  */}
          <Route path="/why-us" element={<WhyUs/>} />



        </Routes>

        </div>
    </GlobalProvider>
  );
}

export default App;
