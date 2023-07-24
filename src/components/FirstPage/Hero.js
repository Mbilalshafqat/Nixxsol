import Main from "./Main";
import CompanyStats from "./CompanyStats";
import styles from "./Home.module.css";
import About from "./About";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import BookMeeting from "./BookMeeting";
import Partnership from "./Partnership";
import Testimonial from "../About/Testimonial/Testimonial";

export default function Hero() {
  return (
    <>
      <Main />
      <CompanyStats />

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

      <div className={styles.section5}>
        <BookMeeting />
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
            className="card-title dynamic-spacing"
          >
            BEING CREATIVE
          </h1>
        </div>
      </div>
    </>
  );
}
