import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import './App.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="section-title">Acasă</h2>
      <div className="button-container">
        <button className="styled-button">1</button>
        <button className="styled-button">2</button>
        <button className="styled-button">3</button>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="about-container">
      <h2 className="section-title">Despre</h2>
      {/* Alte componente specifice paginii "Despre" */}
    </div>
  );
};

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="section-title">Contact</h2>
      {/* Alte componente specifice paginii "Contact" */}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app">
        <header className="navbar">
          <h1 className="logo">E-Learning Platform</h1>
          <nav className="nav-links">
            <Link to="/">Acasă</Link>
            <Link to="/despre">Despre</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/despre" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>© 2023 E-Learning Platform. Toate drepturile rezervate.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
