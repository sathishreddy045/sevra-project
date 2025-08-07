import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Contact Us</h2>
      <p className="section-subtitle">
        Have questions? We're here to help. Reach out to us anytime.
      </p>
      <div className="contact-grid">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>
            Our team is available to assist you with orders, services, or any inquiries you may have.
          </p>
          <div className="info-item">
            <h4>Address</h4>
            <p>Sevra Kendra, Main Road, Ramgarh Village, Telangana, 500001</p>
          </div>
          <div className="info-item">
            <h4>Helpline Number</h4>
            <p>+91-1800-200-3000 (Toll-Free)</p>
          </div>
        </div>
        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;