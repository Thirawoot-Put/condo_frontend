import React from 'react';
import CardMap from '../../../components/CardMap';
import Spinner from '../../../components/Spinner';

function SideBar({ posts, loading }) {
  // if (loading) {
  //   return (
  //     <div className='overflow-y-scroll items-center flex flex-col w-[40vw] border gap-2 py-3 h-full rounded-l-md'>
  //       <Spinner />
  //     </div>
  //   );
  // }

  return (
    <div className='overflow-y-scroll items-center flex flex-col w-[40vw] border gap-2 py-3 h-full rounded-l-md'>
      {!posts ? (
        <div className='flex items-center h-full text-3xl font-semibold'>
          Please select condo on map
        </div>
      ) : posts?.length === 0 ? (
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
          {posts?.map((post) => (
            <CardMap key={post.id} post={post} />
          ))}
        </>
      )}
    </div>
  );
}

export default SideBar;
