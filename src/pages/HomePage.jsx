import React from 'react';
import Hero from '../features/homepage/components/Hero';
import FeaturedList from '../features/homepage/components/FeaturedList';
import PopularArea from '../features/homepage/components/PopularArea';
import PromoteWithUs from '../features/homepage/components/PromoteWithUs';
import ImageSlide from '../components/ImageSlide';
import { imageSlides } from '../mock';

function HomePage() {
  return (
    <div>
      <Hero />
      <ImageSlide slides={imageSlides} />
      <FeaturedList />
      <PopularArea />
      <PromoteWithUs />
    </div>
  );
}

export default HomePage;
