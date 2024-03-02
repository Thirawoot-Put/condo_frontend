import React from 'react';
import MediumPostCard from '../../../components/MediumPostCard';
import MediumCardCarousel from '../../../components/MediumCardCarousel';

export default function PostIProfileList({ title, items }) {
  return (
    <div className='min-h-[30rem] bg-gray-100  flex flex-col gap-4'>
      <div className=''>
        <p>{title}</p>
      </div>
      <div className='w-[90rem] py-5'>
        <MediumCardCarousel>
          {items?.map((el) => (
            <div key={el.id}>
              <MediumPostCard data={el?.room} />
            </div>
          ))}
        </MediumCardCarousel>
      </div>
    </div>
  );
}
