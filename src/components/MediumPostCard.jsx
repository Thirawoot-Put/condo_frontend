import React from 'react';

function MediumPostCard({ data }) {
  console.log(data);
  return (
    <div className='shadow-xl'>
      <div className='w-80 rounded-xl'>
        <img
          className='aspect-[3/2] rounded-t-xl'
          src={data.img}
          alt='condo_img'
        />
      </div>
      <div className='bg-white px-4 py-2 rounded-b-xl'>
        <div>{data.roomDetail}</div>
        <div>{data.condoName}</div>
        <div>{data.price}</div>
      </div>
    </div>
  );
}

export default MediumPostCard;
