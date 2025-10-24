import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Home Page</h1>
      <p className="home-description">
        This is the home page of our React application. 
        You can navigate to different sections using the navigation menu above.
      </p>
      <div className="home-features">
        <div className="feature-card">
          <h3>Feature 1</h3>
          <p>Learn about our services</p>
        </div>
        <div className="feature-card">
          <h3>Feature 2</h3>
          <p>Get in touch with us</p>
        </div>
        <div className="feature-card">
          <h3>Feature 3</h3>
          <p>Fill out our form</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
