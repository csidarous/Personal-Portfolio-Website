import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
// import { Contact } from "./components/Contact";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
