import { FaDraftingCompass, FaMagic } from "react-icons/fa";
import { FaCartShopping, FaLink, FaMagnifyingGlass, FaUsers } from "react-icons/fa6";
import { GrOptimize } from "react-icons/gr";
import { MdDevices, MdOutlineMobileFriendly } from "react-icons/md";


export const ApproachData = {
    customDesign : {
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
}