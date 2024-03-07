import React from 'react';
import Hero from '../features/homepage/components/Hero';
import FeaturedList from '../features/homepage/components/FeaturedList';
import PopularArea from '../features/homepage/components/PopularArea';
import PromoteWithUs from '../features/homepage/components/PromoteWithUs';
import SlideHero from '../features/homepage/components/SlideHero';

function HomePage() {
  return (
    <div>
      <Hero />
      <SlideHero />
      <FeaturedList />
      <PopularArea />
      <PromoteWithUs />
    </div>
  );
}

export default HomePage;
