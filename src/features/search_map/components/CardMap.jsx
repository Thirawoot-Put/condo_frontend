import React from 'react';
import { MdOutlineLocationOn } from 'react-icons/md';

function CardMap({ post }) {
  return (
    <div className='card card-side bg-base-100 shadow-xl p-4 w-[33rem] justify-between gap-4'>
      <div className='flex h-36 aspect-square overflow-hidden items-center rounded-xl'>
        <img
          className='object-center h-36'
          src={
            post?.room.roomImages[0]?.roomImage || post?.room.condo.condoImage
          }
          alt='pic'
        />
      </div>

      <div className='flex flex-col justify-between flex-1'>
        <div>
          <h1 className='font-semibold text-xl'>
            {post?.room.roomNumber}/{post?.room.floor}
          </h1>
          <h1 className='font-semibold'>{post?.room.condo.nameEn}</h1>
          <h2 className='text-sm'>Building: {post?.room.building}</h2>
          <small className='flex items-center'>
            <MdOutlineLocationOn />
            <span>
              {post?.room.condo.district.district},{' '}
              {post?.room.condo.province.province}
            </span>
          </small>
          <div>
            {post?.room.roomFacilities.map(
              (facility) =>
                facility.id <= 4 && (
                  <small
                    className='px-1 text-gray-500 border-r first:pl-0 last:border-none border-gray-400'
                    key={facility.id}
                  >
                    {facility.facility.name}
                  </small>
                )
            )}
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
