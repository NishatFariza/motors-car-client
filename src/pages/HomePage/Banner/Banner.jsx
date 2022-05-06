import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import slider1 from "../../../images/slide1.jpg";
// import slider2 from "../../../images/slide2.jpg";
// import slider3 from "../../../images/slide3.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" bg-[url('https://i.ibb.co/BqJnCzG/slider1.jpg')] bg-cover">
            <div className="w-70 md:h-[90vh] h-[80vh] flex justify-center items-center">
              <div className="flex items-start">
                <div className="md:h-4 md:w-14 h-2 w-8 bg-blue-700 rounded md:mt-5 mt-3 mr-2"></div>
                <h1 className="md:text-6xl text-2xl font-bold text-white">
                  Advanced features. <br /> Environment friendly.
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-[url('https://i.ibb.co/grV33LR/slide2.jpg')] bg-cover">
            <div className="w-70 md:h-[90vh] h-[80vh] flex justify-center items-center">
              <div className="flex items-start">
                <div className="md:h-4 md:w-14 h-2 w-8 bg-blue-700 rounded md:mt-5 mt-3 mr-2"></div>
                <h1 className="md:text-6xl text-2xl font-bold text-white">
                  Visualize, Customize,
                  <br /> Actualize.
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/cLFwhKz/slide3.jpg')] bg-cover">
            <div className="md:h-[90vh] h-[80vh] flex justify-center items-center">
              <div className="flex items-start">
                <div className="md:h-4 md:w-14 h-2 w-8 bg-blue-700 rounded md:mt-5 mt-3 mr-2"></div>
                <h1 className="md:text-6xl text-2xl font-bold text-white">
                  Drive the future,
                  <br />
                  today.
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
