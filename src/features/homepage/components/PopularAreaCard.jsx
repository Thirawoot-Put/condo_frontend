import React from 'react';
import Button from '../../../components/Button';

function PopularAreaCard({ data }) {
  return (
    <div className='flex border-gray-500 shadow-[2px_3px_14px_1px_rgba(183,183,183,0.75)] rounded-lg'>
      <div className='w-40 aspect-square overflow-hidden rounded-l-lg'>
        <img
          className='w-full h-full object-cover'
          src={data.image}
          alt='popular_pic'
        />
      </div>
      <div className='flex flex-col justify-center gap-4 px-3 py-1 w-44'>
        <div>
          <div className='font-semibold'>{data.districtName}</div>
          <div className='text-sm text-gray-500'>{data.districtDetail}</div>
        </div>
        <Button bg='gray' width='full'>
          Select
        </Button>
      </div>
    </div>
  );
}

export default PopularAreaCard;