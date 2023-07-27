import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "./ImagesscourseHome.css";

const ImagescarousalHome = () => {
  return (
    <div className="bg-black flex justify-center gap-[29px] overflow-x-auto px-[20px] py-[20px] lg:px-[150px] lg:justify-center md:justify-center sm:justify-center">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        autoplay={{ delay: 3000 }} // Change the delay to adjust auto-scroll speed (in ms)
        modules={[Pagination, Autoplay]} // Include Autoplay module
        className="mySwiper"
        breakpoints={{
          1350: {
            slidesPerView: 5,
          },
          1300: {
            slidesPerView: 4,
          },
          // When window width is >= 1200px
          1200: {
            slidesPerView: 4,
          },
          // When window width is >= 992px
          992: {
            slidesPerView: 3,
          },
          // When window width is >= 640px
          640: {
            slidesPerView: 3,
          },

          350: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide className="SwiperSlide">
          <div className="w-[225px] h-[85px] flex justify-center items-center">
            <img
              className="object-contain"
              src="./First-page/image1.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <div className="w-[225px] h-[85px] flex justify-center items-center">
            <img
              className="object-contain"
              src="./First-page/image2.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <div className="w-[225px] h-[85px] flex justify-center items-center">
            <img
              className="object-contain"
              src="./First-page/image3.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <div className="w-[225px] h-[85px] flex justify-center items-center">
            <img
              className="object-contain"
              src="./First-page/image4.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <div className="w-[225px] h-[85px] flex justify-center items-center">
            <img
              className="object-contain"
              src="./First-page/image5.png"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImagescarousalHome;
