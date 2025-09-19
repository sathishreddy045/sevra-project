import React from 'react';
import './WhySevraSection.css';

export const features = [
  {
    icon: 'fas fa-truck',
    title: 'Reliable Delivery',
    description: 'We ensure your essential goods are delivered safely and on time, every time.'
  },
  {
    icon: 'fas fa-leaf',
    title: 'Quality Assured',
    description: 'We source only high-quality, authentic products from trusted suppliers.'
  },
  {
    icon: 'fas fa-rupee-sign',
    title: 'Fair Pricing',
    description: 'Our commitment is to provide all essentials at fair and transparent prices.'
  }
];

const WhySevraSection = () => {
  return (
    <section className="why-sevra-section section-container">
      <h2 className="section-title">Why Choose Sevra?</h2>
      <p className="section-subtitle">Your trusted partner in rural prosperity.</p>
      <div className="why-sevra-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon-wrapper">
              <i className={feature.icon}></i>
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhySevraSection;