import React, { useEffect, useState } from "react";
import "./HomeTestimonial.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";

const slides = [
  {
    id: 0,
    img: "./First-page/p1.png",
  },
  {
    id: 1,
    img: "https://images.pexels.com/photos/6498775/pexels-photo-6498775.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/2708981/pexels-photo-2708981.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/9072208/pexels-photo-9072208.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/12300693/pexels-photo-12300693.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    img: "./First-page/p1.png",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/9281229/pexels-photo-9281229.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const HomeTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="testimonial_home">
      <div className="left">
        <h2>Portfolio</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Nunc viverra faucibus praesent
          elementum commodo.
        </p>
        <button>More Portfolio</button>
      </div>
      {/* ---------------------------- carousal  */}
      <div className="carousal_main_home h-[400px]">
        <div className="carousal_track_home h-[400px]">
          {slides &&
            slides.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`${
                    item.id === currentIndex
                      ? "carousal_slide_box_home"
                      : item.id === currentIndex + 1
                      ? "non_active_home carousal_slide_box_home"
                      : "carousal_slide_box_home opacity-0"
                  }`}
                  style={{
                    transform: `translateX(-${currentIndex * 102.5}%)`,
                    transition: "all 0.6s ease",
                  }}
                >
                  {/* <div className="carousal_box_left"> */}
                  <>
                    <img src={item.img} alt="" />
                    <div
                      className={`p-3 nonactiveheadingbtn absolute left-0 bottom-0 bg-[#E92129] cursor-pointer text-white clippath_btn
                    `}
                    >
                      <h2>Games</h2>
                      <div className="flex place-items-center gap-1">
                        <p>see all games</p>
                        <BsArrowRight />
                      </div>
                    </div>
                  </>

                  {/* <div>
                    <
                    </div> */}
                  {/* </div> */}
                </div>
              );
            })}
        </div>
        <div className="button">
          <button onClick={prevSlide}>
            <IoIosArrowBack />
          </button>
          <button onClick={nextSlide}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonial;
