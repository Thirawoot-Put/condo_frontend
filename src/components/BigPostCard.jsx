import React from 'react';

function BigPostCard({ data }) {

    const Imgstyle = {
        width: '100%',
        height: '100%',
        objectFit: 'fill'
    }

  return (
    <div className='w-full h-full flex flex-col justify-around bg-base-100'>
      <div className='h-5/6 w-full'>
        <img
          className='rounded-b-2xl object-cover'
          style={Imgstyle}
          src={data.condo.condoImage}
          alt='condo_img'
        />
      </div>
      <div className='w-full h-1/6 text-3xl flex justify-around items-center text-white'>
        <div>
          {data.roomNumber}/{data.floor}
        </div>
        <div>{data.condo.nameEn}</div>
        <div>{data.price}</div>
      </div>
    </div>
  );
}

export default BigPostCard;
