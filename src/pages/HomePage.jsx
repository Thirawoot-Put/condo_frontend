import React from 'react';
import FeaturedList from '../features/homepage/components/FeaturedList';
import PopularArea from '../features/homepage/components/PopularArea';
import PromoteWithUs from '../features/homepage/components/PromoteWithUs';
import SlideHero from '../features/homepage/components/SlideHero';

function HomePage() {
  return (
    <div>
      <SlideHero />
      <FeaturedList />
      <PopularArea />
      <PromoteWithUs />
    </div>
  );
}

export default HomePage;
