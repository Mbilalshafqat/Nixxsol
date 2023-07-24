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

function App() {
  return (
    <>
      <div className="relative">
        <Router>
          <TopNavbar />
          <Routes>
            <Route exact path='/' element={<FirstPage />} />
            <Route exact path='/it_services' element={<SecondPage />} />
            <Route exact path='/about' element={<ThirdPage />} />
            <Route exact path='/portfolio' element={<ForthPage />} />
            <Route exact path='/ui_ux' element={<FifthPage />} />
            <Route exact path='/game_devlopment' element={<SixthPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
