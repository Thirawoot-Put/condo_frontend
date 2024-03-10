import React from 'react';
import FeaturedList from '../features/homepage/components/FeaturedList';
import PopularArea from '../features/homepage/components/PopularArea';
import Rating from '../features/homepage/components/Rating';
import SlideHero from '../features/homepage/components/SlideHero';

function HomePage() {
  return (
    <div>
      <SlideHero />
      <FeaturedList />
      <PopularArea />

      <Rating />
    </div>
  );
}

export default HomePage;
