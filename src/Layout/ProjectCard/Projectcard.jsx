import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projectcard = ({ data }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="project_card_main_ux_game !overflow-x-hidden">
      <div className="project_card_ux_game">
        {data &&
          data.map((item, index) => {
            return (
              <div
                className={`project_card_box_ux_game ${
                  index % 2 !== 0 ? "give_order" : null
                }`}
                key={index}
              >
                <div className="project_card_left_ux_game">
                  <h2>{item.title}</h2>
                  <p>{item.dis}</p>
                </div>
                <div
                  className="project_card_right_ux_game"
                  data-aos={item.slide}
                  data-aos-once="true"
                  data-aos-delay={item.delay}
                >
                  <img src={item.img} alt="" />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Projectcard;
