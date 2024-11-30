import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './style.css'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";


const CustomSlider = ({children }) => {

    const [width, setWidth] = useState(window.innerWidth);

    // Function to update width state on window resize
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };
  
    // Add event listener for window resize
    useEffect(() => {
      window.addEventListener("resize", updateWidth);
      
      // Clean up event listener on component unmount
      return () => {
        window.removeEventListener("resize", updateWidth);
      };
    }, []);
  const NextArrow = ({ onClick }) => (
    <div onClick={onClick} className="absolute hover:text-[#207DE9] -right-12 top-1/2 transform -translate-y-1/2 cursor-pointer shadow-md z-10 text-2xl p-2 rounded-full ">
      <FaArrowRight />
    </div>
  );
  
  const PrevArrow = ({ onClick }) => (
    <div onClick={onClick} className="absolute hover:text-[#207DE9] -left-12 top-1/2 transform -translate-y-1/2 cursor-pointer shadow-md z-10 text-2xl p-2 rounded-full">
      <FaArrowLeft size={24} />
    </div>
  );

  const settings = {
    dots: width > 640 ? false : true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    
    slidesToScroll: 1,
    nextArrow: width > 640 ? <NextArrow /> : null,
    prevArrow: width > 640 ? <PrevArrow /> : null,
    
  };
  return (
    <Slider {...settings}>
      {children}
    </Slider>
  );
};



export default CustomSlider;
