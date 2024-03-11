import React from 'react';
import FeaturedList from '../features/homepage/components/FeaturedList';
import PopularArea from '../features/homepage/components/PopularArea';
import Rating from '../features/homepage/components/Rating';
import SlideHero from '../features/homepage/components/SlideHero';
import useReview from '../features/review/context/ReviewContext';
import { useEffect } from 'react';

function HomePage() {
  const { fetchAllReview } = useReview();
  useEffect(() => {
    fetchAllReview();
  }, []);

  return (
    <div className=''>
      <div className='w-[90%] mx-auto'>
        <SlideHero />
      <FeaturedList />
      </div>
      <PopularArea />
      <div className='w-[80%] mx-auto'>
        <Rating />
      </div>
    </div>
  );
}

export default HomePage;
