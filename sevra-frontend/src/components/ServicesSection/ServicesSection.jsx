import React from 'react';
import './ServicesSection.css';

import groceryIcon from '../../assets/icons/groceries.png';
import medicineIcon from '../../assets/icons/medicine.png';
import fertilizerIcon from '../../assets/icons/fertilizers.png';
import healthIcon from '../../assets/icons/healthcare.png';
import educationIcon from '../../assets/icons/education.png';

const servicesData = [
  {
    icon: groceryIcon,
    name: 'Grocery Delivery',
    description: 'Fresh groceries and daily essentials delivered.'
  },
  {
    icon: medicineIcon,
    name: 'Medicine Supply',
    description: 'Over-the-counter and prescribed medicines.'
  },
  {
    icon: fertilizerIcon,
    name: 'Farming Inputs',
    description: 'High-quality seeds, fertilizers, and tools.'
  },
  {
    icon: healthIcon,
    name: 'Veterinary Services',
    description: 'Health services and products for your livestock.'
  },
  {
    icon: educationIcon, // Changed icon
    name: 'Education Service', // Changed name
    description: 'Access to online courses and learning materials.' // Changed description
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-container">
      <h2 className="section-title">Our Services</h2>
      <p className="section-subtitle">
        We provide a range of services to meet the essential needs of our communities.
      </p>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.icon} alt={`${service.name} icon`} className="service-icon" />
            <h3 className="service-name">{service.name}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;