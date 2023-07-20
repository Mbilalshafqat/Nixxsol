import './App.css';
import Navbar from './components/Navbar';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage'; 
import ThirdPage from './components/ThirdPage';
import ForthPage from './components/ForthPage';
import FifthPage from './components/FifthPage';
import SixthPage from './components/SixthPage';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import { MdFirstPage } from 'react-icons/md';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<FirstPage />} />
          <Route exact path='/ItServices' element={<SecondPage />}/>
          <Route exact path='/about' element={<ThirdPage />}/>
          <Route exact path='/portfolio' element={<ForthPage />}/>
          <Route exact path='/fifthPage' element={<FifthPage />}/>
          <Route exact path='/sixthPage' element={<SixthPage />}/>

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
