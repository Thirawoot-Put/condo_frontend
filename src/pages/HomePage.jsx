import React from 'react';
import Hero from '../features/homepage/components/Hero';
import FeaturedList from '../features/homepage/components/FeaturedList';
import Carousel from '../features/homepage/components/Carousel';

function HomePage() {
  return (
    <div>
      <Hero />
      <FeaturedList />
      <div>popular area</div>
      <div>promote with us</div>
      {/* <Carousel /> */}
    </div>
  );
}

export default HomePage;
