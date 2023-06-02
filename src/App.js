import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage'; // Component names must start with a capital letter
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

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
