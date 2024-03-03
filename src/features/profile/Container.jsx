import React from 'react';
import Profiles from './Profiles';

import PostIProfileList from './agent/PostIProfileList';
import useProfile from './context/ProfileContext';

export default function Container() {
  const { posts } = useProfile();
  const Active = posts.filter((item) => item.postStatus == false);
  const Inactive = posts.filter((item) => item.postStatus == false);

  return (
    <div className='min-h-[500px] '>
      <Profiles />

      <PostIProfileList title='Active' items={Active} />
      <PostIProfileList title='Inactive' items={Inactive} />
      <div>in active</div>
    </div>
  );
}
