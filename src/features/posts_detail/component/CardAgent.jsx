import { useState } from 'react';
import useDetail from '../context/PostDetailContext';
import { Button } from '@mui/material';

export default function CardAgent() {
  const { postDetail } = useDetail();
  const [isShow, setIsShow] = useState(false);
  const date = new Date(postDetail?.user?.createdAt).toString().slice(4, 15);
  return (
    <div className='w-[80%] mx-auto'>
      <div className=' p-4 w-full shadow-md flex flex-col  gap-4 justify-center items-center rounded-md hover:shadow-lg'>
        <h1 className='text-2xl'>
          Hosted by {postDetail?.user?.firstName} {postDetail?.user?.lastName}
        </h1>
        <p className='text-gray-400 font-medium text-sm'>Joined in {date}</p>
        {!isShow && (
          <p
            className='hover:text-red-500'
            onClick={() => setIsShow(!isShow)}
            role='button'
          >
            มีข้อมูลติดต่อมุ้ย
          </p>
        )}
        {isShow && (
          <div
            className='flex gap-4 px-2  rounded-md hover:text-red-500'
            role='button'
            onClick={() => setIsShow(false)}
          >
            <p>{postDetail?.user?.email}</p>
            <p>{postDetail?.user?.mobile}</p>
          </div>
        )}
        <div>
          <Button variant="outlined">Contact Host</Button>
        </div>
      </div>
    </div>
  );
}
