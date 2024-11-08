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
                {path : '/EcommerceSEO' , type : 'E-commerce SEO' } ,
                {path : '/LocalSEO' , type : 'Local SEO' } ,
                {path : '/TechnicalSEO' , type : 'Technical SEO' } ,
                {path : '/ContentSEO' , type : 'Content SEO' } ,
                {path : '/InternationalSEO' , type : 'International SEO' } ,
                {path : '/Audits' , type : 'SEO Audits' } ,
                ]
            },

             { heading : "PPC" 
                , types : [
                    {path : '/GoogleAdsPPC' , type : 'Google Ads PPC' } ,
                    {path : '/LocalSEO' , type : 'Amazon PPC' } ,
                    {path : '/TechnicalSEO' , type : 'Facebook Instagram PPC' } ,
                    {path : '/ContentSEO' , type : 'Google Shopping PPC' } ,
                    {path : '/InternationalSEO' , type : 'Linkedin PPC' } ,
                    {path : '/Audits' , type : 'Youtube PPC' } ,
                ]
            },

             { heading : "SMA" , types : ["Basic Social Media Advertising" , "Programmatic Advertising" , "Enterprise (SMM)" , "Social Commerce Strategy" , "Social Media Brand Audits"]},

             { IMG : 'https://extrabrains.net/wp-content/uploads/2019/06/business-growth-strategy.png'},
        ],

        DevX : [     
            { heading : "Design" , types : ["Custom Website Design" , "E-Commerce Website Design" , "Website Redesign" ,"Web App Design" , "Custom Theme Development For CMS" , "Interactive Prototyping" , "User Experience Optimization Service"]},

             { heading : "Development" , types : ["Responsive Website Development" , "Web Application Development" , "Shopify E-commerce Development" , "AR/VR Development" , "API Development and Integration" ,"Custom Software Development" , "Mobile App Development"]},

             { heading : "MandU" , types : ["Web Infrastructure & Maintenance" , "Security Monitoring and Updates" , "Backup & Recovery Solutions" ,"Integration Updates" ,"Technical SEO Maintenance" , "Performance Optimization"]},

             { IMG : 'https://extrabrains.net/wp-content/uploads/2019/06/business-growth-strategy.png'},
        ],

        CSDEVOPS : [

            { heading : "Cyber Security" , types : ["Penetration Testing" , "Vulnerability Assessment and Management" , "Incident Response and Recovery" , "Malware Removal and Prevention" , "Firewall and Network Security Setup" ,"Data Encryption Solutions" , "Compliance Management"]},

             { heading : "DevOps" , types : ["Serverless Architecture Implementation" , "API Management and Automation" , "Automated Web Deployment" , "Cloud-Native Web Application" , "Load Testing and Performance Optimization" , "Multi-cloud Web Infrastructure Setup" , "Web Application Security" , "App Store Optimization and Deployment "]},

             { IMG : 'https://extrabrains.net/wp-content/uploads/2019/06/business-growth-strategy.png'},

        ],

        AIandDA : [

            { heading : "Artificial Intelligence (AI)" , types : ["AI and GPT Integration", "AI-Driven Personalization Engines" , "AI-Powered Automation & Optimization" , "Natural Language Processing (NLP) Solutions" , "AI-Powered Voice Interfaces"]},

             { heading : "Data Analysis" , types : ["Power Automate", "Power BI Dashboards" , "Excel Insights" , "Predictive Analytics & Machine Learning" , "Data Cleaning & Preprocessing" , "Big Data Analytics Solutions" , "Real-time Data Analytics" , "Customer & Market Segmentation Analysis"]},

             { IMG : 'https://extrabrains.net/wp-content/uploads/2019/06/business-growth-strategy.png'},

        ],

    }
