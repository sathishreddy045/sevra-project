import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import ProductPreviewSection from '../pages/ProductPreviewSection';
import WhySevraSection from '../pages/WhySevraSection';
import NewsSection from '../components/NewsSection/NewsSection';
import ContactPage from './ContactPage';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProductPreviewSection />
      <WhySevraSection />
      <NewsSection />
      <ContactPage />
    </>
  );
};

export default HomePage;

