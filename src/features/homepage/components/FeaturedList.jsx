import React from 'react';
import MediumCardCarousel from '../../../components/MediumCardCarousel';
import MediumPostCard from '../../../components/MediumPostCard';
import usePost from '../hook/usePost';
import * as mockData from '../../../mock';
import { useState } from 'react';

function FeaturedList() {
  const { allPosts } = usePost();

  return (
    <div className='bg-blue-300 py-10 flex flex-col gap-2 items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-3xl font-semibold'>Feature Lists</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className='w-[90rem] py-5'>
        <MediumCardCarousel>
          {allPosts.map((card) => (
            <MediumPostCard key={card?.id} data={card?.room} />
          ))}
        </MediumCardCarousel>
      </div>
    </div>
  );
}

export default FeaturedList;
