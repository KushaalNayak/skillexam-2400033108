import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <div className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            We are a team of passionate developers who love creating amazing web applications.
            Our mission is to provide the best user experience through innovative solutions.
          </p>
          <h2>Our Mission</h2>
          <p>
            To deliver high-quality software solutions that help businesses grow and succeed
            in the digital world.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-item">
            <h3>100+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat-item">
            <h3>5+</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
