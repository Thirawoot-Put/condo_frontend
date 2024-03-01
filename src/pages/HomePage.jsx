import React from 'react';
import Hero from '../features/homepage/components/Hero';
import FeaturedList from '../features/homepage/components/FeaturedList';
import ImageSlide from '../components/ImageSlide';

function HomePage() {
  return (
    <div>
      <Hero />
      <ImageSlide />
      <FeaturedList />
      <div>popular area</div>
      <div>promote with us</div>
    </div>
  );
}

export default HomePage;
