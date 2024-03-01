import React from 'react';
import Hero from '../features/homepage/components/Hero';
import FeaturedList from '../features/homepage/components/FeaturedList';
import PopularArea from '../features/homepage/components/PopularArea';
import PromoteWithUs from '../features/homepage/components/PromoteWithUs';

function HomePage() {
  return (
    <div>
      <Hero />
      <FeaturedList />
      <PopularArea />
      <PromoteWithUs />
    </div>
  );
}

export default HomePage;
