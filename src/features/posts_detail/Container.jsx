import React from 'react';
import Hero from './component/Hero';
import useDetail from './context/PostDetailContext';
import DetailLeft from './component/DetailLeft';
import DetailRight from './component/DetailRight';
import CardAgent from './component/CardAgent';
import Spinner from '../../components/Spinner';

export default function Container() {
  const { loading, postDetail } = useDetail();
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className='min-h-[500px] w-[90%] mx-auto'>
          {postDetail && (
            <>
              <Hero />

              <div className='grid grid-cols-12'>
                <DetailLeft />
                <DetailRight />
              </div>
              <div>Facilities</div>
              <div>
                <div>Google Map</div>
                <div>nearest essentials</div>
              </div>
              <CardAgent />
            </>
          )}
        </div>
      )}
    </>
  );
}
