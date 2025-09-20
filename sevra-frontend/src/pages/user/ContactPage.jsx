import React, { useState } from 'react';
import axios from 'axios';
import './ContactPage.css';

export const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: 'Sending...', type: 'loading' });

    try {
      await axios.post('http://localhost:5001/api/data/contact', { 
        name: formData.name, 
        message: `${formData.message} (from: ${formData.email})` 
      });
      setStatus({ message: 'Message sent successfully! We will get back to you soon.', type: 'success' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ message: 'Failed to send message. Please try again.', type: 'error' });
    }
  };

  return (
    <div className="contact-page-container section-container">
      <div className="contact-page-header">
        <h1 className="section-title">Get in Touch</h1>
        <p className="section-subtitle">We'd love to hear from you. Whether you have a question, feedback, or need assistance, our team is ready to help.</p>
      </div>
      <div className="contact-page-grid">
        <div className="contact-info-panel">
          <h3>Contact Information</h3>
          <p>Fill up the form and our team will get back to you within 24 hours.</p>
          <div className="info-item">
            <i className="fas fa-phone-alt"></i>
            <span>+91-1800-200-3000</span>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <span>help@sevra.com</span>
          </div>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Sevra, Jangaon, Telangana</span>
          </div>
          <div className="map-placeholder">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60805.26197372327!2d79.11884573999049!3d17.729136653456408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb585fdec8cf59%3A0xcb016fc01ef0e3fa!2sJangaon%2C%20Telangana!5e0!3m2!1sen!2sin!4v1758318837937!5m2!1sen!2sin" 
    width="100%" 
    height="100%" 
    style={{ border: 0 }} 
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade">
  </iframe>
</div>
        </div>
        <div className="contact-form-panel">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
            {status.message && (
              <p className={`status-message ${status.type}`}>{status.message}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;