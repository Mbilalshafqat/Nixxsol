import "./App.css";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import ForthPage from "./components/ForthPage";
import FifthPage from "./components/FifthPage";
import SixthPage from "./components/SixthPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import TopNavbar from "./components/staticNavbar/TopNavbar";
import React from "react";
import About from "./components/About/About";
import { ScrollToTop } from "react-router-scroll-to-top";

function App() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, scroll: "instant" });
  }, []);

  return (
    <>
      <div className="relative">
        <Router>
          <ScrollToTop />
          <TopNavbar />
          <Routes>
            <Route exact path="/" element={<FirstPage />} />
            <Route exact path="/it_services" element={<SecondPage />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/portfolio" element={<ForthPage />} />
            <Route exact path="/ui_ux" element={<FifthPage />} />
            <Route exact path="/game_devlopment" element={<SixthPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
