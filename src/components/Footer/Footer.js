import React from "react";
import "./footer.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import {
  AiFillMail,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const LeftfooterContent = [
  {
    id: 1,
    icon: <BsFillTelephoneFill />,
    title: "+92 300 1234567",
  },
  {
    id: 2,
    icon: <AiFillMail />,
    title: "info@nixxsol.com",
  },
  {
    id: 3,
    icon: <HiLocationMarker />,
    title: `Lorem ipsum dolor sit amet consectetur.
       Dui libero lectus pulvinar mattis a.`,
  },
];

const Footer = () => {
  return (
    <div className="footer">
      {/* ---------------------------------- footer logo section one  */}
      <div className="footer_logo">
        <img src="./logofooter.PNG" alt="logo" />
      </div>

      {/* --------------------- footer content section 2  */}
      <div className="footer_content">
        {/* ----------------- left content  */}
        <div className="footer_conent_left">
          {LeftfooterContent.map((item, index) => {
            return (
              <div className="left_footer_box" key={index}>
                <p className="svg">{item.icon}</p>
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
        {/* -------------------------- right content  */}
        <div className="footer_conent_right">
          {/* -------------------------------------right_conent_footer_li */}
          <div className="right_conent_footer_li">
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/ItServices">Services</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/">Contact us</NavLink>
            </li>
          </div>

          {/* -------------------------- right_conent_footer_mail */}
          <div className="right_conent_footer_mail">
            <p>Stay in Conection</p>
            <div className="right_content_footer_input">
              <input type="text" placeholder="Email Address" />
              <button>Contact Us</button>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------------- bootom footer  */}
      <div className="bottom_footer">
        <p>© 2022 Nixxsol All Rights Reserved.</p>
        <div className="bottom_footer_icons">
          <FaFacebook />
          <AiFillInstagram />
          <AiFillTwitterCircle />
        </div>
      </div>
    </div>
  );
};

export default Footer;
