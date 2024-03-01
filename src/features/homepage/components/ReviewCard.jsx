import React from 'react';
import RatingStarDisplay from './RatingStarDisplay';

const initialReview = {
  agentName: 'John Doe',
  description: 'something',
  rating: 5,
};

function ReviewCard({ data = initialReview }) {
  return (
    <div className='card w-60 bg-base-100 shadow-xl'>
      <div className='card-body gap-4'>
        <h2 className='card-title'>{data.agentName}</h2>
        <p>{data.description}</p>
        <RatingStarDisplay rating={data.rating} />
      </div>
    </div>
  );
}

export default ReviewCard;
