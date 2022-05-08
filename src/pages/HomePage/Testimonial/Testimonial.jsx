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
import { Fade } from "react-reveal";

const Testimonial = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/y658DKR/testimonial-bg.jpg')] bg-cover sm:h-[90vh] h-auto">
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
          <div className="flex justify-center items-center sm:h-[90vh] h-auto  sm:w-[50%] w-[90%] mx-auto sm:py-4 py-10">
            <Fade top>
              <div className="text-center pt-6 pb-4 ">
                <img
                  className="mx-auto border-8 testimonial-img sm:w-auto w-4/12"
                  src={testimonial3}
                  alt=""
                />
                <h4 className="sm:mt-6 mt-2 text-xl text-white">Khalid</h4>
                <p className="sm:mb-6 mb-2 text-stone-400">Customer</p>
                <blockquote className="text-white sm:text-xl text-sm sm:mb-4 mb-8">
                  “Impressed! We really only knock the R8 Performance for the
                  sport seats that have no seatback adjustments. The side
                  bolstering is also a bit too aggressive, which could be
                  problematic for wider-bodied passengers.! A++”
                </blockquote>

                <FaQuoteRight className="text-yellow-500 text-4xl mx-auto"></FaQuoteRight>
              </div>
            </Fade>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center sm:h-[90vh] h-auto  sm:w-[50%] w-[90%] mx-auto sm:py-4 py-10">
            <Fade top>
              <div className="text-center pt-6 pb-4">
                <div>
                  <img
                    className="mx-auto testimonial-img border-8 sm:w-auto w-4/12"
                    src={testimonial2}
                    alt=""
                  />
                </div>
                <h4 className="sm:mt-6 mt-2 text-xl text-white">
                  Donald Simpson
                </h4>
                <p className="sm:mb-6 mb-2 text-stone-400">Customer</p>
                <blockquote className="text-white sm:text-xl text-sm sm:mb-4 mb-8">
                  “With its recent 2021 refresh, we don't expect too many
                  changes for 2023, and Tesla hasn't confirmed anything. Tesla
                  will likely add new features via over-the-air updates, and to
                  stay competitive, there is a good chance the driving range
                  will slightly increase.”
                </blockquote>
                <FaQuoteRight className="text-yellow-500 text-4xl mx-auto"></FaQuoteRight>
              </div>
            </Fade>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center sm:h-[90vh] h-auto  sm:w-[50%] w-[90%] mx-auto sm:py-4 py-10">
            <Fade top>
              <div className="text-center pt-6 pb-4">
                <img
                  className="mx-auto testimonial-img border-8 sm:w-auto w-4/12"
                  src={testimonial1}
                  alt=""
                />
                <h4 className="sm:mt-6 mt-2 text-xl text-white">JOANA OLSEN</h4>
                <p className="sm:mb-6 mb-2 text-stone-400">Customer</p>
                <blockquote className="text-white sm:text-xl text-sm sm:mb-4 mb-8">
                  “The Highlander has been hauling large families around for
                  over 20 years. It serves as Toyota's midsize three-row SUV
                  that's positioned above the smaller two-row RAV4 and below the
                  larger truck-like Sequoia.”
                </blockquote>
                <FaQuoteRight className="text-yellow-500 text-4xl mx-auto"></FaQuoteRight>
              </div>
            </Fade>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
