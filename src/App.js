import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage'; 
import ThirdPage from './components/ThirdPage';
import ForthPage from './components/ForthPage';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import { MdFirstPage } from 'react-icons/md';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path='/' element={<FirstPage />} />
          <Route exact path='/firstPage' element={<FirstPage />} />
          <Route exact path='/secondPage' element={<SecondPage />}/>
          <Route exact path='/thirdPage' element={<ThirdPage />}/>
          <Route exact path='/forthPage' element={<ForthPage />}/>

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
