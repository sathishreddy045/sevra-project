import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import ProductsSection from '../components/ProductsSection/ProductsSection';
import NewsSection from '../components/NewsSection/NewsSection';
import ContactSection from '../components/ContactSection/ContactSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <NewsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;