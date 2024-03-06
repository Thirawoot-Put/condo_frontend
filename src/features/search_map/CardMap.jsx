import React from 'react';
import { MdOutlineLocationOn } from 'react-icons/md';

function CardMap() {
  return (
    <div className='card card-side bg-base-100 shadow-xl p-4 w-[33rem] justify-between gap-4'>
      <div className='flex h-36 aspect-square overflow-hidden items-center rounded-xl'>
        <img
          className='object-center'
          src='https://images.pexels.com/photos/533157/pexels-photo-533157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='pic'
        />
      </div>

      <div className='flex flex-col justify-between flex-1'>
        <div>
          <h1 className='font-semibold text-xl'>room number</h1>
          <h1>Condo name</h1>
          <small className='flex items-center'>
            <MdOutlineLocationOn />
            <span>district, province</span>
          </small>
          <div>
            <small className='pr-1 text-gray-500'>utils |</small>
            <small className='pr-1 text-gray-500'>utils |</small>
            <small className='pr-1 text-gray-500'>utils |</small>
          </div>
        </div>
        <div className='text-end'>
          <span className='text-lg font-semibold'>THB 3,000 </span>
          <span className='text-sm'>/month</span>
        </div>
      </div>
    </div>
  );
}

export default CardMap;
