import React from 'react';
import Profiles from './Profiles';

import PostIProfileList from './agent/PostIProfileList';
import useProfile from './context/ProfileContext';

export default function Container() {
  const {
    posts: { active, inactive },
  } = useProfile();

  return (
    <div className='min-h-[500px] '>
      <Profiles />

      <PostIProfileList title='Active' items={active} />
      <PostIProfileList title='Inactive' items={inactive} />
      <div>in active</div>
    </div>
  );
}
