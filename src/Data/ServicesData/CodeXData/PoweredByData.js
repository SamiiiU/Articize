import { GrAchievement } from "react-icons/gr";
import { IoAnalytics, IoPeople } from "react-icons/io5";
import { SiGooglecontaineroptimizedos } from "react-icons/si";


export const PowerByData = {
    customDesign : {
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
    
}