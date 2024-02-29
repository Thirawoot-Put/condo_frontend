import React from 'react';
import Hero from '../features/homepage/components/Hero';
import FeaturedList from '../features/homepage/components/FeaturedList';

function HomePage() {
  return (
    <div>
      <Hero />
      <FeaturedList />
      <div>popular area</div>
      <div>promote with us</div>
    </div>
  );
}

export default HomePage;
