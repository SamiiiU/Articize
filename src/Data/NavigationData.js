

 
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


    export const mainNavData = [
      {navigator : "SEO" , sections : [ { heading : "SEO" , 
        types : [
            { path: '/ecommerce-seo', type: 'E-commerce SEO' },
            { path: '/local-seo', type: 'Local SEO' },
            { path: '/technical-seo', type: 'Technical SEO' },
            { path: '/content-seo', type: 'Content SEO' },
            { path: '/international-seo', type: 'International SEO' },
            { path: '/seo-audits', type: 'SEO Audits' },
            { path: '/voice-search-seo', type: 'Voice Search SEO' },
            { path: '/video-seo', type: 'Video SEO' },
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
            { path: '/dynamic-search-ads', type: 'Dynamic Search Ads' },
            { path: '/discovery-ads', type: 'Discovery Ads' },
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

     { IMG : 'https://img.freepik.com/premium-vector/search-engine-optimization-design_24908-12065.jpg?semt=ais_hybrid'},
    ]} , 

    {navigator : "DEVX" , sections : [{ heading : "Design" , 
      types : [
          { path: '/custom-website-design', type: 'Custom Website Design' },
          { path: '/ecommerce-website-design', type: 'E-Commerce Website Design' },
          { path: '/website-redesign', type: 'Website Redesign' },
          { path: '/custom-theme', type: 'Custom Theme Development for CMS' },
          { path: '/interactive-prototyping', type: 'Interactive Prototyping' },
          { path: '/ux-optimization', type: 'User Experience Optimization Service' },
          { path: '/web-app-design', type: 'Web App Design' },
          { path: '/progressive-web-apps', type: 'Progressive Web Apps' },
          { path: '/headless-cms-development', type: 'Headless CMS Development' },

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

   { heading : "Machine Learnig & Updates" , 
      types : [
          { path: '/web-infrastructure-maintenance', type: 'Web Infrastructure & Maintenance' },
          { path: '/security-monitoring-and-updates', type: 'Security Monitoring and Updates' },
          { path: '/backup-and-recovery-solutions', type: 'Backup & Recovery Solutions' },
          { path: '/integration-updates', type: 'Integration Updates' },
          { path: '/technical-seo-maintenance', type: 'Technical SEO Maintenance' },
          { path: '/performance-optimization', type: 'Performance Optimization' },]},

   { IMG : 'https://c8.alamy.com/comp/2D56311/female-web-developer-creating-program-code-development-of-software-and-programming-concept-full-length-vertical-vector-illustration-2D56311.jpg'},
  ]},
     

  {
    navigator : "CyberSecurity & DevOps" , sections : [
    { heading : "Cyber Security" , 
    types : [
        { path: '/penetration-testing', type: 'Penetration Testing' },
        { path: '/vulnerability-assessment-and-management', type: 'Vulnerability Assessment and Management' },
        { path: '/incident-response-and-recovery', type: 'Incident Response and Recovery' },
        
        { path: '/firewall-and-network-security-setup', type: 'Firewall and Network Security Setup' },
        { path: '/data-encryption-solutions', type: 'Data Encryption Solutions' },
        { path: '/compliance-management', type: 'Compliance Management' },
        { path: '/zero-trust-architecture', type: 'Zero Trust Architecture' },
      ]},

    { heading : "DevOps" , types : [
    { path: '/serverless-architecture-implementation', type: 'Serverless Architecture Implementation' },
    { path: '/api-management-and-automation', type: 'API Management and Automation' },
    { path: '/automated-web-deployment', type: 'Automated Web Deployment' },
    { path: '/cloud-native-web-application', type: 'Cloud-Native Web Application' },
    { path: '/load-testing-and-performance-optimization', type: 'Load Testing and Performance Optimization' },
    { path: '/multi-cloud-web-infrastructure-setup', type: 'Multi-cloud Web Infrastructure Setup' },
    { path: '/kubernetes-docker-containerization', type: 'Kubernetes & Docker Containerization' },

    ]},

    { IMG : 'https://media.gettyimages.com/id/910862536/vector/cyber-security-concept-vertical.jpg?s=612x612&w=gi&k=20&c=z-Liy_P063TUdoHrawKFo4lAWspkPlcJnMrlcvUomxw='},

    { IMG : 'https://media.istockphoto.com/id/1204555368/vector/devops-symbol-and-icon-software-development-operations-concept.jpg?s=612x612&w=0&k=20&c=vox0y1wFsoeXRvH_97UkPxLANMX4R-gMbvgMCcdB_F0='},
  ] }, 

    {navigator : "AI & Data Science " , sections : [
      { heading : "Artificial Intelligence (AI)" , 
          types : [
              { path: '/ai-and-gpt-integration', type: 'AI and GPT Integration' },
              { path: '/ai-driven-personalization-engines', type: 'AI-Driven Personalization Engines' },
              { path: '/ai-powered-automation-and-optimization', type: 'AI-Powered Automation & Optimization' },
              { path: '/natural-language-processing-nlp-solutions', type: 'Natural Language Processing (NLP) Solutions' },
              { path: '/ai-powered-voice-interfaces', type: 'AI-Powered Voice Interfaces' },
              { path: '/ai-chatbots-virtual-assistants', type: 'AI Chatbots & Virtual Assistants' },
 
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
              { path: '/real-time-data-analytics', type: 'Real-time Data Analytics' },
              { path: '/sentiment-analysis', type: 'Sentiment Analysis' },
 
          ]},
 
       { IMG : 'https://www.shutterstock.com/image-vector/concept-illustration-on-topic-artificial-600nw-1743263447.jpg'},
       { IMG : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ZJmSi_wplFO7qPmSbhLC7QkXYGzIo0N-Bw&s'},]
      }



]
        


   export const mobNavigationData = [
        //SEO & PPC
        {
          mainHeading: "SEO & PPC",
          subHeadings: [
            {
              title: "Search Engine Optimization (SEO)",
              links: [
                    { path: '/google-ads-ppc', type: 'Google Ads PPC' },
                    { path: '/amazon-ppc', type: 'Amazon PPC' },
                    { path: '/facebook-instagram-ppc', type: 'Facebook Instagram PPC' },
                    { path: '/google-shopping-ppc', type: 'Google Shopping PPC' },
                    { path: '/linkedin-ppc', type: 'LinkedIn PPC' },
                    { path: '/youtube-ppc', type: 'YouTube PPC' },
                    { path: '/dynamic-search-ads', type: 'Dynamic Search Ads' },
                    { path: '/discovery-ads', type: 'Discovery Ads' },
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
                    { path: '/dynamic-search-ads', type: 'Dynamic Search Ads' },
                    { path: '/discovery-ads', type: 'Discovery Ads' },
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
      