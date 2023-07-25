import React, { useEffect } from "react";
import "./Hero.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = ({ title, discriptrion }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="Hero_section">
        <div className="hero_section_contnt">
          <h2>{title}</h2>
          <p>{discriptrion}</p>
        </div>
      </div>

      {/* ----------------------- facts  */}
      {/* ------------------ metting component  */}
    </>
  );
};

export default Hero;
