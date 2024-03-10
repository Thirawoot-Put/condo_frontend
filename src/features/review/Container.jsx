import { useEffect } from 'react';
import AllReviews from './Component/AllReviews';
import CardReview from './Component/CardReview';
import Review from './Component/Review';
import useReview, { ReviewContextProvider } from './context/ReviewContext';

export default function Container() {

  return (
    <ReviewContextProvider>
      <div className='min-h-[600px] min-w-[560px] w-[80%] mx-auto py-12 flex flex-col gap-8'>
        <CardReview />
        <div className='flex  gap-8'>
          <div className='min-w-[360px]'>
            <Review />
          </div>
          <AllReviews />
        </div>
      </div>
    </ReviewContextProvider>
  );
}
