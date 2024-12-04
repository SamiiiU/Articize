
import sales from '../../Assets/Images/HomeImages/sales.png';
import stats from '../../Assets/Images/HomeImages/Stats.png';
import data from '../../Assets/Images/HomeImages/data.png';
import content from '../../Assets/Images/HomeImages/contentmarketing.png' 

import dataIcon from '../../Assets/Images/HomeImages/dataIcon.png';
import salesIcon from '../../Assets/Images/HomeImages/salesIcon.png';
import contentIcon from '../../Assets/Images/HomeImages/contentIcon.png';
import analytices from '../../Assets/Images/HomeImages/analyticIcon.png';

const HomeData = {

    pathToSuccess : [
        {heading : "Drive Targeted Traffic" , points :  ["SEO Services: Optimize your site's visibility with tailored SEO strategies."  , "PPC Management: Maximize ROI with expertly managed pay-per-click campaigns."]},

        {heading : "Enhance Web Presence" , points :  ["Web & E-Commerce Solutions: Build responsive, high-performing websites and online stores. "  , "Creative Design Services: Innovative design for apps, websites, and interactive experiences."]},

        {heading : "Secure and Optimize" , points :  ["Cybersecurity Measures: Protect your digital assets with advanced security protocols."  , "DevOps Solutions: Enhance operational efficiency with our DevOps expertise."]},

        {heading : "Leverage AI and Analytics" , points :  ["Cloud Hosting and Management: Reliable, scalable cloud solutions for every business need."  , " Data Insights: Leverage analytics to gain actionable insights and make data-driven decisions."]},

        {heading : "Cloud Solutions" , points :  ["AI Integration: Incorporate AI to streamline operations and enhance user experience."  ]},

        {heading : "Custom Software Solutions" , points :  ["Mobile and Web App Development: Custom applications designed to meet specific business requirements." ]},

    ],
    Power : [
        {name : "Advanced Analytics for Strategic Marketing" , icon : dataIcon, container : {heading : "Streamline Operations with Data-Driven Insights" , description : "At DEVXCLOUD, delve into analytics that not only track but also predict marketing trends, enabling you to stay ahead of the competition with proactive strategy adjustments." , img : sales }},

        {name : "Data Security in Marketing"  , icon : salesIcon, container : {heading : "Empower Your Data Strategy with Cybersecurity" , description : "Integrate cutting-edge cybersecurity measures to safeguard your marketing data, ensuring reliability and trust in every campaign." , img : data }},

        {name : "AI-Enhanced Content Strategies", icon : contentIcon , container : {heading : "Content Marketing Powered by AI" , description : "Harness the power of AI to craft content that adapts to customer preferences and behaviors, boosting engagement and conversion rates." , img : sales }},

        {name : "Cloud-Enabled Sales Enablement" , icon : analytices , container : {heading : "Enable Sales Through Scalable Cloud Solutions" , description : "Utilize our cloud infrastructure to enhance the agility of your sales force, enabling them to access marketing tools and data on-the-go, ensuring a faster and more effective response to market opportunities." , img : sales }},

        {name : "Development-Driven Marketing Innovation", icon : dataIcon , container : {heading : "Integrate Seamless Web and Mobile Solutions" , description : "Leverage our expertise in developing responsive web and mobile applications that enhance user experience and support complex marketing strategies." , img : sales }},

        {name : "AI for Targeted Marketing Decision"  , icon : dataIcon,  container : {heading : "Leverage AI to Refine Marketing Campaigns" , description : "Use our AI solutions to analyze customer data and optimize marketing campaigns, resulting in higher precision in targeting and better allocation of resources." , img : data }},


    ],

    Kpi : {
        1 : {heading : "Unlock Success with SEO & PPC" , description : 'Propel your brand to new heights with tailored SEO and PPC solutions. We drive targeted traffic and optimize conversions, ensuring your brand stands out in the digital landscape.' , features : ["Strategic keyword targeting for maximum reach" , "Precision ad campaign management" , "Real-time performance tracking and analytics"] , linkTitle : "Explore SEO & PPC " , linkHref : ''},
    

        2 : {heading : "Transform Your Vision with DevX Solutions" , description : 'Bring your ideas to life with our cutting-edge development services. We build high-performance apps and websites that offer a seamless user experience and elevate your brand.' , features : ["Custom web and mobile app development" , "Modern, responsive design and UX" , "Full-cycle support and maintenance"] , linkTitle : "Explore DevX " , linkHref : ''},

        3 : {heading : "Secure Your Business with Elite Cybersecurity & DevOps" , description : 'Safeguard your digital assets with our advanced cybersecurity and DevOps solutions. We focus on resilience and efficiency, so your business operates securely and smoothly.' , features : ["Comprehensive security assessments and audits" , "Continuous integration and deployment (CI/CD)" , "Proactive risk management and threat mitigation"] , linkTitle : "Explore Cybersecurity & DevOps " , linkHref : ''},

        4 : {heading : "Explore Insights with AI Integration & Data Analysis" , description : 'Unlock the potential of AI and data-driven insights. Our solutions empower you to make informed decisions, optimize operations, and stay ahead of the competition.' , features : ["Custom AI model development and deployment" , "Data visualization for actionable insights" , "Predictive analytics for proactive strategies"] , linkTitle : "Explore AI Integration & Data Analysis " , linkHref : ''},
    },
        
    impactOfMarketing : [
        {number : "100%" , to : 100 , heading : "Custom Solutions Set up by DEVXCLOUD" , para : "Tailored specifically to meet your unique business needs." },

        {number : "$500K"  , to : 500 ,  heading : " Value Delivered Built-In Value" , para : "Significant cost savings and value generated for our clients. " },

        {number : "30%" , to : 30 , heading : " Average Increase in ROI Avg Increase in ROI" , para : "Demonstrable return on investment across all digital campaigns." },

        {number : "5Billion+", to : 5  , heading : " Data Points Analyzed Data Points That Drive Decision Making" , para : "Leveraging big data to enhance decision-making and strategic direction." },    

    ],

    revenueSlides : [{
        heading: "Software Development",
        challenge: "Optimize product development cycles to enhance delivery times and reduce costs.",
        approaches: [
          "Agile project management integration",
          "Continuous integration and deployment practices",
          "Regular code reviews and quality assurance checks"
        ],
        result: {
          text: "Reduction in Time-to-Market Experience more rapid product launches with improved quality and reduced overhead.",
          increment: 40,
          incrementText: `${40}%`
        }
      },
      {
        heading: "E-commerce Growth",
        challenge: "Increase conversion rates and average order value for an online retail client.",
        approaches: [
          "Personalized email marketing campaigns",
          "A/B testing for website layout and checkout processes",
          "SEO optimization for product listings"
        ],
        result: {
          text: "Increase in Conversion Rates Significant growth in sales and customer engagement within six months.",
          increment: 250,
          incrementText: `${250}%`
        }
      },
      {
        heading: "Cybersecurity Enhancement",
        challenge: "Strengthen security protocols to prevent data breaches and ensure compliance with industry regulations.",
        approaches: [
          "Implementation of advanced encryption technologies",
          "Regular security audits and employee training sessions",
          "Upgrade to secure cloud hosting environments"
        ],
        result: {
          text: "Reduction in Security Incidents Drastically lower incidence of security threats and data breaches, enhancing customer trust.",
          increment: 90,
          incrementText: `${90}%`
        }
      }]

    

}


export default HomeData;