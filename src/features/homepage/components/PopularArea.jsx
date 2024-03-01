import React from 'react';
import PopularAreaCard from './PopularAreaCard';
import * as mockData from '../../../mock';

function PopularArea() {
  return (
    <div className='py-10 flex flex-col gap-8 items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-3xl font-semibold'>Popular area</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className='w-screen flex gap-4 px-14 flex-wrap'>
        {mockData.popularAreas.map((area, index) => (
          <PopularAreaCard key={index} data={area} />
        ))}
      </div>
    </div>
  );
}

export default PopularArea;
