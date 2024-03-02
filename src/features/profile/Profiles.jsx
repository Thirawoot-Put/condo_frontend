import React from 'react';
import useProfile from './context/ProfileContext';
import useAuth from '../../features/auth/hook/useAuth';
import { Button } from '@mui/material';
import { useState } from 'react';

export default function Profiles() {
  const [isShow, setIsShow] = useState(false);
  const { user } = useProfile();
  const { authUser } = useAuth();
  const date = new Date(user?.createdAt).toString().slice(4, 15);

  return (
    <div className='bg-gray-100  h-[320px] flex justify-center'>
      <div className='bg-white  w-full sm:w-[60%] shadow-sm hover:shadow-lg transition sm:rounded-md my-[30px]'>
        <div className='flex flex-col h-[100%] items-center justify-center'>
          <div className='mx-auto flex flex-col justify-center items-center gap-4'>
            <h1 className='text-3xl'>
              {user?.firstName} {user?.lastName}
            </h1>

            <p className='text-gray-400 font-medium text-sm'>
              Joined in {date}
            </p>
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
                <p>{user?.email}</p>
                <p>{user?.mobile}</p>
              </div>
            )}
            {/* user?.id == authUser?.id */}
            {true ? <Button variant='contained'>Edit Profile</Button> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
