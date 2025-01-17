
import sales from '../../Assets/Images/HomeImages/sales.png';
import stats from '../../Assets/Images/HomeImages/Stats.png';
import data from '../../Assets/Images/HomeImages/data.png';
import content from '../../Assets/Images/HomeImages/contentmarketing.png'

import dataIcon from '../../Assets/Images/HomeImages/dataIcon.png';
import salesIcon from '../../Assets/Images/HomeImages/salesIcon.png';
import contentIcon from '../../Assets/Images/HomeImages/contentIcon.png';
import analytices from '../../Assets/Images/HomeImages/analyticIcon.png';

const HomeData = {

  pathToSuccess: [
    { heading: "Drive Targeted Traffic", points: [{ pointHeading: "SEO Services:", pointPara: "Optimize your site's visibility with tailored SEO strategies." }, { pointHeading: "PPC Management: ", pointPara: "Maximize ROI with expertly managed pay-per-click campaigns." }], path1: '/seo-audits', path2: '/google-ads-ppc', IMG: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlUfsUmcoyUw6dR4P71RT2JEvnl8V_WUSeLZ0TcBRjVwTRj_PqQAif89UdSbgE9QDF5Zs&usqp=CAU' },

    {
      heading: "Enhance Web Presence", points: [{
        pointHeading: "Web & E-Commerce Solutions:",
        pointPara: "Build responsive, high-performing websites and online stores."
      },
      {
        pointHeading: "Creative Design Services:",
        pointPara: "Innovative design for apps, websites, and interactive experiences."
      },], path1: '/seo-audits', path2: '/google-ads-ppc', IMG: 'https://t4.ftcdn.net/jpg/09/54/98/69/360_F_954986943_KWjKYKw0e4Khqhwy6LLXQsE4M4dyFEla.jpg'
    },

    {
      heading: "Secure and Optimize",

      points: [

        {
          pointHeading: "Cybersecurity Measures:",
          pointPara: "Protect your digital assets with advanced security protocols."
        },
        {
          pointHeading: "DevOps Solutions:",
          pointPara: "Enhance operational efficiency with our DevOps expertise."
        }]
      , path1: '/seo-audits', path2: '/google-ads-ppc', IMG: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOjFoOyUbkbFKhYyeN3ayghzQ7jte_IG5Gwg&s'
    },

    {
      heading: "Leverage AI and Analytics", points: [{
        pointHeading: "Cloud Hosting and Management:",
        pointPara: "Reliable, scalable cloud solutions for every business need."
      },
      {
        pointHeading: "Data Insights:",
        pointPara: "Leverage analytics to gain actionable insights and make data-driven decisions."
      }
      ], path1: '/seo-audits', path2: '/google-ads-ppc', IMG: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-M_r7bEyuBQzUODeKwobumjZ2bnoB_uelw&s'
    },

    {
      heading: "Cloud Solutions", points: [{
        pointHeading: "Cloud Hosting and Management:",
        pointPara: "Reliable, scalable cloud solutions for every business need."
      },
      {
        pointHeading: "Data Insights:",
        pointPara: "Leverage analytics to gain actionable insights and make data-driven decisions."
      }
      ], path1: '/seo-audits', path2: '/google-ads-ppc', IMG: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX9kkyt3TrQa-K9AhFfV2yH3-8t1FoFWDlfSyzGEj87j6rscXsv75cu27TpGHkuhl-O_Q&usqp=CAU'
    },

    {
      heading: "Custom Software Solutions", points: [{
        pointHeading: "Mobile and Web App Development:",
        pointPara: "Custom applications designed to meet specific business requirements."
      }, { pointHeading: "Tailored Digital Solutions:", pointPara: "Empowering businesses with innovative and customized software to drive efficiency, growth, and success" }
      ], path1: '/seo-audits', path2: '/google-ads-ppc', IMG: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROwrkC3Xkme-bUQmNdZ4tltQpejQlRtAoHgg&s'
    },

  ],

  deliveryProcess : [
    {header : "Understanding Your Vision" , para : "We begin by listening to your needs and understanding your goals. Our team delves into your business requirements and aspirations, ensuring that every solution perfectly aligns with your vision."},
    
    {header : "Understanding Your Vision" , para : "We begin by listening to your needs and understanding your goals. Our team delves into your business requirements and aspirations, ensuring that every solution perfectly aligns with your vision."},
    
    {header : "Understanding Your Vision" , para : "We begin by listening to your needs and understanding your goals. Our team delves into your business requirements and aspirations, ensuring that every solution perfectly aligns with your vision."},
    
    {header : "Understanding Your Vision" , para : "We begin by listening to your needs and understanding your goals. Our team delves into your business requirements and aspirations, ensuring that every solution perfectly aligns with your vision."},
    
    {header : "Understanding Your Vision" , para : "We begin by listening to your needs and understanding your goals. Our team delves into your business requirements and aspirations, ensuring that every solution perfectly aligns with your vision."},

  ],

  driveTrafic : [

   //Drive Targetted Traffic
  {mainHeading: "Drive Targetted Traffic",
    mainPara : "Are you looking to boost your website's visibility and attract more qualified visitors? We harness the power of advanced digital strategies to pinpoint and engage your ideal audience. Wondering how to convert clicks into customers and outshine your competition? Our integrated approach not only draws in traffic but ensures it’s the right traffic, optimizing every interaction for maximum engagement and conversion. Ready to see your online presence soar? Our related services are listed below, designed to enhance your website and help attract more traffic effectively.",
    subHeadings: [
      {title: "SEO Services",
        links: [
          { path: '/ecommerce-seo', type: 'E-commerce SEO' },
          { path: '/local-seo', type: 'Local SEO' },
          { path: '/technical-seo', type: 'Technical SEO' },
          { path: '/content-seo', type: 'Content SEO' },
          { path: '/international-seo', type: 'International SEO' },
          { path: '/seo-audits', type: 'SEO Audits' },
          { path: '/video-seo', type: 'Video SEO' },
        ],
      },
      {title: "Social Media Advertisement",
        links: [    
          { path: '/basic-social-media-advertising', type: "Basic Social Media Advertising" },
          { path: '/programmatic-advertising', type: "Programmatic Advertising" },
          { path: '/enterprise-smm', type: "Enterprise (SMM)" },
          { path: '/social-commerce-strategy', type: "Social Commerce Strategy" },
          { path: '/social-media-brand-audits', type: "Social Media Brand Audits" },
        ],
      },
      {title: "Pay Per Click",
        links: [    
          { path: '/google-ads-ppc', type: 'Google Ads PPC' },
          { path: '/amazon-ppc', type: 'Amazon PPC' },
          { path: '/facebook-instagram-ppc', type: 'Facebook Instagram PPC' },
          { path: '/google-shopping-ppc', type: 'Google Shopping PPC' },
          { path: '/linkedin-ppc', type: 'LinkedIn PPC' },
          { path: '/youtube-ppc', type: 'YouTube PPC' },
          { path: '/dynamic-search-ads-ppc', type: 'Dynamic Search Ads PPC' },
        ],
      },
    ],
  },
  //AI-Driven Development
  {mainHeading: "AI-Driven Development",
    mainPara : "AI-Driven Development focuses on the symbiosis of artificial intelligence and software development to craft smarter, more efficient applications and systems. This approach leverages AI to automate coding processes, optimize workflows, and enhance decision-making throughout the development lifecycle. By integrating AI tools and methodologies directly into the development process, this category offers solutions that not only speed up production but also improve the quality and functionality of the end products. AI-Driven Development is ideal for businesses looking to innovate, offering advanced capabilities like predictive analytics, machine learning models, and AI-powered optimizations that transform traditional development into a dynamic, future-ready proces",
    subHeadings: [
      {title: "Artificial Intelligence (AI)",
        links: [
          { path: '/ai-and-gpt-integration', type: 'AI and GPT Integration' },
          { path: '/ai-driven-personalization-engines', type: 'AI-Driven Personalization Engines' },
          { path: '/ai-powered-automation-and-optimization', type: 'AI-Powered Automation & Optimization' },
          { path: '/natural-language-processing-nlp-solutions', type: 'Natural Language Processing (NLP) Solutions' },
          { path: '/ai-powered-voice-interfaces', type: 'AI-Powered Voice Interfaces' },
          { path: '/ai-chatbots-virtual-assistants', type: 'AI Chatbots & Virtual Assistants' },
        ],
      },
      {title: "Development",
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
    ],
  },
  //SECURE AND OPTIMIZE 
  {mainHeading: "Secure And Optimize",
    mainPara : "Enhance your website’s security and performance with our dedicated services. We focus on implementing advanced security measures and performance optimizations to ensure your website operates at peak efficiency. Protect your site from threats while boosting speed and responsiveness for a seamless user experience.",
    subHeadings: [
      {title: "Cybersecurity",
        links: [
          { path: '/penetration-testing', type: 'Penetration Testing' },
          { path: '/vulnerability-assessment-and-management', type: 'Vulnerability Assessment and Management' },
          { path: '/incident-response-and-recovery', type: 'Incident Response and Recovery' },

          { path: '/firewall-and-network-security-setup', type: 'Firewall and Network Security Setup' },
          { path: '/data-encryption-solutions', type: 'Data Encryption Solutions' },
          { path: '/compliance-management', type: 'Compliance Management' },
          { path: '/zero-trust-architecture', type: 'Zero Trust Architecture' },
        ],
      },
      {title: "DevOps",
        links: [
          { path: '/serverless-architecture-implementation', type: 'Serverless Architecture Implementation' },
          { path: '/api-management-and-automation', type: 'API Management and Automation' },
          { path: '/automated-web-deployment', type: 'Automated Web Deployment' },
          { path: '/cloud-native-web-application', type: 'Cloud-Native Web Application' },
          { path: '/load-testing-and-performance-optimization', type: 'Load Testing and Performance Optimization' },
          { path: '/multi-cloud-web-infrastructure-setup', type: 'Multi-cloud Web Infrastructure Setup' },
          { path: '/kubernetes-docker-containerization', type: 'Kubernetes & Docker Containerization' },
        ],
      },
    ],
  },
  //LEVERAGE AI AND ANALYTICS
  {mainHeading: "Leverage AI And Analytics",
    mainPara : "Unlock the potential of AI and analytics to drive decision-making and improve business outcomes. Our services integrate AI technologies and provide comprehensive data analysis to transform your operations and strategy, ensuring you stay ahead in a data-driven world.",
    subHeadings: [
      {title: "Artificial Intelligence (AI)",
        links: [
          { path: '/ai-and-gpt-integration', type: 'AI and GPT Integration' },
          { path: '/ai-driven-personalization-engines', type: 'AI-Driven Personalization Engines' },
          { path: '/ai-powered-automation-and-optimization', type: 'AI-Powered Automation & Optimization' },
          { path: '/natural-language-processing-nlp-solutions', type: 'Natural Language Processing (NLP) Solutions' },
          { path: '/ai-powered-voice-interfaces', type: 'AI-Powered Voice Interfaces' },
          { path: '/ai-chatbots-virtual-assistants', type: 'AI Chatbots & Virtual Assistants' },
        ],
      },
      {title: "DevOps",
        links: [
          { path: '/serverless-architecture-implementation', type: 'Serverless Architecture Implementation' },
          { path: '/api-management-and-automation', type: 'API Management and Automation' },
          { path: '/automated-web-deployment', type: 'Automated Web Deployment' },
          { path: '/cloud-native-web-application', type: 'Cloud-Native Web Application' },
          { path: '/load-testing-and-performance-optimization', type: 'Load Testing and Performance Optimization' },
          { path: '/multi-cloud-web-infrastructure-setup', type: 'Multi-cloud Web Infrastructure Setup' },
          { path: '/kubernetes-docker-containerization', type: 'Kubernetes & Docker Containerization' },
        ],
      },
    ],
  },

  //Digital Dynamics
  {mainHeading: "Digital Dynamics",
    mainPara : "Elevate your online presence and drive superior digital performance with our \"Digital Dynamics\" services. At the core, our Development team focuses on crafting robust, scalable websites and applications tailored to your unique business needs. Enhance your visibility and attract more targeted traffic with our expert SEO (Search Engine Optimization) strategies, designed to optimize your website for top search engine rankings. Complementing SEO, our PPC (Pay-Per-Click) campaigns are strategically developed to maximize your advertising ROI, targeting the right audiences at the right time. Together, these services synergize to create a dynamic digital ecosystem that not only reaches but captivates and converts your ideal customers.",
    subHeadings: [
      {title: "Artificial Intelligence (AI)",
        links: [
          { path: '/ai-and-gpt-integration', type: 'AI and GPT Integration' },
          { path: '/ai-driven-personalization-engines', type: 'AI-Driven Personalization Engines' },
          { path: '/ai-powered-automation-and-optimization', type: 'AI-Powered Automation & Optimization' },
          { path: '/natural-language-processing-nlp-solutions', type: 'Natural Language Processing (NLP) Solutions' },
          { path: '/ai-powered-voice-interfaces', type: 'AI-Powered Voice Interfaces' },
          { path: '/ai-chatbots-virtual-assistants', type: 'AI Chatbots & Virtual Assistants' },
        ],
      },
      {title: "DevOps",
        links: [
          { path: '/serverless-architecture-implementation', type: 'Serverless Architecture Implementation' },
          { path: '/api-management-and-automation', type: 'API Management and Automation' },
          { path: '/automated-web-deployment', type: 'Automated Web Deployment' },
          { path: '/cloud-native-web-application', type: 'Cloud-Native Web Application' },
          { path: '/load-testing-and-performance-optimization', type: 'Load Testing and Performance Optimization' },
          { path: '/multi-cloud-web-infrastructure-setup', type: 'Multi-cloud Web Infrastructure Setup' },
          { path: '/kubernetes-docker-containerization', type: 'Kubernetes & Docker Containerization' },
        ],
      },
    ],
  },

  //Secure Development Solutions
  {mainHeading: "Secure Development Solutions",
    mainPara : "Secure Development Solutions focus on embedding security at the core of software development practices. This proactive approach involves integrating security protocols and tools from the earliest stages of development to mitigate risks, prevent vulnerabilities, and ensure compliance with industry standards. By combining development expertise with advanced cyber security measures, this category delivers secure applications and infrastructure that are resistant to both current and emerging threats. Ideal for organizations prioritizing data protection and system integrity, Secure Development Solutions provide a comprehensive framework that enhances both the security and performance of technological assets.  ",
    subHeadings: [
      {title: "Artificial Intelligence (AI)",
        links: [
          { path: '/ai-and-gpt-integration', type: 'AI and GPT Integration' },
          { path: '/ai-driven-personalization-engines', type: 'AI-Driven Personalization Engines' },
          { path: '/ai-powered-automation-and-optimization', type: 'AI-Powered Automation & Optimization' },
          { path: '/natural-language-processing-nlp-solutions', type: 'Natural Language Processing (NLP) Solutions' },
          { path: '/ai-powered-voice-interfaces', type: 'AI-Powered Voice Interfaces' },
          { path: '/ai-chatbots-virtual-assistants', type: 'AI Chatbots & Virtual Assistants' },
        ],
      },
      {title: "DevOps",
        links: [
          { path: '/serverless-architecture-implementation', type: 'Serverless Architecture Implementation' },
          { path: '/api-management-and-automation', type: 'API Management and Automation' },
          { path: '/automated-web-deployment', type: 'Automated Web Deployment' },
          { path: '/cloud-native-web-application', type: 'Cloud-Native Web Application' },
          { path: '/load-testing-and-performance-optimization', type: 'Load Testing and Performance Optimization' },
          { path: '/multi-cloud-web-infrastructure-setup', type: 'Multi-cloud Web Infrastructure Setup' },
          { path: '/kubernetes-docker-containerization', type: 'Kubernetes & Docker Containerization' },
        ],
      },
    ],
  },

  ],
  Power: [


    { name: "Integrated Cybersecurity Solutions", 
      icon: salesIcon, 
      container: { 
        heading: "Integrated Cybersecurity Solutions", 
        description: "Fortify Your Business Infrastructure: Elevate your cybersecurity to new heights with strategic solutions that are custom-crafted to protect your digital assets and operations. Our comprehensive approach includes vulnerability assessments, real-time threat monitoring, and rapid incident response, ensuring your business remains resilient against cyber threats. Secure your future by staying one step ahead of cyber risks.", 
        points : ["Proactive threat monitoring","Swift incident respons"] } 
    },

    { name: "Implementations", 
      icon: salesIcon, 
      container: { 
        heading: "Custom AI Implementations", 
        description: "Unlock Efficiency with Smart Technology: Transform your business landscape with AI-driven innovations designed to streamline your operations and enhance user interactions. From predictive analytics to intelligent automation, our AI solutions are engineered to provide strategic advantages, enabling more informed decisions and greater operational efficiency.", 
        points : ["Predictive analytics","Intelligent automation systems"] } 
    },

    { name: "Visualization", 
      icon: salesIcon, 
      container: { 
        heading: "Real-Time Data Visualization", 
        description: "See Your Data in Action: Bring clarity to your decision-making with our advanced real-time data visualization tools. These dynamic dashboards and interactive reports are not just about displaying data—they provide deep insights, highlight trends, and empower your team to act with precision based on the latest information.", 
        points : ["Trend analysis","Interactive reporting"] } 
    },

    { name: "Optimization", 
      icon: salesIcon, 
      container: { 
        heading: "SEO and Content Optimization", 
        description: "Elevate Your Digital Reach: Propel your online presence to the forefront with our expert SEO and content optimization strategies. By enhancing your search engine visibility and crafting content that engages and informs, we help you attract a loyal audience and turn visits into conversions.", 
        points : ["SEO best practices","Content engagement strategies"] } 
    },

    { name: "Marketing", 
      icon: salesIcon, 
      container: { 
        heading: "Automated Marketing Campaigns", 
        description: "Enhance Campaign Precision: Revolutionize your marketing with our automated tools that optimize every aspect of your campaigns. Target the right audience with precision, streamline your messaging, and measure the effectiveness of each campaign to continually improve your engagement rates and ROI.", 
        points : ["Targeted audience engagement","Campaign performance analytics"] } 
    },

    { name: "Web Development", 
      icon: salesIcon, 
      container: { 
        heading: "Web Development and Maintenance", 
        description: "Craft Web Excellence: Develop robust, responsive websites that not only meet but exceed modern standards. Our expert web development team provides ongoing support and maintenance, ensuring your site evolves with technological advancements and user expectations, maintaining peak performance at all times.", 
        points : ["Responsive design principles","Ongoing technical support"] } 
    },

    { name: "Cloud Computing", 
      icon: salesIcon, 
      container: { 
        heading: "Cloud Computing Integration", 
        description: "Empower Growth with Scalable Solutions: Scale your business effortlessly with our cloud computing solutions that promise enhanced flexibility and operational efficiency. From infrastructure setup to ongoing management, we ensure seamless integration and optimal performance, making your business more agile and connected.", 
        points : ["Infrastructure management","Operational efficiency"] } 
    },

    { name: "User Experience", 
      icon: salesIcon, 
      container: { 
        heading: "Personalized User Experience Design", 
        description: "Design with the User in Mind: Delight your users with bespoke interfaces that are intuitive, attractive, and functional. Our user experience design process involves deep user research, usability testing, and iterative design to create experiences that not only meet but exceed user expectations.", 
        points : ["Usability testing","Iterative design process"] } 
    },
  ],

  Kpi: {
    1: { heading: "Unlock Success with SEO & PPC", description: 'Propel your brand to new heights with tailored SEO and PPC solutions. We drive targeted traffic and optimize conversions, ensuring your brand stands out in the digital landscape.', features: ["Strategic keyword targeting for maximum reach", "Precision ad campaign management", "Real-time performance tracking and analytics"], linkTitle: "Explore SEO & PPC ", linkHref: '' },


    2: { heading: "Transform Your Vision with DevX Solutions", description: 'Bring your ideas to life with our cutting-edge development services. We build high-performance apps and websites that offer a seamless user experience and elevate your brand.', features: ["Custom web and mobile app development", "Modern, responsive design and UX", "Full-cycle support and maintenance"], linkTitle: "Explore DevX ", linkHref: '' },

    3: { heading: "Secure Your Business with Elite Cybersecurity & DevOps", description: 'Safeguard your digital assets with our advanced cybersecurity and DevOps solutions. We focus on resilience and efficiency, so your business operates securely and smoothly.', features: ["Comprehensive security assessments and audits", "Continuous integration and deployment (CI/CD)", "Proactive risk management and threat mitigation"], linkTitle: "Explore Cybersecurity & DevOps ", linkHref: '' },

    4: { heading: "Explore Insights with AI Integration & Data Analysis", description: 'Unlock the potential of AI and data-driven insights. Our solutions empower you to make informed decisions, optimize operations, and stay ahead of the competition.', features: ["Custom AI model development and deployment", "Data visualization for actionable insights", "Predictive analytics for proactive strategies"], linkTitle: "Explore AI Integration & Data Analysis ", linkHref: '' },
  },

  impactOfMarketing: [
    { number: "100%", to: 100, heading: "Custom Solutions Set up by DEVXCLOUD", para: "Tailored specifically to meet your unique business needs." },

    { number: "$500K", to: 500, heading: " Value Delivered Built-In Value", para: "Significant cost savings and value generated for our clients. " },

    { number: "30%", to: 30, heading: " Average Increase in ROI Avg Increase in ROI", para: "Demonstrable return on investment across all digital campaigns." },

    { number: "5Billion+", to: 5, heading: " Data Points Analyzed Data Points That Drive Decision Making", para: "Leveraging big data to enhance decision-making and strategic direction." },

  ],

  fuelingInnovation: [
    { heading: "Industry Innovators", para: "Stay at the forefront with a dedicated team that is quick to adopt and implement the latest industry trends and innovations.", image: "https://www.industrial-innovation.com/wp-content/uploads/2021/11/FRONTIER-HUB-10-Trends-in-Industrial-Innovation-Matt-Vulpis-10-31-2021-1.jpg" },

    { heading: "Strategic Developers", para: "Our experts excel in crafting agile strategies tailored to meet short-term goals while supporting your long-term vision.", image: "https://www.industrial-innovation.com/wp-content/uploads/2021/11/FRONTIER-HUB-10-Trends-in-Industrial-Innovation-Matt-Vulpis-10-31-2021-1.jpg" },

    { heading: "Specialized Solutions Creators", para: "Harness our channel-specific knowledge to develop customized, proactive solutions that drive measurable results for our clients.", image: "https://www.industrial-innovation.com/wp-content/uploads/2021/11/FRONTIER-HUB-10-Trends-in-Industrial-Innovation-Matt-Vulpis-10-31-2021-1.jpg" },

    { heading: "Establishing a Strong Foundation", para: "5+ years of progressive growth.A solid track record of growth and innovation, showing our quick adaptation and forward-thinking approach.", image: "https://www.industrial-innovation.com/wp-content/uploads/2021/11/FRONTIER-HUB-10-Trends-in-Industrial-Innovation-Matt-Vulpis-10-31-2021-1.jpg" },

    { heading: "Effective Customer Relations", para: "Over 10,000 successful interactions Demonstrating our ability to engage effectively with clients and build strong, productive relationships.", image: "https://www.industrial-innovation.com/wp-content/uploads/2021/11/FRONTIER-HUB-10-Trends-in-Industrial-Innovation-Matt-Vulpis-10-31-2021-1.jpg" },

    { heading: "Client-Driven Excellence", para: "Hundreds of Positive Testimonials Our commitment to client satisfaction is evident from the consistent praise we receive, highlighting our tailored approaches and results.", image: "https://www.industrial-innovation.com/wp-content/uploads/2021/11/FRONTIER-HUB-10-Trends-in-Industrial-Innovation-Matt-Vulpis-10-31-2021-1.jpg" },


    { heading: "Expert Team", para: "50+ Digital Professionals A dynamic team of skilled experts focused on delivering the latest digital solutions and enhancing client success.", image: "https://www.industrial-innovation.com/wp-content/uploads/2021/11/FRONTIER-HUB-10-Trends-in-Industrial-Innovation-Matt-Vulpis-10-31-2021-1.jpg" },
  ],

  revenueSlides: [
  {heading: "AI-Powered Process Optimization",
    challenge: "Streamline operations and boost efficiency with customized AI solutions.  ",
    approaches: [
      "Tailor AI models to enhance decision-making and automate tasks.",
      "Integrate AI seamlessly into existing business processes.",
    ],
    result: {
      text: "Increased in operational efficiency ",
      increment: 40,
      incrementText: `${40}%`
    }
  },
  {heading: "Dynamic Data Insights",
    challenge: "Enable informed decisions with real-time, actionable data insights.",
    approaches: [
      "Implement advanced visualization tools for real-time data interpretation.",
      "Continuous data analysis to keep insights relevant and actionable.",
    ],
    result: {
      text: "Acceleration in decision-making processes, improving responsiveness to market dynamics.",
      increment: 250,
      incrementText: `${250}%`
    }
  },
  {heading: "Organic Growth Acceleration",
    challenge: "Boost organic reach and engagement through strategic SEO and content optimization.",
    approaches: [
      "Utilize latest SEO practices to enhance site visibility.",
      "Regularly update content to align with search engine algorithms and user interest.",
    ],
    result: {
      text: "Increase in Organic traffic , with a 30% uplift in engagement rates.",
      increment: 90,
      incrementText: `${90}%`
    }
  },
  {heading: "Precision Marketing Automation",
    challenge: "Increase marketing effectiveness with targeted automation and analytics.",
    approaches: [
      "Deploy automation tools to streamline campaigns and personalize interactions",
      "Leverage customer data for precise targeting and message optimization.",
    ],
    result: {
      text: "Improved in campaign conversions and reduced effort by 60%.",
      increment: 45,
      incrementText: `${45}%`
    }
  },
  {heading: "Organic Growth Acceleration",
    challenge: "Boost organic reach and engagement through strategic SEO and content optimization.",
    approaches: [
      "Utilize latest SEO practices to enhance site visibility.",
      "Regularly update content to align with search engine algorithms and user interest.",
    ],
    result: {
      text: "Increase in Organic traffic , with a 30% uplift in engagement rates.",
      increment: 90,
      incrementText: `${90}%`
    }
  }
],

  companiesLogoURLs: ["https://www.webfx.com/wp-content/uploads/2024/07/O_Reilly_Auto_Parts_Logo.png", "https://www.webfx.com/wp-content/uploads/2024/07/Hilton-logo.png", "https://www.webfx.com/wp-content/uploads/2024/07/arrowquip_logo_black_vertical.png", "https://www.webfx.com/wp-content/uploads/2024/07/bars-leaks-logo_03.png", "https://www.webfx.com/wp-content/uploads/2024/07/YMCA_logo_logotype.png", "https://www.webfx.com/wp-content/uploads/2024/07/jiffy-lube.png", "https://www.webfx.com/wp-content/uploads/2024/07/Hannaford_Brothers_Company-Logo.png", "https://www.webfx.com/wp-content/uploads/2024/07/auntie-annes.png", "https://www.webfx.com/wp-content/uploads/2024/07/Fujifilm_logo.png", "https://www.webfx.com/wp-content/uploads/2024/07/Verizon_2015_logo_-vector.png", "https://www.webfx.com/wp-content/uploads/2024/07/Subway-1.png", "https://www.webfx.com/wp-content/uploads/2024/07/1200px-Wrangler_Logo.png"],

  insideCompany: [
    { heading: "Our Culture", para: "DEVXCLOUD is built on a foundation of innovation, collaboration, and relentless pursuit of excellence. Our workplace culture encourages creative problem-solving and continuous learning, ensuring that we remain at the cutting edge of technology.", image: 'https://img.freepik.com/free-vector/cultural-diversity_52683-9679.jpg', navigator: "Culture" },

    { heading: "Community Impact", para: " We are committed to making a difference, not just within the tech industry but in our community as well. DEVXCLOUD actively participates in and sponsors events and initiatives that contribute to societal welfare, emphasizing our role as a responsible corporate citizen.", image: 'https://png.pngtree.com/png-vector/20230525/ourmid/pngtree-a-collective-of-experts-assessing-social-medias-impact-on-brand-image-vector-png-image_52227908.jpg', navigator: "Impact" },

    { heading: "Careers at DEVXCLOUD", para: "Are you looking for a career that challenges you to excel and allows you to work on transformative projects? DEVXCLOUD offers a vibrant work environment where your skills are nurtured and your achievements are celebrated. Explore opportunities to grow professionally and personally within our innovative team.", image: 'https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png', navigator: "Careers" },


  ],

}


export default HomeData;