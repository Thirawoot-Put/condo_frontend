import React from 'react';
import ReviewCard from './ReviewCard';
import * as mockData from '../../../mock';
import CardReview from '../../review/Component/CardReview';
import useReview from '../../review/context/ReviewContext';
import { useState } from 'react';
import { useEffect } from 'react';

function Rating() {
  const [sortedReview, setSortedReview] = useState([]);
  const { AllReview } = useReview();

  useEffect(() => {
    sortRating();
  }, [AllReview]);

  const sortFn = (a, b) => b.rating - a.rating;

  const sortRating = () => {
    const copyArr = [...AllReview];
    copyArr.sort(sortFn);
    setSortedReview(copyArr);
  };

  console.log(sortedReview);

  return (
    <div className='py-10 flex flex-col gap-8 items-center justify-center'>
      <div className='text-center flex flex-col gap-2'>
        <h1 className='text-3xl font-semibold'>Our Overall Rating</h1>
        <p>See the average rating given by our satisfied clients</p>
      </div>
      <div className='w-full'>
        <CardReview btn='btn' />
      </div>
      <div className='flex w-full justify-around gap-4'>
        {sortedReview.map(
          (review, index) =>
            index <= 5 && <ReviewCard key={review.id} data={review} />
        )}
      </div>
    </div>
  );
}

export default Rating;
