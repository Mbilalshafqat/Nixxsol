import React, { useEffect } from "react";
import Navbar from "../Navbar";
import "./About.css";
import Hero from "./Hero.jsx";
import AboutCard from "./AboutCard/AboutCard";
import WorkProcess from "./WorkProcess";
import MettingCompoent from "../../Layout/ConatctUs/MettingCompoent";
import Testimonial from "./Testimonial/Testimonial";
import AbouCompanyNumber from "./AboutCard/AbouCompanyNumber";

const title = "Our Fun Facts";

const discription =
  "Lorem ipsum dolor sit amet consectetur. Vestibulum nascetur vitae sapien";

const titlehero = "About company.";
const dicriptionhero =
  "Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis.";

const secondDiscription =
  "Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis. Tellus nunc scelerisque dictum sagittis euismod urna egestas quam. In ornare nisl leo odio magna.";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="about_page">
        <Hero title={titlehero} discriptrion={dicriptionhero} />
      </div>
      <AbouCompanyNumber
        title={title}
        discriptrion={discription}
        secondDiscription={secondDiscription}
      />

      <AboutCard />
      <WorkProcess />
      <MettingCompoent />
      <Testimonial />
    </>
  );
};

export default About;
