// import {
//     Flex,
//     Box,
//     Image,
//     useBreakpointValue,
// } from "@chakra-ui/react";

// const Carousel = () => {
//     const cards = [
//         { id: "1", src: "./First-page/image6.png" },
//         { id: "2", src: "./First-page/image7.png" },
//         { id: "3", src: "./First-page/image8.png" },
//         { id: "4", src: "./First-page/image9.png" },
//         { id: "5", src: "./First-page/image10.png" },
//     ];
//     const marginValue = useBreakpointValue({ base: "1rem", md: "1rem" });
//     const cardsList = cards.map((item) => {
//         return (
//             <Box
//                 key={item.id}
//                 p="2rem"
//                 borderRadius={"10px"}
//                 boxShadow={"2px 2px 2px 2px rgba(0, 0, 0, 0.1)"}
//                 marginRight={marginValue}
//                 marginBottom={marginValue}
//             >
//                 <Image src={item.src} />
//             </Box>
//         );
//     });

//     const justifyContentValue = useBreakpointValue({ base: "center", md: "space-between" });

//     return (
//         <Flex
//             p="10rem 3rem"
//             justifyContent={justifyContentValue}
//             flexWrap="wrap"
//         >
//             {cardsList}
//         </Flex>
//     );
// };

// export default Carousel;

// ========================================================================================
// ========================================================================================

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "./ImagesscourseHome.css";
import { Flex, Box, Image, useBreakpointValue } from "@chakra-ui/react";

const Partnership = () => {
  const marginValue = useBreakpointValue({ base: "1rem", md: "1rem" });
  return (
    <div className=" flex justify-center gap-[29px] overflow-x-auto px-[20px] py-[100px] lg:px-[150px] lg:justify-center md:justify-center sm:justify-center">
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
          <div
            p="2rem"
            borderRadius={"10px"}
            boxShadow={"2px 2px 2px 2px rgba(0, 0, 0, 0.1)"}
            marginRight={marginValue}
            marginBottom={marginValue}
          >
            <img src="./First-page/image6.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <div
            p="2rem"
            borderRadius={"10px"}
            boxShadow={"2px 2px 2px 2px rgba(0, 0, 0, 0.1)"}
            marginRight={marginValue}
            marginBottom={marginValue}
          >
            <img src="./First-page/image7.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <div
            p="2rem"
            borderRadius={"10px"}
            boxShadow={"2px 2px 2px 2px rgba(0, 0, 0, 0.1)"}
            marginRight={marginValue}
            marginBottom={marginValue}
          >
            <img src="./First-page/image8.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <div
            p="2rem"
            borderRadius={"10px"}
            boxShadow={"2px 2px 2px 2px rgba(0, 0, 0, 0.1)"}
            marginRight={marginValue}
            marginBottom={marginValue}
          >
            <img src="./First-page/image9.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <div
            p="2rem"
            borderRadius={"10px"}
            boxShadow={"2px 2px 2px 2px rgba(0, 0, 0, 0.1)"}
            marginRight={marginValue}
            marginBottom={marginValue}
          >
            <img src="./First-page/image10.png" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Partnership;
