import React from 'react';
import ReviewCard from './ReviewCard';
import * as mockData from '../../../mock';
import AllVote from '../../review/Component/AllVote';
import CardReview from '../../review/Component/CardReview';

function PromoteWithUs() {
  return (
    <div className='py-10 flex flex-col gap-8 items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-3xl font-semibold'>Our Overall Rating</h1>
        <p>See the average rating given by our satisfied clients</p>
      </div>
      <div className='w-full'>
        <CardReview />
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
