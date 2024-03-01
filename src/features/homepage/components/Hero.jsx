import React from 'react';
import SearchBar from '../../../components/SearchBar';

function Hero() {
  return (
    <div className='hero h-[25rem] bg-base-200 '>
      <div className='hero-content text-center'>
        <div className='max-w-md flex flex-col items-center'>
          <h1 className='text-5xl font-semibold'>Headline</h1>
          <p className='py-6 text-2xl'>sub headline</p>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default Hero;
