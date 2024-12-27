import BG from '../../../Assets/Images/CommonImages/HeroServices.png'
import heroImage from '../../../Assets/Images/CommonImages/CodeXImages/CodeXHeroIMG.png'
import { FaDraftingCompass, FaPaintBrush, FaRocket, FaUsers } from 'react-icons/fa'


export const customDesignData = {
    heroSection : {
        heading: "Revolutionize Your Online Presence with Cutting-Edge Custom Web Design Solutions That Deliver Results",
        para: "Unlock your brand's potential with stunning, functional web design tailored to your goals. We create responsive, user-friendly websites that captivate visitors, drive engagement, and boost conversions. Let us transform your vision into a powerful online presence!",
        img: heroImage,
        bg: BG,
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

    customPackage : {
        heading : "Bringing Your Ideas to Life with Tailored UI Designs for Seamless User Experiences",

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
        
    }

    

} 