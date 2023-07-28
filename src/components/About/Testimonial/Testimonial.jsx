import React, { useEffect, useState } from "react";
import "./Testimonial.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const slides = [
  {
    id: 0,
    img: "./First-page/adam.png",
    name: "Adam Smith",
    dis: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet proin ut urna sit. Varius sed euismod at est, commodo sociis dolor. Elit, suspendisse leo id in eu ut arcu, malesuada. Nibh suspendisse mauris amet, facilisi. Elit, suspendisse leo id in eu ut arcu, malesuada. Nibh suspendisse mauris amet, facilisi.”",
  },
  {
    id: 1,
    img: "./First-page/adam.png",
    name: "Adam Smith",
    dis: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet proin ut urna sit. Varius sed euismod at est, commodo sociis dolor. Elit, suspendisse leo id in eu ut arcu, malesuada. Nibh suspendisse mauris amet, facilisi. Elit, suspendisse leo id in eu ut arcu, malesuada. Nibh suspendisse mauris amet, facilisi.”",
  },
  {
    id: 2,
    img: "./First-page/adam.png",
    name: "Adam Smith",
    dis: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet proin ut urna sit. Varius sed euismod at est, commodo sociis dolor. Elit, suspendisse leo id in eu ut arcu, malesuada. Nibh suspendisse mauris amet, facilisi. Elit, suspendisse leo id in eu ut arcu, malesuada. Nibh suspendisse mauris amet, facilisi.”",
  },
  {
    id: 3,
    img: "./First-page/adam.png",
    name: "Adam Smith",
    dis: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet proin ut urna sit. Varius sed euismod at est, commodo sociis dolor. Elit, suspendisse leo id in eu ut arcu, malesuada. Nibh suspendisse mauris amet, facilisi. Elit, suspendisse leo id in eu ut arcu, malesuada. Nibh suspendisse mauris amet, facilisi.”",
  },
  {
    id: 4,
    img: "./First-page/adam.png",
    name: "Adam Smith",
    dis: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet proin ut urna sit. Varius sed euismod at est, commodo sociis dolor. Elit, suspendisse leo id in eu ut arcu, malesuada. Nibh suspendisse mauris amet, facilisi. Elit, suspendisse leo id in eu ut arcu, malesuada. Nibh suspendisse mauris amet, facilisi.”",
  },
  {
    id: 5,
    img: "./First-page/adam.png",
    name: "Adam Smith",
    dis: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet proin ut urna sit. Varius sed euismod at est, commodo sociis dolor. Elit, suspendisse leo id in eu ut arcu, malesuada. Nibh suspendisse mauris amet, facilisi. Elit, suspendisse leo id in eu ut arcu, malesuada. Nibh suspendisse mauris amet, facilisi.”",
  },
  {
    id: 6,
    img: "./First-page/adam.png",
    name: "Adam Smith",
    dis: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet proin ut urna sit. Varius sed euismod at est, commodo sociis dolor. Elit, suspendisse leo id in eu ut arcu, malesuada. Nibh suspendisse mauris amet, facilisi. Elit, suspendisse leo id in eu ut arcu, malesuada. Nibh suspendisse mauris amet, facilisi.”",
  },
];

const Testimonial = () => {
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
    <div className="testimonial">
      <div className="left">
        <h2>Testimonials</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Nunc viverra faucibus praesent
          elementum commodo.
        </p>
      </div>
      {/* ---------------------------- carousal  */}
      <div className="carousal_main">
        <div className="carousal_track">
          {slides &&
            slides.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`${
                    item.id === currentIndex
                      ? "carousal_slide_box"
                      : item.id === currentIndex + 1
                      ? "non_active leading-snug carousal_slide_box"
                      : "carousal_slide_box greatet_carousal_box"
                  }`}
                  style={{
                    transform: `translateX(-${currentIndex * 104}%)`,
                    transition: "all .6s ease",
                  }}
                >
                  {/* <div className="carousal_box_left"> */}
                  <img
                    src={item.img}
                    alt=""
                    style={{
                      transition: "all .6s ease",
                      display: "flex",
                      alignItems: "center",
                    }}
                  />
                  {/* </div> */}
                  <div className="carousal_box_right">
                    <h2>{item.name}</h2>
                    <p>{item.dis}</p>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="button">
          <button onClick={prevSlide}>
            <IoIosArrowBack />
          </button>
          {currentIndex !== slides.length - 1 && (
            <button onClick={nextSlide}>
              <IoIosArrowForward />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
