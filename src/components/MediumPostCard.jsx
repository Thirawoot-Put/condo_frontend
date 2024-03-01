import React from 'react';

function MediumPostCard({ data }) {
  return (
    <div className='shadow-xl w-60'>
      <div className='rounded-xl'>
        <img
          className='aspect-[3/2] rounded-t-xl'
          src={data.condo.condoImage}
          alt='condo_img'
        />
      </div>
      <div className='bg-white px-4 py-2 rounded-b-xl'>
        <div>
          {data.roomNumber}/{data.floor}
        </div>
        <div>{data.condo.nameEn}</div>
        <div>{data.price}</div>
      </div>
    </div>
  );
}

export default MediumPostCard;
