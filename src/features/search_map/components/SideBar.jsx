import React from 'react';
import CardMap from './CardMap';

function SideBar({ posts }) {
  return (
    <div className='flex py-1'>
      <div className='flex flex-col h-[60vh] justify-between px-4 py-3'>
        <div className='overflow-y-scroll flex flex-col gap-2'>
          {posts?.length === 0 ? (
            <>
              <h2 className='text-xl font-semibold'>
                Sorry, This condo not has room to let for now.
              </h2>
              <img
                src='https://images.pexels.com/photos/36366/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='condo_pic'
              />
            </>
          ) : (
            <>
              {posts.map((post) => (
                <CardMap key={post.id} post={post} />
              ))}
            </>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default SideBar;
