import React from 'react';

export default function Rates({ width = 'w-[2%]' }) {
  return (
    <div className='bg-gray-200 rounded-md h-6'>
      <div
        className={`bg-gray-400 rounded-md text-gray-400 text-xs h-6 transition  duration-500`}
        style={{width}}
      >
        <span></span>
      </div>
    </div>
  );
}
