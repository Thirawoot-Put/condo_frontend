import React from 'react';
import AllVote from './AllVote';
import useReview from '../context/ReviewContext';


export default function CardReview() {
  const { AllReview } = useReview();

  const allRate = AllReview?.reduce((acc, item) => {
    return acc + +item.rating;
  }, 0);

  const filterAndReduce = (obj, rate) => {
    return obj
      .filter((item) => item.rating == rate)
      .reduce((acc, i) => {
        return acc + +i.rating;
      }, 0);
  };

  const fiveStar = filterAndReduce(AllReview, 5);
  const fourStar = filterAndReduce(AllReview, 4);
  const threeStar = filterAndReduce(AllReview, 3);
  const towStar = filterAndReduce(AllReview, 2);
  const oneStar = filterAndReduce(AllReview, 1);

  const perCent = (star) => {
    return `${((star / allRate) * 100).toFixed(0)}%`;
  };

  const five = perCent(fiveStar);
  const four = perCent(fourStar);
  const three = perCent(threeStar);
  const two = perCent(towStar);
  const one = perCent(oneStar);

  return (
    <div className='shadow-md rounded-md p-4 flex '>
      <div className='px-6 min-w-[240px] '>
        <div className=''>
          <p>การจัดอันดับความคิดเห็น</p>
          <div className='flex gap-12'>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='text-9xl'>
                {(allRate / AllReview.length).toFixed(1)}
              </h1>
              <h1 className='text-gray-500  text-2xl'>จาก 5</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center  min-w-[300px] w-full py-4 '>
        <AllVote value={5} width={five} />
        <AllVote value={4} width={four} />
        <AllVote value={3} width={three} />
        <AllVote value={2} width={two} />
        <AllVote value={1} width={one} />
      </div>
    </div>
  );
}
