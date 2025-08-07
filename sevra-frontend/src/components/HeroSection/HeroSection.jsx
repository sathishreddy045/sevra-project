import React from 'react';
import './HeroSection.css';
import heroImage from '../../assets/home_dp.jpg';

const HeroSection = () => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`
  };

  return (
    <div className="hero-container" style={heroStyle}>
      <div className="hero-content">
        <h1 className="hero-title">Empowering Rural Communities</h1>
        <p className="hero-subtitle">
          Easy access to essential products and services, right at your doorstep.
        </p>
        <a href="#products" className="hero-button">
          Explore Products
        </a>
      </div>
    </div>
  );
};

export default HeroSection;