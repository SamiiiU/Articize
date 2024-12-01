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
                  <div className="w-full flex justify-center">
                    <img
                      className="w-28 h-28 border-2 border-[#207DE9] rounded-full p-2"
                      style={{backgroundImage : `url("${review.avatar}")` , backgroundSize : 'contain', backgroundPosition : 'center', backgroundRepeat : 'no-repeat'}}
                    />
                  </div>
                  <div className="w-full my-4 flex justify-center items-center gap-x-2">
                        {[1,2,3,4,5].map((idx) => (
                            <MdOutlineStarPurple500 size={30}  className={` ${idx > review.stars ? 'text-yellow-600' : 'text-yellow-400'}`}/>
                        ))}
                  </div>
                  <p>
                    {review.massage}
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
