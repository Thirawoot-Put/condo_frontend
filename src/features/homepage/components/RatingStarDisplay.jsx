import React from 'react';
import { FaStar } from 'react-icons/fa';

function RatingStarDisplay({ rating }) {
  return (
    <div className='flex gap-1'>
      {[...Array(5)].map((star, index) => (
        <FaStar
          key={index}
          className='text-xl'
          color={index + 1 <= rating ? 'gold' : 'gray'}
        />
      ))}
    </div>
  );
}

export default RatingStarDisplay;
