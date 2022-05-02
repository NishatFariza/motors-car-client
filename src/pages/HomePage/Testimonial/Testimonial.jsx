import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import testimonial1 from "../../../images/testimonial1.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const Testimonial = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/y658DKR/testimonial-bg.jpg')] bg-cover h-[90vh]">
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
          <div className="flex justify-center items-center ">
            <div>
              <img src={testimonial1} alt="" />
              <h4>JOANA OLSEN</h4>
              <p>Customer</p>
              <blockquote>
                Impressed! I have installed 50+ themes. This is by far the best
                one I have ever worked on. Easy to use and loaded with
                functions. Support is also great! A++”
              </blockquote>
              <FaQuoteRight className="text-yellow-500 text-3xl"></FaQuoteRight>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center ">
            <div>
              <img src={testimonial1} alt="" />
              <h4>JOANA OLSEN</h4>
              <p>Customer</p>
              <blockquote>
                Impressed! I have installed 50+ themes. This is by far the best
                one I have ever worked on. Easy to use and loaded with
                functions. Support is also great! A++”
              </blockquote>
              <FaQuoteRight className="text-yellow-500 text-3xl"></FaQuoteRight>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center ">
            <div>
              <img src={testimonial1} alt="" />
              <h4>JOANA OLSEN</h4>
              <p>Customer</p>
              <blockquote>
                Impressed! I have installed 50+ themes. This is by far the best
                one I have ever worked on. Easy to use and loaded with
                functions. Support is also great! A++”
              </blockquote>
              <FaQuoteRight className="text-yellow-500 text-3xl"></FaQuoteRight>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
