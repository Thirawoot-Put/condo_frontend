import React from 'react';
import CardMap from './CardMap';

function SideBar({ posts }) {
  return (
    <div className='overflow-y-scroll items-center flex flex-col w-[40vw] border border-blue-400 gap-2 py-3 h-full'>
      {/* <div className='flex flex-col gap-2 py-3 items-center h-full'> */}
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
      {/* </div> */}
    </div>
  );
}

export default SideBar;
