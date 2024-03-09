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
      <div className='w-full h-1/6 text-3xl flex justify-around items-center text-black'>
        <div>{data.nameTh}</div>
        <div>{data.nameEn}</div>
        <div>{data.district.district}</div>
      </div>
    </Link>
  );
}

export default BigPostCard;
