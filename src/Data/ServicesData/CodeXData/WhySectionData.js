import { FaDraftingCompass, FaPaintBrush } from "react-icons/fa";
import {  FaRocket, FaUsers } from "react-icons/fa6";


export const whySectionData = {
            
    customDesign : {
        heading: "Why <span class= 'text-[#207DE9]'>Custom UI Designing</span> matters?",
        
        para: "By delivering visually appealing and user-friendly interfaces, led by experienced designers and backed by the latest trends, we ensure your business stands out. Enhance user experiences, boost engagement, and achieve your goals with a design-first approach.",
        
        whyKeys: [
        { heading: "User-Centered Design", explanation: 'Focus on understanding user behavior and needs to create intuitive, responsive, and engaging interfaces. Prioritize usability to ensure seamless navigation and a positive experience.', icon: <FaUsers /> },

        { heading: "Wireframing & Prototyping", explanation: 'Design detailed wireframes and prototypes to provide a visual blueprint of the user interface. This process ensures functionality, flow, and alignment with business goals before full development.', icon: <FaDraftingCompass /> },

        { heading: "Visual Aesthetics", explanation: 'Craft pixel-perfect designs with consistent branding, colors, and typography. Create interfaces that are not only beautiful but also align with your brand identity to leave a lasting impression.', icon: <FaPaintBrush /> },

        { heading: "Performance-Focused Design", explanation: 'Optimize UI designs for faster load times and smooth performance across devices. A well-designed UI reduces bounce rates and improves overall user satisfaction.', icon: <FaRocket /> }
        ]
,
    },
}