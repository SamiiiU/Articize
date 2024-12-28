import BG from '../../../Assets/Images/CommonImages/HeroServices.png'
import heroImage from '../../../Assets/Images/CommonImages/CodeXImages/CodeXHeroIMG.png'
import { FaDraftingCompass, FaMagic, FaPaintBrush, FaRocket, FaUsers } from 'react-icons/fa'
import { width } from '@mui/system'
import { IoPeople } from 'react-icons/io5'
import { GrAchievement, GrOptimize } from 'react-icons/gr'
import { SiGooglecontaineroptimizedos } from 'react-icons/si'
import { MdDevices } from 'react-icons/md'


export const customDesignData = {
    heroSection : {
        heading: "Revolutionize Your Online Presence with Cutting-Edge Custom Web Design Solutions That Deliver Results",
        para: "Unlock your brand's potential with stunning, functional web design tailored to your goals. We create responsive, user-friendly websites that captivate visitors, drive engagement, and boost conversions. Let us transform your vision into a powerful online presence!",
        img: heroImage,
        bg: BG,
    },

    whyNeedSection : {
        heading : "Why Your Business Needs <span class= 'text-[#207DE9]'> Custom Web Design </span> Services",
        
        whyNeed : [
            
            {header : "Establish a Unique Online Identity" ,
            text : "Your website is the digital face of your brand, reflecting your logo, color palette, typography, and overall tone. <br/> <br/>At DevXCloud, we Craft personalized designs aligned with your brand's vision. <br/> Use cutting-edge tools like Figma and Adobe XD for prototyping. <br/>Incorporate dynamic design elements for a memorable user experience."
            },

            {header : "Create a Lasting First Impression" ,
                text : "Visitors form an opinion about your website within seconds. <br/><br/> We ensure lightning-fast load times with performance-optimized frameworks (React, Next.js, etc.)<br/>Aesthetically pleasing and professional layouts tailored to your audience <br/> High-definition visuals optimized for web and mobile."
            },

            {header : "Mobile-First and Responsive Design" ,
                text : "Seamless Experiences Across Devices <br/> Our designs are crafted with a mobile-first approach, ensuring your site looks stunning and performs flawlessly on all devices. <br/>Technologies Used: CSS Grid, Flexbox, and frameworks like Bootstrap. <br/> Outcome: User-friendly and responsive layouts."
            },

            {header : "Interactive and Engaging Features" ,
                text : "Enhancing User Interaction <br/>We integrate captivating animations, scroll effects, and dynamic elements to keep users engaged and ensure a memorable experience. <br/>Examples: Lottie animations, hover effects, and carousels. <br/>Outcome: Increased user engagement and reduced bounce rates."
            },
    
            {header : "Performance Optimization" ,
                text : "Fast, Reliable, and SEO-Friendly <br/>We optimize every element of your website for speed, reliability, and search engine visibility.<br/>Techniques: Image compression, lazy loading, and CDN integration.<br/>Outcome: Improved Core Web Vitals and higher search rankings."
            },

            {header : "Continuous Support and Improvement" ,
                text : "Your Website is Always at Its Best Our job doesn’t stop at launch. <br/>We offer ongoing support to keep your website secure, updated, and aligned with the latest trends. <br/>Services Offered: Real-time monitoring, updates, and A/B testing. <br/>Outcome: Long-term performance and growth."
            },

            {header : "Why Choose DevXCloud?" ,
                text : "Cutting-Edge Tools: Leveraging the latest in design and development technologies. <br/>Client-Centric Approach: We collaborate closely with you every step of the way. <br/>Future-Proof Solutions: Scalable and adaptable designs built for growth."
            },


                
    ]
    },

    whySection : {
        heading: "Why <span class= 'text-[#207DE9]'>Custom UI Designing</span> matters?",
        
        para: "By delivering visually appealing and user-friendly interfaces, led by experienced designers and backed by the latest trends, we ensure your business stands out. Enhance user experiences, boost engagement, and achieve your goals with a design-first approach.",
        
        whyKeys: [
        { heading: "User-Centered Design", explanation: 'Focus on understanding user behavior and needs to create intuitive, responsive, and engaging interfaces. Prioritize usability to ensure seamless navigation and a positive experience.', icon: <FaUsers /> },

        { heading: "Wireframing & Prototyping", explanation: 'Design detailed wireframes and prototypes to provide a visual blueprint of the user interface. This process ensures functionality, flow, and alignment with business goals before full development.', icon: <FaDraftingCompass /> },

        { heading: "Visual Aesthetics", explanation: 'Craft pixel-perfect designs with consistent branding, colors, and typography. Create interfaces that are not only beautiful but also align with your brand identity to leave a lasting impression.', icon: <FaPaintBrush /> },

        { heading: "Performance-Focused Design", explanation: 'Optimize UI designs for faster load times and smooth performance across devices. A well-designed UI reduces bounce rates and improves overall user satisfaction.', icon: <FaRocket /> }
        ]
    },

    boostSection : {
        heading: "Boost Your Website's Performance with <span class= 'text-[#207DE9]'> Specialized <br/> Custom Website Design </span> Services.",
        para: "Solve unique design challenges with tailored website solutions that elevate user experiences, improve site performance, and drive conversions.",

        boostContent: [
            {navigator: "Tailored Design Frameworks", 

                matters : "Frameworks like React and Next.js allow for custom design solutions that load faster, perform better, and align with your business goals. Tailored frameworks improve scalability and support future updates seamlessly.", 
    
                includes: [
                    "Custom design frameworks built for speed and interactivity." , 
                    "Lightweight, reusable components for dynamic page rendering.",
                    "Cross-platform compatibility ensuring the design works on all devices.",
                ], 
    
                benefit : "Faster load times, superior performance, and a competitive edge in delivering user-friendly designs.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },
            {navigator: "User-Centric Design",
                matters: "Modern websites need to cater to user behavior with intuitive navigation, accessible features, and engaging visuals to retain visitors and drive conversions.",
                includes: [
                    "Heatmap analysis for understanding user behavior.",
                    "Accessible web designs adhering to WCAG standards.",
                    "User flow optimization for reducing bounce rates."
                ],
                benefit: "Higher user satisfaction, better accessibility, and increased engagement.",
                image: "https://example.com/user-centric-design.png"
            },
            {navigator: "Performance-Driven Optimization",
                matters: "Web performance directly impacts SEO rankings and user retention. Optimized websites deliver better experiences, especially for mobile users.",
                includes: [
                    "Optimization using Google Core Web Vitals metrics.",
                    "Advanced caching and CDN integration.",
                    "Lazy loading for images and asynchronous scripts."
                ],
                benefit: "Improved speed, better search engine rankings, and enhanced mobile experiences.",
                image: "https://example.com/performance-optimization.png"
            },
            {navigator: "SEO-Integrated Web Design",
                matters: "SEO should be embedded into the design process to ensure visibility on search engines right from launch.",
                includes: [
                    "Schema markup implementation for enhanced SERP visibility.",
                    "SEO-friendly URL structures and metadata integration.",
                    "On-page keyword optimization during design."
                ],
                benefit: "Increased organic traffic and better ROI on marketing efforts.",
                image: "https://example.com/seo-web-design.png"
            },
            {navigator: "Interactive Features and Animations",
                matters: "Interactive features create engaging user experiences that leave a lasting impression.",
                includes: [
                    "Custom animations using Lottie and CSS for lightweight visuals.",
                    "Interactive elements like carousels, modals, and scroll-triggered effects.",
                    "Integration of chatbots and live feedback forms."
                ],
                benefit: "Enhanced user engagement and a more dynamic experience.",
                image: "https://example.com/interactive-features.png"
            },
            {navigator: "Future-Proof Scalability",
                matters: "As businesses grow, their websites must adapt to new challenges, features, and traffic demands.",
                includes: [
                    "Modular design systems for easy expansion.",
                    "API integration for extending functionality.",
                    "Scalable hosting solutions for growing businesses."
                ],
                benefit: "Future-proof websites that adapt with your business growth.",
                image: "https://example.com/future-proof-scalability.png"
            },
            {navigator: "Comprehensive Support & Maintenance",
                matters: "Ongoing support ensures that your website stays functional, secure, and up-to-date.",
                includes: [
                    "Regular security updates and patches.",
                    "Performance monitoring with real-time analytics tools.",
                    "Dedicated customer support team for troubleshooting."
                ],
                benefit: "Peace of mind knowing your website is always optimized and secure.",
                image: "https://example.com/support-maintenance.png"
            }
            ]

    },

    poweredBySection : {
        heading: "Custom UI  <span class= 'text-[#207DE9]'> Designing Powered by </span> User-Centric Insights",
                para: "Leverage intuitive and visually stunning designs to enhance user experience, drive engagement, and elevate your brand identity.",
        
        
                features: [
                    { navigator: "User-Centered Design", text: "Our approach focuses on understanding user behavior and needs to create intuitive, responsive, and visually appealing interfaces that delight users.", icon: <IoPeople className='text-4xl text-[#6ADFD7] ' /> },
        
                    { navigator: "Interactive Prototyping", text: "We build interactive prototypes to visualize UI designs, ensuring alignment with business goals, functionality, and a seamless user flow.", icon: <GrAchievement className='text-4xl text-[#6ADFD7] ' /> },
        
                    { navigator: "Performance Optimization", text: "Optimize UI designs for lightning-fast performance, mobile responsiveness, and smooth navigation to boost user satisfaction and retention.", icon: <SiGooglecontaineroptimizedos className='text-4xl text-[#6ADFD7] ' /> },
                ],
        
                statistics: [
        
                    { benefit: "Increase in User Engagement", benefitText: "Track the measurable impact of custom UI design on user interactions and engagement rates.", increasePercentage: 150 },
        
                    { benefit: "Reduction in Bounce Rates", benefitText: "Improved UI leads to reduced bounce rates and higher customer retention on digital platforms.", increasePercentage: 60 },
        
                    { benefit: "Boost in Conversion Rates", benefitText: "Custom UI designs optimize user journeys, resulting in a significant boost in conversions.", increasePercentage: 120 },
        
        ]
    },

    customPackage : {
        heading : "Bringing Your Ideas to Life with <span class= 'text-[#207DE9]'> Tailored UI Designs </span> for Seamless User Experiences",

        mainHeading : "<span  class = 'text-yellow-500'>PixelCraft:</span> Custom UI Designs That Inspire Interaction",

        youGet : [
            "Custom UI/UX design for 1-5 pages, tailored to your brand.",
            "Mobile-friendly, responsive design for all devices.",
            "Engaging homepage with animations and interactive features.",
            "Up to 3 additional pages (like services, about, contact).",
            "Basic SEO setup to help improve Google ranking.",
            "Blog/news section for easy content updates.",
            "Optional e-commerce setup with payment gateway (1-10 products).",
            "Easy-to-use Content Management System (CMS).",
            "Built-in security features for data protection.",
            "1-month support for troubleshooting and updates."
          ],
        
        buttonText : "Get PixelCraft Package",
        
    },

    pricingCalc : {
        heading : "Bringing Your Ideas to Life with <span class= 'text-[#207DE9]'> Tailored UI Designs </span> for Seamless User Experiences",

        requirements : [
            {item : "Number Of Pages" , 
                options : ["5-10" , "11-50" , "50+"], 
                pricing : [100 , 200 , 400] , 
                selected : 0, 
                slider : {
                shiftStep : 1,      
                minVal : 0,         
                maxVal : 2,         
                steps : 1,          
                defaultValue : 1,  
              },
              className : {width : 300},

            
            },
            {item : "Responsive" , 
                options : ["No" , "Yes" , ], 
                pricing : [300 , 500 ] , 
                selected : 0,
                slider : {
                    shiftStep : 1,      
                    minVal : 0,         
                    maxVal : 1,         
                    steps : 1,          
                    defaultValue : 1,  
                  },
                className : {width : 300},
            },
            {item : "Complexity" , 
                options : ["Standard" , "Advanced" , "Animated"], 
                pricing : [300 , 500 , 600] , 
                selected : 0,
                slider : {
                    shiftStep : 1,      
                    minVal : 0,         
                    maxVal : 2,         
                    steps : 1,          
                    defaultValue : 1,  
                  },
                className : {width : 300},
            },
            {item : "SEO" , 
                options : ["Standard" , "Advanced" , "Aisi"] , 
                pricing : [100 , 200 , 400] , 
                selected : 0,
                slider : {
                    shiftStep : 1,      
                    minVal : 0,         
                    maxVal : 2,         
                    steps : 1,          
                    defaultValue : 1,  
                  },
                className : {width : 300},
            },
            {item : "Copywriting Services" , 
                options : ["None" , "Blog Posts" , "Landing Pages" , "Full Strategy"] , 
                pricing : [0 , 100 , 200 , 400] , 
                selected : 0,
                slider : {
                    shiftStep : 1,      
                    minVal : 0,         
                    maxVal : 3,         
                    steps : 1,          
                    defaultValue : 1,  
                  },
                className : {width : 300},
            },
            {item: "Database Integration",
                options: ["None Required", "User Profiles", "Product Catalogs", "Custom Dashboards"],
                pricing: [0, 2000, 5000, 5000],  // Upper limits for simplified calculations
                selected: 0,
                slider: {
                    shiftStep: 1,
                    minVal: 0,
                    maxVal: 3,
                    steps: 1,
                    defaultValue: 0,
                },
                className: {width: 300},
            },
            {
                item: "E-Commerce Setup",
                options: ["Basic", "Pro", "Enterprise"],
                pricing: [2000, 5000, 5000],  // Upper limit for the range
                selected: 0,
                slider: {
                    shiftStep: 1,
                    minVal: 0,
                    maxVal: 2,
                    steps: 1,
                    defaultValue: 0,
                },
                className: {width: 300},
            },
            {
                item: "CMS Integration",
                options: ["WordPress", "Shopify", "Custom"],
                pricing: [1000, 2500, 5000],  // Upper limit for the range
                selected: 0,
                slider: {
                    shiftStep: 1,
                    minVal: 0,
                    maxVal: 2,
                    steps: 1,
                    defaultValue: 0,
                },
                className: {width: 300},
            }
        ]

        
    },

    approachSection : {
        heading: "Our Proven <span class= 'text-[#207DE9]'> Custom UI Design Strategy </span>",
                para: "Leverage our expertise to craft visually appealing, user-friendly, and functional interfaces that enhance user satisfaction, engagement, and performance.",
                
                approaches: [
                    { 
                        heading: "User Research and Analysis", 
                        detail: 'Conduct in-depth research to understand user behavior, goals, and pain points. Design interfaces tailored to user needs, ensuring an intuitive and user-centric experience.', 
                        icon: <FaUsers /> 
                    },
                
                    { 
                        heading: "Wireframing and Prototyping", 
                        detail: 'Develop wireframes and interactive prototypes to map out the interface structure and test functionality. Ensure clarity and usability before the final design phase.', 
                        icon: <FaDraftingCompass /> 
                    },
                
                    { 
                        heading: "Responsive UI Design", 
                        detail: 'Create visually appealing, adaptable interfaces that work flawlessly across devices, ensuring a seamless user experience on desktops, tablets, and mobile screens.', 
                        icon: <MdDevices /> 
                    },
                
                    { 
                        heading: "Interactive and Engaging Features", 
                        detail: 'Incorporate animations, hover effects, and interactive elements that captivate users, improve engagement, and provide a memorable digital experience.', 
                        icon: <FaMagic /> 
                    },
                
                    { 
                        heading: "Performance Optimization", 
                        detail: 'Optimize UI elements to improve load speed and performance. Ensure smooth navigation, fast rendering, and frictionless interactions that enhance user satisfaction.', 
                        icon: <GrOptimize /> 
                    },
                ]
                
    },


    reviewSection : {
        heading : "Join our community of satisfied UI Clients",
        para : "Heelllo"
    }



    

} 