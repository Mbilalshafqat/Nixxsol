import Main from "./Main";
import CompanyStats from "./CompanyStats";
import styles from "./Home.module.css";
import About from "./About";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import BookMeeting from "./BookMeeting";
import Partnership from "./Partnership";
import Testimonial from "../About/Testimonial/Testimonial";
import MettingCompoent from "../../Layout/ConatctUs/MettingCompoent";
import "./Hero.css";
import AbouCompanyNumber from "../About/AboutCard/AbouCompanyNumber";
import CommonCard from "../../Layout/CommonCard/CommonCard";
import ImagescarousalHome from "./ImagescarousalHome";
import Creative from "./Creative.jsx";

const title = "About Company";

const discription =
  "Lorem ipsum dolor sit amet consectetur. Vestibulum nascetur vitae sapien";

const secondDiscription =
  "Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis.Tellus nunc scelerisque dictum sagittis euismod urna egestas quam. Inornare nisl leo odio magna.";

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
  {
    id: 5,
    image: "./First-page//game.png",
    projectName: "Game Development",
    totalproject: "12 projects done",
  },
  {
    id: 6,
    image: "./First-page//game.png",
    projectName: "Game Development",
    totalproject: "12 projects done",
  },
];

export default function Hero() {
  return (
    <>
      <Main />
      <AbouCompanyNumber
        title={title}
        discriptrion={discription}
        secondDiscription={secondDiscription}
      />

      <CommonCard carddata={cardsdata} />

      <div>
        <Portfolio />
      </div>

      <ImagescarousalHome />

      <div>
        <Testimonial />
      </div>

      <div>
        <MettingCompoent />
      </div>

      <div className={styles.section6}>
        <Partnership />
      </div>

      <Creative />
    </>
  );
}
