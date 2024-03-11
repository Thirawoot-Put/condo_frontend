import React from 'react';
import useDetail from '../context/PostDetailContext';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../auth/hook/useAuth';
import { useState } from 'react';

export default function DetailLeft() {
  const navigate = useNavigate();
  const { postDetail } = useDetail();
  const [readmore, setReadmore] = useState(false);
  const { authUser } = useAuth();
  return (
    <div className='col-span-8  flex flex-col gap-4'>
      <div>
        <div>
          {authUser?.id == postDetail?.userId && (
            <Button
              variant='outlined'
              onClick={() =>
                navigate('/agent/post/edit', {
                  state: { isEdit: true, postId: postDetail.id },
                })
              }
            >
              Edit post
            </Button>
          )}
        </div>
      </div>
      <div>
        <h1 className='font-semibold text-2xl'>
          {postDetail.room.roomNumber} Building {postDetail.room.floor}
        </h1>
      </div>
      <div>
        <p className='font-light'>{postDetail?.room.condo.nameTh}</p>
        <p>{postDetail?.room.condo.nameEn}</p>
        <p className='font-light'>
          {postDetail?.room.condo.location}{' '}
          {postDetail?.room?.condo?.district.district}{' '}
          {postDetail?.room.condo.postCode}
        </p>
        {readmore && <p>{postDetail?.room?.description}</p>}
      </div>
      <div>
        <button
          className=' px-6 py-1.5 border border-black rounded-md hover:text-red-500 hover:border-red-500 transition'
          onClick={() => setReadmore(!readmore)}
        >
          {!readmore ? 'Read more' : 'Read less'}
        </button>
      </div>
    </div>
  );
}
