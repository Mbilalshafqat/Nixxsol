import "./App.css";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ForthPage from "./components/ForthPage";
import FifthPage from "./components/FifthPage";
import SixthPage from "./components/SixthPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import { ScrollToTop } from "react-router-scroll-to-top";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<FirstPage />} />
          <Route exact path="/ItServices" element={<SecondPage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/portfolio" element={<ForthPage />} />
          <Route exact path="/fifthPage" element={<FifthPage />} />
          <Route exact path="/sixthPage" element={<SixthPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
