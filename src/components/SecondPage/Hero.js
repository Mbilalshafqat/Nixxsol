import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from "@chakra-ui/react";
import styles from "./Home.module.css";
import Cards from "./Cards";
import BookMeeting from "./BookMeeting";
import Partnership from "../FirstPage/Partnership";
import HeroAbout from "../About/Hero";
import AbouCompanyNumber from "../About/AboutCard/AbouCompanyNumber";
import MettingCompoent from "../../Layout/ConatctUs/MettingCompoent";
import CommonCard from "../../Layout/CommonCard/CommonCard";
import Creative from "../FirstPage/Creative";

const heroTitle = "IT Services";
const herodiscription =
  "Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis.";

const titel = "What we offer.";
const secondDiscription =
  "Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis. Tellus nunc scelerisque dictum sagittis euismod urna egestas quam. In ornare nisl leo odio magna.";
const aboutdiscriptrion =
  "Lorem ipsum dolor sit amet consectetur. Vestibulum nascetur vitae sapien";

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
  {
    id: 7,
    image: "./First-page//game.png",
    projectName: "Game Development",
    totalproject: "12 projects done",
  },
  {
    id: 8,
    image: "./First-page//game.png",
    projectName: "Game Development",
    totalproject: "12 projects done",
  },
  {
    id: 9,
    image: "./First-page//game.png",
    projectName: "Game Development",
    totalproject: "12 projects done",
  },
];

export default function Hero() {
  return (
    <>
      <HeroAbout title={heroTitle} discriptrion={herodiscription} />

      <AbouCompanyNumber
        title={titel}
        discriptrion={aboutdiscriptrion}
        secondDiscription={secondDiscription}
        number={false}
      />

      {/* <div className={styles.section1}>
        <Cards />
      </div> */}
      <CommonCard carddata={cardsdata} />

      <div
        className="card mb-3 p-5 no-hover"
        style={{ maxWidth: "540px;", border: "none" }}
      >
        <AbouCompanyNumber
          title={"Why choose us."}
          discriptrion={
            "Lorem ipsum dolor sit amet consectetur. Vestibulum nascetur vitae sapien"
          }
          secondDiscription={
            "Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis. Tellus nunc scelerisque dictum sagittis euismod urna egestas quam. In ornare nisl leo odio magna."
          }
          number={false}
        />
      </div>

      <div className={styles.section2}>
        <MettingCompoent />
      </div>

      <Partnership />

      <Creative />
    </>
  );
}
