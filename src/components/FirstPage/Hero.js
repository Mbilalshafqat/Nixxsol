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

const title = "About Company";

const discription =
  "Lorem ipsum dolor sit amet consectetur. Vestibulum nascetur vitae sapien";

const secondDiscription =
  "Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis.Tellus nunc scelerisque dictum sagittis euismod urna egestas quam. Inornare nisl leo odio magna.";

export default function Hero() {
  return (
    <>
      <Main />
      <AbouCompanyNumber
        title={title}
        discriptrion={discription}
        secondDiscription={secondDiscription}
      />

      <div className={styles.section1}>
        <About />
      </div>
      <div>
        <Portfolio />
      </div>

      <div className={styles.section3}>
        <div className="row">
          <div className="col">
            <img className="img-fluid" src="./First-page/image1.png" alt="" />
          </div>
          <div className="col">
            <img className="img-fluid" src="./First-page/image2.png" alt="" />
          </div>
          <div className="col">
            <img className="img-fluid" src="./First-page/image3.png" alt="" />
          </div>
          <div className="col">
            <img className="img-fluid" src="./First-page/image4.png" alt="" />
          </div>
          <div className="col">
            <img className="img-fluid" src="./First-page/image5.png" alt="" />
          </div>
        </div>
      </div>

      <div>
        <Testimonial />
      </div>

      <div>
        <MettingCompoent />
      </div>

      <div className={styles.section6}>
        <Partnership />
      </div>

      <div className={styles.section7}>
        <div
          className="card no-hover specific-card"
          style={{
            backgroundColor: "transparent",
            color: "white",
            border: "none",
          }}
        >
          <h1
            style={{ fontSize: "80px", fontWeight: "700" }}
            className="card-title card_title dynamic-spacing"
          >
            BEING CREATIVE
          </h1>
        </div>
      </div>
    </>
  );
}
