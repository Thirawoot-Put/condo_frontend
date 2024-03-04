import React from 'react';

import PostIProfileList from './agent/PostIProfileList';
import useProfile from './context/ProfileContext';
import { Button } from '@mui/material';
import useAuth from '../auth/hook/useAuth';
import ProfileCard from '../../components/ProfileCard'

export default function Container() {
  const {
    posts: { active, inactive },
    user,
  } = useProfile();
  const { authUser } = useAuth();

  return (
    <div className='min-h-[500px] '>
      <ProfileCard user={user}>
        {user?.id == authUser?.id && (
          <Button variant='outlined'>Edit Profile</Button>
        )}
      </ProfileCard>

      <PostIProfileList title='Active' items={active} />
      <PostIProfileList title='Inactive' items={inactive} />
      <div>in active</div>
    </div>
  );
}
