import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="hero">
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Ryan Roferos</h1>
            <h2 className="hero-subtitle">Frontend Developer & Technical Support Specialist</h2>
            <p className="hero-description">
              I create clean, user-friendly web experiences with modern technologies 
              and provide comprehensive technical support solutions.
            </p>
            <div className="hero-buttons">
              <a href="/projects" className="btn btn-primary">View My Work</a>
              <a href="/contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/profile.jpg" alt="Ryan Roferos" className="profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
