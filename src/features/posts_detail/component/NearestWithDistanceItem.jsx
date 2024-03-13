import React from 'react';
import getDistanceFromLatLng from '../../../ultils/getDistanceFromLatLng';
import useDetail from '../context/PostDetailContext';
import { nanoid } from 'nanoid';

export default function NearestWithDistanceItem({ children, title }) {
  const { postDetail } = useDetail();
  return (
    <div className=' py-1'>
      <div className=' font-semibold'>{title}</div>
      <div>
        {children.map((place) => (
          <small key={nanoid()} className=' flex justify-between'>
            <div>{place.name}</div>
            <div className=' w-[8rem] text-right'>
              {`${
                getDistanceFromLatLng(
                  place.geometry.location.lat(),
                  place.geometry.location.lng(),
                  +postDetail?.room?.condo?.lat,
                  +postDetail?.room?.condo?.long
                ) * 1000
              } m`}
            </div>
          </small>
        ))}
      </div>
    </div>
  );
}
