import React from 'react';
import { Link } from 'react-router-dom';

function BigPostCard({ data }) {
  const Imgstyle = {
    width: '100%',
    height: '100%',
    objectFit: 'fill',
  };
  console.log(data);
  return (
    <Link
      to={`/map?lat=${data.lat}&lng=${data.long}`}
      className='w-full h-full flex flex-col justify-around items-center'
    >
      <div className='h-5/6 w-5/6'>
        <img
          className='rounded-2xl'
          style={Imgstyle}
          src={data.condoImage}
          alt='condo_img'
        />
      </div>
      <div className='w-5/6 h-1/6 text-3xl flex justify-around items-center text-black px-4 py-2'>
        <div className='flex-1 text-start'>{data.nameTh}</div>
        <div className='flex-1 text-center'>{data.nameEn}</div>
        <div className='flex-1 text-end'>{data.district.district}</div>
      </div>
    </Link>
  );
}

export default BigPostCard;
