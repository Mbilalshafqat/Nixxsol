import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WorkProcess = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div
        className="hero_facts py-12"
        data-aos="fade-up"
        data-aos-offset="300"
        fade-aos-delay="300"
      >
        <div className="left_facts">
          <h2>Our Work Process</h2>
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
        </div>
      </div>

      {/* ------------------------------  */}
      <div className="worg_process">
        <img src="./aboutsvg.PNG" alt="" className="computer_view" />
        <img src="./abotsvg2.PNG" alt="" className="resposive" />
      </div>
    </>
  );
};

export default WorkProcess;
