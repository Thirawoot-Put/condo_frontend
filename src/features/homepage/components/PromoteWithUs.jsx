import React from 'react';
import ReviewCard from './ReviewCard';
import * as mockData from '../../../mock';

function PromoteWithUs() {
  return (
    <div className='py-10 flex flex-col gap-8 items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-3xl font-semibold'>
          Promote Your Property With Us
        </h1>
        <p>
          Reach more renters reach more chance. Promote your property with our
          platform. Duration is your choice, just 5 Baht / day
        </p>
      </div>
      <div className='flex gap-4'>
        {mockData.sampleReviews.map((review) => (
          <ReviewCard key={review.id} data={review} />
        ))}
      </div>
    </div>
  );
}

export default PromoteWithUs;
