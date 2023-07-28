import Card from "./Card";
import styles from "./Home.module.css";
import Services from "./Services";
import BookMeeting from "../FirstPage/BookMeeting";
import Testimonials from "../FirstPage/Testimonials";
import HeroComponent from "../About/Hero";
import UXcrad from "../../Layout/UXPORTcards/UXcrad";
import Maincard from "../../Layout/UXPORTcards/Maincard";
import Projectcard from "../../Layout/ProjectCard/Projectcard";
import MettingCompoent from "../../Layout/ConatctUs/MettingCompoent";
import Testimonial from "../About/Testimonial/Testimonial";
import Creative from "../FirstPage/Creative";

const cardsdata = [
  {
    id: 1,
    image: "./First-page//game.png",
    projectName: "Game Development",
    totalproject: "12 projects done",
  },
  {
    id: 2,
    image: "./First-page//game.png",
    projectName: "Game Development",
    totalproject: "12 projects done",
  },
  {
    id: 3,
    image: "./First-page//game.png",
    projectName: "Game Development",
    totalproject: "12 projects done",
  },
  {
    id: 4,
    image: "./First-page//game.png",
    projectName: "Game Development",
    totalproject: "12 projects done",
  },
];

const gameData = [
  {
    id: 1,
    title: "Project Name",
    dis: "Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis. Tellus nunc scelerisque dictum sagittis euismod urna egestas quam. In ornare nisl leo odio magna.",
    img: "./uxcard.svg",
    slide: "fade-left",
    delay: 0,
  },
  {
    id: 2,
    title: "Project Name",
    dis: "Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis. Tellus nunc scelerisque dictum sagittis euismod urna egestas quam. In ornare nisl leo odio magna.",
    img: "./uxcard2.svg",
    slide: "fade-right",
    delay: 1000,
  },
  {
    id: 3,
    title: "Project Name",
    dis: "Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis. Tellus nunc scelerisque dictum sagittis euismod urna egestas quam. In ornare nisl leo odio magna.",
    img: "./uxcard3.svg",
    slide: "fade-left",
    delay: 1000,
  },
];
export default function Hero() {
  return (
    <>
      <HeroComponent
        width={true}
        title={"Game Development"}
        discriptrion={"Home/Portfolio"}
      />

      <Maincard carddata={cardsdata} />

      <Projectcard data={gameData} />

      <MettingCompoent />

      <Testimonial />
      <Creative />
    </>
  );
}
