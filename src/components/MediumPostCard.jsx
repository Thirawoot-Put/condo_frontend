import React from 'react';

function MediumPostCard({ data }) {

  const Imgstyle = {
    width: '100%',
    height: '100%',
    objectFit: 'fill'
}
  return (
    <div className='shadow-xl w-[17vw] h-[35vh] border rounded-2xl'>
      <div className='h-3/5'>
        <img
          className='rounded-t-2xl'
          src={data.condo.condoImage}
          alt='condo_img'
          style={Imgstyle}
        />
      </div>
      <div className='h-2/5 bg-white px-4 py-2 rounded-b-2xl flex flex-col justify-around'>
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
