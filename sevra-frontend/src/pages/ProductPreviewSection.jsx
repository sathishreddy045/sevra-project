import React from 'react';
import { Link } from 'react-router-dom';
import './ProductPreviewSection.css';

const productCategories = [
  {
    iconClass: 'fas fa-pills',
    name: 'Medicines',
    description: 'Essential over-the-counter and prescribed medical supplies.',
    link: '/products'
  },
  {
    iconClass: 'fas fa-shopping-basket',
    name: 'Groceries',
    description: 'Fresh staples, dairy, and household necessities.',
    link: '/products'
  },
  {
    iconClass: 'fas fa-leaf',
    name: 'Fertilizers',
    description: 'High-quality agricultural inputs for better crop yields.',
    link: '/products'
  }
];

const ProductPreviewSection = () => {
  return (
    <section className="product-preview-section section-container">
      <h2 className="section-title">Our Products</h2>
      <p className="section-subtitle">
        We provide a curated selection of essentials across three main categories.
      </p>
      <div className="product-preview-grid">
        {productCategories.map((category, index) => (
          <Link to={category.link} className="product-preview-card" key={index}>
            <div className="product-icon-wrapper">
              <i className={category.iconClass}></i>
            </div>
            <h3 className="product-category-name">{category.name}</h3>
            <p className="product-category-description">{category.description}</p>
            <span className="explore-link">
              Explore Now <i className="fas fa-arrow-right"></i>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductPreviewSection;