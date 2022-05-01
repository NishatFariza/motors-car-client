import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../../images/slide1.jpg";
import slider2 from "../../../images/slide2.jpg";
import slider3 from "../../../images/slide3.jpg";

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
          <img className="slider-img" src={slider1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slider-img" src={slider2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slider-img" src={slider3} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
