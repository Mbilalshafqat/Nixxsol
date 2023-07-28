import Card from "./Card";
import styles from "./Home.module.css";
import AboutHeroComponent from "../About/Hero";
import Creative from "../FirstPage/Creative";

const portcard = [
  {
    id: 1,
    title: "Zombie Land",
    dis: "Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis. Tellus nunc scelerisque dictum sagittis euismod urna egestas quam. In ornare nisl leo odio magna.",
    img: "./port1.svg",
  },
  {
    id: 2,

    img: "./port2.svg",
  },
  {
    id: 3,
    img: "./port3.svg",
  },
  {
    id: 4,
    img: "./port4.svg",
  },
  {
    id: 5,

    img: "./port5.svg",
  },
  {
    id: 6,

    img: "./port6.svg",
  },
];

export default function Hero() {
  return (
    <>
      <AboutHeroComponent
        title={"Our Portfolio"}
        discriptrion={"Home/Portfolio"}
      />

      <Card data={portcard} />

      <Creative />
    </>
  );
}
