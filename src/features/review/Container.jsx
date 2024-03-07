import CardReview from './Component/CardReview';
import Review from './Component/Review';
import { ReviewContextProvider } from './context/ReviewContext';

export default function Container() {
  return (
    <ReviewContextProvider>
      <div className='min-h-[600px] min-w-[560px] w-[80%] mx-auto py-12 flex flex-col gap-8'>
        <CardReview />
        <Review />
      </div>
    </ReviewContextProvider>
  );
}
