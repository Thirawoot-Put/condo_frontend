import React from 'react';
import AllVote from './AllVote';

export default function CardReview() {
  return (
    <div className='shadow-md rounded-md p-4 flex '>
      <div className='px-6 min-w-[240px] '>
        <div className=''>
          <p>การจัดอันดับความคิดเห็น</p>
          <div className='flex gap-12'>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='text-9xl'>4.9</h1>
              <h1 className='text-gray-500  text-2xl'>จาก 5</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center  min-w-[300px] w-full py-4 '>
        <AllVote value={5} width='w-[93%]' />
        <AllVote value={4} />
        <AllVote value={3} />
        <AllVote value={2} />
        <AllVote value={1} />
      </div>
    </div>
  );
}
