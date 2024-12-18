import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation , Pagination , Autoplay, EffectCoverflow } from "swiper/modules"; // Import all required modules
import { MdOutlineStarPurple500 } from "react-icons/md";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './Sliders.css';
import CustomSlider from "../../Prebuild_Components/CustomSlider/CustomSlider";

// Initialize Swiper with modules
export const Testimonal = ({Reviews}) => {

  return (
    <>
        <div className="w-3/4 py-2 rounded-2xl mx-auto my-8">
          <CustomSlider>
          {Reviews.map((review , idx) => (
                <div key={idx} className="w-full  cursor-move md:min-w-[400px] pb-10 pt-2 relative border-2 border-[#207DE9] bg-white rounded-lg px-10">
                <div>
                  
                  <div className="w-full my-4 flex justify-center items-center gap-x-2">
                        {[1,2,3,4,5].map((index) => (
                            <MdOutlineStarPurple500 key={index} size={30}  className={` ${index > review.stars ? 'text-yellow-600' : 'text-yellow-400'}`}/>
                        ))}
                  </div>
                  <p>
                    {review.message}
                  </p>
                  <h6 className="text-[#207DE9] font-medium text-lg mt-5 ">- {review.name}.</h6>
                </div>
              </div>
            ))}
          </CustomSlider>
        </div>

    </>
  );
};
