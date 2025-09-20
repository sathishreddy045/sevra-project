import React from 'react';
import './NewsSection.css';

import newsImage1 from '../../../../assets/news/news1.jpg';
import newsImage2 from '../../../../assets/news/news2.jpg';
import newsImage3 from '../../../../assets/news/news3.jpeg';

const newsData = [
  { 
    id: 1, 
    headline: 'New Government Subsidy Announced for Fertilizers', 
    date: 'August 5, 2025',
    imageUrl: newsImage1 
  },
  { 
    id: 2, 
    headline: 'Local Weather Update: Monsoon Expected to Arrive Early this Year', 
    date: 'August 4, 2025',
    imageUrl: newsImage2
  },
  { 
    id: 3, 
    headline: 'Digital Literacy Camp to be Held in Nearby Village on August 15th', 
    date: 'August 2, 2025',
    imageUrl: newsImage3
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="section-container news-section-bg">
      <h2 className="section-title">News & Updates</h2>
      <p className="section-subtitle">
        Stay informed with the latest news and announcements relevant to our community.
      </p>
      <div className="news-container">
        {newsData.map(item => (
          <div className="news-item" key={item.id}>
            <img src={item.imageUrl} alt={item.headline} className="news-image" />
            <div className="news-content">
              <span className="news-date">{item.date}</span>
              <a href="#" className="news-headline">{item.headline}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;