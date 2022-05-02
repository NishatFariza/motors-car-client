import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import testimonial1 from "../../../images/testimonial1.jpg";
import testimonial2 from "../../../images/testimonial2.jpeg";
import testimonial3 from "../../../images/testimonial3.jpg";

import "./Testimonial.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const Testimonial = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/y658DKR/testimonial-bg.jpg')] bg-cover h-[90vh]">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex justify-center items-center h-[90vh] w-[50%] mx-auto">
            <div className="text-center py-8">
              <img
                className="mx-auto border-8 testimonial-img"
                src={testimonial3}
                alt=""
              />
              <h4 className="mt-6 text-xl text-white">Khalid</h4>
              <p className="mb-6 text-stone-400">Customer</p>
              <blockquote className="text-white text-xl mb-6">
                “Impressed! We really only knock the R8 Performance for the
                sport seats that have no seatback adjustments. The side
                bolstering is also a bit too aggressive, which could be
                problematic for wider-bodied passengers.! A++”
              </blockquote>

              <FaQuoteRight className="text-yellow-500 text-4xl mx-auto"></FaQuoteRight>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-[90vh] w-[50%] mx-auto">
            <div className="text-center">
              <div>
                <img
                  className="mx-auto testimonial-img border-8"
                  src={testimonial2}
                  alt=""
                />
              </div>
              <h4 className="mt-6 text-xl text-white">Donald Simpson</h4>
              <p className="mb-6 text-stone-400">Customer</p>
              <blockquote className="text-white text-xl mb-6">
                “With its recent 2021 refresh, we don't expect too many changes
                for 2023, and Tesla hasn't confirmed anything. Tesla will likely
                add new features via over-the-air updates, and to stay
                competitive, there is a good chance the driving range will
                slightly increase.”
              </blockquote>
              <FaQuoteRight className="text-yellow-500 text-4xl mx-auto"></FaQuoteRight>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-[90vh] w-[50%] mx-auto">
            <div className="text-center">
              <img
                className="mx-auto testimonial-img border-8"
                src={testimonial1}
                alt=""
              />
              <h4 className="mt-6 text-xl text-white">JOANA OLSEN</h4>
              <p className="mb-6 text-stone-400">Customer</p>
              <blockquote className="text-white text-xl mb-6">
                “The Highlander has been hauling large families around for over
                20 years. It serves as Toyota's midsize three-row SUV that's
                positioned above the smaller two-row RAV4 and below the larger
                truck-like Sequoia.”
              </blockquote>
              <FaQuoteRight className="text-yellow-500 text-4xl mx-auto"></FaQuoteRight>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
