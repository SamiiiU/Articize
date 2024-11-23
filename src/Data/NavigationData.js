
import EcommerceSEO from "../Components/Services/SEO/EcommerceSEO"


 
    export const  NavigationData = {
        // SEO & PPC 
        SEO : ["E-commerce SEO" , "Local SEO" , "Technical SEO" , "Content SEO" , "International SEO" , "SEO Audits"],
        PPC : ["Google Ads PPC" , "Amazon PPC" , "Facebook Instagram PPC" , "Google Shopping PPC" , "Linkedin PPC" , "Youtube PPC"],
        SMA : ["Basic Social Media Advertising" , "Programmatic Advertising" , "Enterprise (SMM)" , "Social Commerce Strategy" , "Social Media Brand Audits"],

        // DEV X 

        design : ["Custom Website Design" , "E-Commerce Website Design" , "Website Redesign" ,"Web App Design" , "Custom Theme Development For CMS" , "Interactive Prototyping" , "User Experience Optimization Service"],

        developement : ["Responsive Website Development" , "Web Application Development" , "Shopify E-commerce Development" , "AR/VR Development" , "API Development and Integration" ,"Custom Software Development" , "Mobile App Development"],

        MandU : ["Web Infrastructure & Maintenance" , "Security Monitoring and Updates" , "Backup & Recovery Solutions" ,"Integration Updates" ,"Technical SEO Maintenance" , "Performance Optimization"],

        // CYBERSECURITY & DEVOPS

        cyberSecurity : ["Penetration Testing" , "Vulnerability Assessment and Management" , "Incident Response and Recovery" , "Malware Removal and Prevention" , "Firewall and Network Security Setup" ,"Data Encryption Solutions" , "Compliance Management"],

        devOps : ["Serverless Architecture Implementation" , "API Management and Automation" , "Automated Web Deployment" , "Cloud-Native Web Application" , "Load Testing and Performance Optimization" , "Multi-cloud Web Infrastructure Setup" , "Web Application Security" , "App Store Optimization and Deployment "],


        // AI INTEGRATION & DATA ANALYSIS

        AI : ["AI and GPT Integration", "AI-Driven Personalization Engines" , "AI-Powered Automation & Optimization" , "Natural Language Processing (NLP) Solutions" , "AI-Powered Voice Interfaces"],

        dataAnalysis : ["Power Automate", "Power BI Dashboards" , "Excel Insights" , "Predictive Analytics & Machine Learning" , "Data Cleaning & Preprocessing" , "Big Data Analytics Solutions" , "Real-time Data Analytics" , "Customer & Market Segmentation Analysis"],
    } 


    export const mainNavData = 
        {SEOandPPC : [
             { heading : "SEO" , 
                types : [
                    { path: '/ecommerce-seo', type: 'E-commerce SEO' },
                    { path: '/local-seo', type: 'Local SEO' },
                    { path: '/technical-seo', type: 'Technical SEO' },
                    { path: '/content-seo', type: 'Content SEO' },
                    { path: '/international-seo', type: 'International SEO' },
                    { path: '/seo-audits', type: 'SEO Audits' },
                ]
            },

             { heading : "PPC" 
                , types : [
                    { path: '/google-ads-ppc', type: 'Google Ads PPC' },
                    { path: '/amazon-ppc', type: 'Amazon PPC' },
                    { path: '/facebook-instagram-ppc', type: 'Facebook Instagram PPC' },
                    { path: '/google-shopping-ppc', type: 'Google Shopping PPC' },
                    { path: '/linkedin-ppc', type: 'LinkedIn PPC' },
                    { path: '/youtube-ppc', type: 'YouTube PPC' },
                ]
            },

             { heading : "SMA" , 
                types : [
                    
                    { path: '/basic-social-media-advertising', type: "Basic Social Media Advertising" },
                    { path: '/programmatic-advertising', type: "Programmatic Advertising" },
                    { path: '/enterprise-smm', type: "Enterprise (SMM)" },
                    { path: '/social-commerce-strategy', type: "Social Commerce Strategy" },
                    { path: '/social-media-brand-audits', type: "Social Media Brand Audits" },
                    ]},

             { IMG : 'https://extrabrains.net/wp-content/uploads/2019/06/business-growth-strategy.png'},
            ],

        DevX : [     
            { heading : "Design" , 
                types : [
                    { path: '/custom-website-design', type: 'Custom Website Design' },
                    { path: '/ecommerce-website-design', type: 'E-Commerce Website Design' },
                    { path: '/website-redesign', type: 'Website Redesign' },
                    { path: '/custom-theme', type: 'Custom Theme Development for CMS' },
                    { path: '/interactive-prototyping', type: 'Interactive Prototyping' },
                    { path: '/ux-optimization', type: 'User Experience Optimization Service' },
                   ]},

             { heading : "Development" , 
                types : [ 
                    { path: '/responsive-website-development', type: 'Responsive Website Development' },
                    { path: '/web-application-development', type: 'Web Application Development' },
                    { path: '/shopify-ecommerce-development', type: 'Shopify E-commerce Development' },
                    { path: '/ar-vr-development', type: 'AR/VR Development' },
                    { path: '/api-development-and-integration', type: 'API Development and Integration' },
                    { path: '/custom-software-development', type: 'Custom Software Development' },
                    { path: '/mobile-app-development', type: 'Mobile App Development' },]},

             { heading : "MandU" , 
                types : [
                    { path: '/web-infrastructure-maintenance', type: 'Web Infrastructure & Maintenance' },
                    { path: '/security-monitoring-and-updates', type: 'Security Monitoring and Updates' },
                    { path: '/backup-and-recovery-solutions', type: 'Backup & Recovery Solutions' },
                    { path: '/integration-updates', type: 'Integration Updates' },
                    { path: '/technical-seo-maintenance', type: 'Technical SEO Maintenance' },
                    { path: '/performance-optimization', type: 'Performance Optimization' },]},

             { IMG : 'https://extrabrains.net/wp-content/uploads/2019/06/business-growth-strategy.png'},
        ],

        CSDEVOPS : [

            { heading : "Cyber Security" , 
                types : [
                    { path: '/penetration-testing', type: 'Penetration Testing' },
                    { path: '/vulnerability-assessment-and-management', type: 'Vulnerability Assessment and Management' },
                    { path: '/incident-response-and-recovery', type: 'Incident Response and Recovery' },
                    { path: '/malware-removal-and-prevention', type: 'Malware Removal and Prevention' },
                    { path: '/firewall-and-network-security-setup', type: 'Firewall and Network Security Setup' },
                    { path: '/data-encryption-solutions', type: 'Data Encryption Solutions' },
                    { path: '/compliance-management', type: 'Compliance Management' },]},

             { heading : "DevOps" , types : [
                { path: '/serverless-architecture-implementation', type: 'Serverless Architecture Implementation' },
                { path: '/api-management-and-automation', type: 'API Management and Automation' },
                { path: '/automated-web-deployment', type: 'Automated Web Deployment' },
                { path: '/cloud-native-web-application', type: 'Cloud-Native Web Application' },
                { path: '/load-testing-and-performance-optimization', type: 'Load Testing and Performance Optimization' },
                { path: '/multi-cloud-web-infrastructure-setup', type: 'Multi-cloud Web Infrastructure Setup' },
                { path: '/web-application-security', type: 'Web Application Security' },
                { path: '/app-store-optimization-and-deployment', type: 'App Store Optimization and Deployment' },]},

             { IMG : 'https://extrabrains.net/wp-content/uploads/2019/06/business-growth-strategy.png'},

        ],

        AIandDA : [

            { heading : "Artificial Intelligence (AI)" , 
                types : [
                    { path: '/ai-and-gpt-integration', type: 'AI and GPT Integration' },
                    { path: '/ai-driven-personalization-engines', type: 'AI-Driven Personalization Engines' },
                    { path: '/ai-powered-automation-and-optimization', type: 'AI-Powered Automation & Optimization' },
                    { path: '/natural-language-processing-nlp-solutions', type: 'Natural Language Processing (NLP) Solutions' },
                    { path: '/ai-powered-voice-interfaces', type: 'AI-Powered Voice Interfaces' },
            ]},

             { heading : "Data Analysis" , 
                types : [
                    { path: '/power-automate', type: 'Power Automate' },
                    { path: '/power-bi-dashboards', type: 'Power BI Dashboards' },
                    { path: '/excel-insights', type: 'Excel Insights' },
                    { path: '/predictive-analytics-and-machine-learning', type: 'Predictive Analytics & Machine Learning' },
                    { path: '/data-cleaning-and-preprocessing', type: 'Data Cleaning & Preprocessing' },
                    { path: '/big-data-analytics-solutions', type: 'Big Data Analytics Solutions' },
                    { path: '/real-time-data-analytics', type: 'Real-time Data Analytics' },
                    { path: '/customer-and-market-segmentation-analysis', type: 'Customer & Market Segmentation Analysis' },
                ]},

             { IMG : 'https://extrabrains.net/wp-content/uploads/2019/06/business-growth-strategy.png'},

        ],

    }


   export const mobNavigationData = [
        //SEO & PPC
        {
          mainHeading: "SEO & PPC",
          subHeadings: [
            {
              title: "Search Engine Optimization (SEO)",
              links: [
                { path: '/ecommerce-seo', type: 'E-commerce SEO' },
                { path: '/local-seo', type: 'Local SEO' },
                { path: '/technical-seo', type: 'Technical SEO' },
                { path: '/content-seo', type: 'Content SEO' },
                { path: '/international-seo', type: 'International SEO' },
                { path: '/seo-audits', type: 'SEO Audits' },
              ],
            },
            {
              title: "Pay Per Click (PPC)",
              links: [
                { path: '/google-ads-ppc', type: 'Google Ads PPC' },
                    { path: '/amazon-ppc', type: 'Amazon PPC' },
                    { path: '/facebook-instagram-ppc', type: 'Facebook Instagram PPC' },
                    { path: '/google-shopping-ppc', type: 'Google Shopping PPC' },
                    { path: '/linkedin-ppc', type: 'LinkedIn PPC' },
                    { path: '/youtube-ppc', type: 'YouTube PPC' },
              ],
            },
            {
                title: "Social Media Advertising (SMA)",
                links: [
                    { path: '/basic-social-media-advertising', type: "Basic Social Media Advertising" },
                    { path: '/programmatic-advertising', type: "Programmatic Advertising" },
                    { path: '/enterprise-smm', type: "Enterprise (SMM)" },
                    { path: '/social-commerce-strategy', type: "Social Commerce Strategy" },
                    { path: '/social-media-brand-audits', type: "Social Media Brand Audits" },
                ],
              },
          ],
        },
        //Dev X 
        {
          mainHeading: "DevX",
          subHeadings: [
            {
              title: "Design",
              links: [
                { path: '/custom-website-design', type: 'Custom Website Design' },
                { path: '/ecommerce-website-design', type: 'E-Commerce Website Design' },
                { path: '/website-redesign', type: 'Website Redesign' },
                { path: '/custom-theme', type: 'Custom Theme Development for CMS' },
                { path: '/interactive-prototyping', type: 'Interactive Prototyping' },
                { path: '/ux-optimization', type: 'User Experience Optimization Service' },
              ],
            },
            {
              title: "Development",
              links: [
                { path: '/responsive-website-development', type: 'Responsive Website Development' },
                    { path: '/web-application-development', type: 'Web Application Development' },
                    { path: '/shopify-ecommerce-development', type: 'Shopify E-commerce Development' },
                    { path: '/ar-vr-development', type: 'AR/VR Development' },
                    { path: '/api-development-and-integration', type: 'API Development and Integration' },
                    { path: '/custom-software-development', type: 'Custom Software Development' },
                    { path: '/mobile-app-development', type: 'Mobile App Development' },
              ],
            },
            {
                title: "Maintainance & Updates",
                links: [
                    { path: '/web-infrastructure-maintenance', type: 'Web Infrastructure & Maintenance' },
                    { path: '/security-monitoring-and-updates', type: 'Security Monitoring and Updates' },
                    { path: '/backup-and-recovery-solutions', type: 'Backup & Recovery Solutions' },
                    { path: '/integration-updates', type: 'Integration Updates' },
                    { path: '/technical-seo-maintenance', type: 'Technical SEO Maintenance' },
                    { path: '/performance-optimization', type: 'Performance Optimization' },
                ],
              },
          ],
        },
        // Cyber Security & Devops
        {
            mainHeading: "Cyber Security & Devops",
            subHeadings: [
              {
                title: "Cyber Security",
                links: [
                    { path: '/penetration-testing', type: 'Penetration Testing' },
                    { path: '/vulnerability-assessment-and-management', type: 'Vulnerability Assessment and Management' },
                    { path: '/incident-response-and-recovery', type: 'Incident Response and Recovery' },
                    { path: '/malware-removal-and-prevention', type: 'Malware Removal and Prevention' },
                    { path: '/firewall-and-network-security-setup', type: 'Firewall and Network Security Setup' },
                    { path: '/data-encryption-solutions', type: 'Data Encryption Solutions' },
                    { path: '/compliance-management', type: 'Compliance Management' },
                ],
              },
              {
                title: "Devops",
                links: [
                    { path: '/serverless-architecture-implementation', type: 'Serverless Architecture Implementation' },
                    { path: '/api-management-and-automation', type: 'API Management and Automation' },
                    { path: '/automated-web-deployment', type: 'Automated Web Deployment' },
                    { path: '/cloud-native-web-application', type: 'Cloud-Native Web Application' },
                    { path: '/load-testing-and-performance-optimization', type: 'Load Testing and Performance Optimization' },
                    { path: '/multi-cloud-web-infrastructure-setup', type: 'Multi-cloud Web Infrastructure Setup' },
                    { path: '/web-application-security', type: 'Web Application Security' },
                    { path: '/app-store-optimization-and-deployment', type: 'App Store Optimization and Deployment' },
                ],
              },
              
            ],
          },
        // AI & Data Analysis
        {
            mainHeading: "AI & Data Analysis",
            subHeadings: [
              {
                title: "Artificial Intelligence (AI)",
                links: [
                    { path: '/ai-and-gpt-integration', type: 'AI and GPT Integration' },
                    { path: '/ai-driven-personalization-engines', type: 'AI-Driven Personalization Engines' },
                    { path: '/ai-powered-automation-and-optimization', type: 'AI-Powered Automation & Optimization' },
                    { path: '/natural-language-processing-nlp-solutions', type: 'Natural Language Processing (NLP) Solutions' },
                    { path: '/ai-powered-voice-interfaces', type: 'AI-Powered Voice Interfaces' },
                ],
              },
              {
                title: "Data Analysis",
                links: [
                    { path: '/power-automate', type: 'Power Automate' },
                    { path: '/power-bi-dashboards', type: 'Power BI Dashboards' },
                    { path: '/excel-insights', type: 'Excel Insights' },
                    { path: '/predictive-analytics-and-machine-learning', type: 'Predictive Analytics & Machine Learning' },
                    { path: '/data-cleaning-and-preprocessing', type: 'Data Cleaning & Preprocessing' },
                    { path: '/big-data-analytics-solutions', type: 'Big Data Analytics Solutions' },
                    { path: '/real-time-data-analytics', type: 'Real-time Data Analytics' },
                    { path: '/customer-and-market-segmentation-analysis', type: 'Customer & Market Segmentation Analysis' },
                ],
              },
              
            ],
          },  
      ];
      