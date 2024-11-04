import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation , Pagination , Autoplay, EffectCoverflow } from "swiper/modules"; // Import all required modules
import { MdOutlineStarPurple500 } from "react-icons/md";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './Sliders.css';

// Initialize Swiper with modules
export const Testimonal = ({Reviews}) => {

    console.log(Reviews)
  return (
    <>
        <div className="md:w-full w-3/4 flex md:shadow-none shadow-custom-equal mx-auto my-10">
          
          <Swiper
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{ delay: 3000 }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="py-20 px-11 w-full"
            effect={"coverflow"}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 5,
              stretch: 20,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {Reviews.map((review , idx) => (
                <SwiperSlide key={idx} className="w-full md:min-w-[400px] pb-10 pt-2 relative border-2 border-[#207DE9] bg-white rounded-lg px-10">
                <div>
                  <div className="w-full flex justify-center ">
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
              </SwiperSlide>
            ))}

          </Swiper>
        </div>

    </>
  );
};
