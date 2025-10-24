import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Form from './Form';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';

const Main = () => {
  return (
    <Router>
      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      </div>
    </Router>
  )
}
export default Main;