import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import React from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Header/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/Testimonials" element={<Testimonials/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
