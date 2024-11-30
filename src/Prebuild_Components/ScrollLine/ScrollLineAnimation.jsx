import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollSnakeAnimation = () => {
  const { scrollYProgress } = useScroll(); // Track scroll progress

  // Horizontal path: Line starts from the right of the div
  const left = useTransform(scrollYProgress, [0, 0.5, 1], ["100%", "50%", "50%"]);
  
  // Vertical path: Line moves down after horizontal path
  const top = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "0%", "100%"]);

  // Dynamic height (starting with short height and expanding)
  const height = useTransform(scrollYProgress, [0, 0.5, 1], ["50px", "100px", "200px"]);

  // Width changes to give horizontal movement effect
  const width = useTransform(scrollYProgress, [0, 0.5, 1], ["0px", "300px", "0px"]);

  return (
    <div className="relative">
      {/* Section 1 */}
      <div className="h-screen bg-gray-800 flex items-center justify-center">
        <h1 className="text-white text-4xl">Section 1</h1>
      </div>

      {/* Snake-like Animated Line */}
      <motion.div
        className="absolute bg-purple-900"
        style={{
          top: top, // Vertical path movement
          left: left, // Horizontal movement
          width: width, // Width expands horizontally
          height: height, // Height expands vertically
        }}
      />

      {/* Section 2 */}
      <div className="h-screen bg-blue-500 flex items-center justify-center">
        <h1 className="text-white text-4xl">Section 2</h1>
      </div>

      {/* Section 3 */}
      <div className="h-screen bg-gray-800 flex items-center justify-center">
        <h1 className="text-white text-4xl">Section 3</h1>
      </div>
    </div>
  );
};

export default ScrollSnakeAnimation;
