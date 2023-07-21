import React, { useEffect } from "react";
import "./Hero.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="Hero_section">
        <div className="hero_section_contnt">
          <h2>About company.</h2>
          <p>
            Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis.
          </p>
        </div>
      </div>

      {/* ----------------------- facts  */}
      <div className="hero_facts">
        <div className="left_facts">
          <h2>Our Fun Facts</h2>
        </div>
        <div className="right_facts">
          <h3>
            Lorem ipsum dolor sit amet consectetur. Vestibulum nascetur vitae
            sapien
          </h3>
          <p>
            Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis.
            Tellus nunc scelerisque dictum sagittis euismod urna egestas quam.
            In ornare nisl leo odio magna.
          </p>
          <div className="facts_numbring">
            <div className="numbring_box">
              <h2>100+</h2>
              <p>Happy Clients</p>
            </div>
            <div className="numbring_box">
              <h2>05+</h2>
              <p>Years in business</p>
            </div>
            <div className="numbring_box">
              <h2>50+</h2>
              <p>Total Memebers</p>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------ metting component  */}
    </>
  );
};

export default Hero;
