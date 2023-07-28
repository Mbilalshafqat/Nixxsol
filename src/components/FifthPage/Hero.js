import Card from "./Card";
import styles from "./Home.module.css";
import Services from "./Services";
import BookMeeting from "../FirstPage/BookMeeting";
import Testimonials from "../FirstPage/Testimonials";
import HeroComponent from "../About/Hero";
import UXcrad from "../../Layout/UXPORTcards/UXcrad";
import MettingCompoent from "../../Layout/ConatctUs/MettingCompoent";
import Testimonial from "../About/Testimonial/Testimonial";
import Creative from "../FirstPage/Creative";

export default function Hero() {
  return (
    <>
      {/* <div className="card my-5 p-5 no-hover" style={{width: "18rem;", border:"none", textAlign:"left", fontFamily:'Proxima Nova'}}>
  <div className="card-body">
    <h1 className="card-title specific-card">UI/UX<br/>Design</h1>
    <p className="card-text" >Home/Portfolio</p>
  </div>
</div> */}
      <div className="about_page">
        <HeroComponent
          title={"UI/UX Design"}
          discriptrion={<>Home/Portfolio</>}
        />
      </div>

      <UXcrad />

      <Card />

      <MettingCompoent />

      <Testimonial />

      <Creative />
    </>
  );
}
