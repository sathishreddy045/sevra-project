import React from 'react';
import HeroSection from '../../components/common/HeroSection/HeroSection';
import ServicesSection from '../../components/features/services/ServicesSection/ServicesSection';
import ProductPreviewSection from '../../components/features/products/ProductPreviewSection';
import WhySevraSection from '../../components/features/services/WhySevraSection';
import NewsSection from '../../components/features/news/NewsSection/NewsSection';
import ContactPage from '../user/ContactPage';

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

