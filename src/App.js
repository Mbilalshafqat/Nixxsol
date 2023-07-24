import "./App.css";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ForthPage from "./components/ForthPage";
import FifthPage from "./components/FifthPage";
import SixthPage from "./components/SixthPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<FirstPage />} />
          <Route exact path='/it_services' element={<SecondPage />}/>
          <Route exact path='/about' element={<About />}/>
          <Route exact path='/portfolio' element={<ForthPage />}/>
          <Route exact path='/ui_ux' element={<FifthPage />}/>
          <Route exact path='/game_devlopment' element={<SixthPage />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
