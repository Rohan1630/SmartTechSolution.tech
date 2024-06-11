import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Home/>
        <Services/>
        <Contact/>
        <About/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
