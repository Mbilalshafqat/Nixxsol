import React from "react";
import "./Card.css";
import Projectcard from "../../Layout/ProjectCard/Projectcard";

const uxData = [
  {
    id: 1,
    title: "Project Name",
    dis: "Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis. Tellus nunc scelerisque dictum sagittis euismod urna egestas quam. In ornare nisl leo odio magna.",
    img: "./uxcard.svg",
  },
  {
    id: 2,
    title: "Project Name",
    dis: "Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis. Tellus nunc scelerisque dictum sagittis euismod urna egestas quam. In ornare nisl leo odio magna.",
    img: "./uxcard2.svg",
  },
  {
    id: 3,
    title: "Project Name",
    dis: "Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis. Tellus nunc scelerisque dictum sagittis euismod urna egestas quam. In ornare nisl leo odio magna.",
    img: "./uxcard3.svg",
  },
];

const Card = () => {
  return (
    <div>
      <Projectcard data={uxData} />
    </div>
  );
};

export default Card;
