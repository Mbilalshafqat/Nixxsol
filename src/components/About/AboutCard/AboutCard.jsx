import React, { useEffect } from "react";
import "./AboutCard.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutCardData = [
  {
    id: 1,
    icon: "./Vission.png",
    title: "Vision",
    dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt sed mi posuere in amet turpis nunc, nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt sed mi posuere in amet turpis nunc, nisl.",
  },
  {
    id: 2,
    icon: "./mission.png",
    title: "Mission",
    dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt sed mi posuere in amet turpis nunc, nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt sed mi posuere in amet turpis nunc, nisl.",
  },
  {
    id: 3,
    icon: "./values.png",
    title: "Values",
    dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt sed mi posuere in amet turpis nunc, nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt sed mi posuere in amet turpis nunc, nisl.",
  },
];

const AboutCard = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="aboutCard">
      {AboutCardData &&
        AboutCardData.map((item) => {
          const motion =
            item.id === 1
              ? "fade-right"
              : item.id === 2
              ? "fade-up"
              : item.id === 3
              ? "fade-left"
              : "";

          return (
            <div
              className="aboutcard_box"
              data-aos={motion}
              data-aos-offset="300"
              data-aos-delay="50"
              key={item.id}
            >
              <img src={item.icon} alt={item.title} />
              <div>
                <h2>{item.title}</h2>
                <p>{item.dis}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AboutCard;
