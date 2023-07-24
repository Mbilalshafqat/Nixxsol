import React, { useEffect } from "react";
import Navbar from "../Navbar";
import "./About.css";
import Hero from "./Hero.jsx";
import AboutCard from "./AboutCard/AboutCard";
import WorkProcess from "./WorkProcess";
import MettingCompoent from "../../Layout/ConatctUs/MettingCompoent";
import Testimonial from "./Testimonial/Testimonial";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about_page">
        <Hero />
      </div>
      <AboutCard />
      <WorkProcess />
      <MettingCompoent />
      <Testimonial />
    </>
  );
};

export default About;
