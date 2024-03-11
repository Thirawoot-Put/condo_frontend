import React from 'react';
import useDetail from '../context/PostDetailContext';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function DetailLeft() {
  const navigate = useNavigate();
  const { postDetail } = useDetail();
  return (
    <div className='col-span-8  flex flex-col gap-4'>
      <div>
        <div>
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
        </div>
      </div>
      <div>
        <h1 className='font-semibold text-2xl'>
          {postDetail.room.roomNumber} Building {postDetail.room.floor}
        </h1>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          iusto similique incidunt neque cum eveniet architecto consequuntur
          blanditiis ullam in non maiores quaerat cupiditate, atque molestias
          debitis, voluptatem nulla nostrum!
        </p>
      </div>
      <div>
        <button className=' px-6 py-1.5 border border-black rounded-md hover:text-red-500 hover:border-red-500 transition'>
          Read more
        </button>
      </div>
    </div>
  );
}
