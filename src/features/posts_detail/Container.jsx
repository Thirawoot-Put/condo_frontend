import React from 'react';
import Hero from './component/Hero';
import useDetail from './context/PostDetailContext';
import DetailLeft from './component/DetailLeft';
import DetailRight from './component/DetailRight';

import Spinner from '../../components/Spinner';
import ProfileCard from '../../components/ProfileCard';
import { Button } from '@mui/material';
import MapDisplayOnePin from '../../components/MapDisplayOnePin';
import Facilities from './component/Facilities';
import useChat from '../chat/hook/useChat';
import { Link } from 'react-router-dom';

export default function Container() {
  const { handleStartChat } = useChat();
  const { loading, postDetail } = useDetail();
  const latlong = {
    lat: +postDetail?.room?.condo?.lat,
    lng: +postDetail?.room?.condo?.long,
  };
  // commit
  // comment

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className='min-h-[500px] w-[90%] mx-auto'>
          {postDetail && (
            <div className='flex flex-col gap-16'>
              <div>
                <Hero />

                <div className='grid grid-cols-12 '>
                  <DetailLeft />
                  <DetailRight />
                </div>
              </div>
              <Facilities />
              <div className='grid grid-cols-12'>
                <div className='col-span-8 '>
                  <div className='w-[90%] rounded-md overflow-hidden shadow-md'>
                    <MapDisplayOnePin zoom={18} marker={latlong} />
                  </div>
                </div>
                <div className='col-span-4 bg-blue-100'>nearest essentials</div>
              </div>
              <ProfileCard user={postDetail?.user} title='Hosted by'>
                <Link to='/user/chat'>
                  <Button
                    variant='outlined'
                    onClick={() => {
                      handleStartChat(postDetail?.user);
                    }}
                  >
                    Contact Host
                  </Button>
                </Link>
              </ProfileCard>
            </div>
          )}
        </div>
      )}
    </>
  );
}
