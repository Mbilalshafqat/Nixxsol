import React, { useEffect } from "react";
import Navbar from "../Navbar";
import "./About.css";
import Hero from "./Hero.jsx";
import AboutCard from "./AboutCard/AboutCard";
import WorkProcess from "./WorkProcess";
import MettingCompoent from "../Layout/MettingCompoent";

const About = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="about_page">
        <Hero />
      </div>
      <AboutCard />
      <WorkProcess />
      <MettingCompoent />
    </>
  );
};

export default About;
