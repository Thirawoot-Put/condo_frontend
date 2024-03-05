import React from 'react';
import Hero from './component/Hero';
import useDetail from './context/PostDetailContext';
import DetailLeft from './component/DetailLeft';
import DetailRight from './component/DetailRight';

import Spinner from '../../components/Spinner';
import ProfileCard from '../../components/ProfileCard';
import { Button } from '@mui/material';


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
              <ProfileCard user={postDetail?.user} title='Hosted by'>
                <Button variant='outlined'>Contact Host</Button>
              </ProfileCard>
            </>
          )}
        </div>
      )}
    </>
  );
}
