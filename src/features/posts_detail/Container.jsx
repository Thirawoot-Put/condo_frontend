import React from 'react';
import Hero from './component/Hero';
import useDetail from './context/PostDetailContext';
import { Skeleton } from '@mui/material';
import DetailLeft from './component/DetailLeft';
import DetailRight from './component/DetailRight';
import CardAgent from './component/CardAgent';

export default function Container() {
  const { loading, postDetail } = useDetail();
  return (
    <div className='min-h-[500px] w-[90%] mx-auto'>
      {loading && (
        <div className='h-[900px] '>
          <div className='w-[96%] h-[500px] flex justify-center items-center bg-gray-300 mx-auto rounded-lg mt-10 animate-pulse'></div>
          <div className='w-[96%] h-[200px] flex mx-auto justify-between mt-12'>
            <div className='bg-gray-300 w-[60%] animate-pulse rounded-xl'></div>
            <div className='bg-gray-300  w-[30%] animate-pulse rounded-xl'></div>
          </div>
        </div>
      )}
      {postDetail && (
        <>
          <Hero />

          <div className='grid grid-cols-12'>
            <DetailLeft />
            <DetailRight />
          </div>
        </>
      )}
      <div>Facilities</div>
      <div>
        <div>Google Map</div>
        <div>nearest essentials</div>
      </div>
      <CardAgent />
    </div>
  );
}
