import React from 'react';
import Hero from '../features/homepage/components/Hero';
import FeaturedList from '../features/homepage/components/FeaturedList';
import PopularArea from '../features/homepage/components/PopularArea';
import PromoteWithUs from '../features/homepage/components/PromoteWithUs';
import ImageSlide from '../components/ImageSlide';

function HomePage() {
  return (
    <div>
      <Hero />
      <ImageSlide />
      <FeaturedList />
      <PopularArea />
      <PromoteWithUs />
    </div>
  );
}

export default HomePage;
