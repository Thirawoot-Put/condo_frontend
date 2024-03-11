import React, { useEffect } from 'react';
import useReview from '../context/ReviewContext';
import { Rating } from '@mui/material';

export default function AllReviews() {
  const { fetchAllReview, AllReview } = useReview();
  useEffect(() => {
    fetchAllReview();
  }, []);

  return (
    <div className='w-[100%] mx-auto flex flex-col gap-4  items-end overflow-y-scroll h-[300px]'>
      {AllReview?.map((el) => (
        <div
          key={el.id}
          className='shadow w-full min-h-[140px] bg-gray-200 border border-gray-400 rounded-lg p-4'
        >
          <div>
            <p className='font-semibold'>{el.user.firstName}</p>
            <Rating name='rating' size='medium' readOnly value={+el?.rating} />
            <p>{el.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
