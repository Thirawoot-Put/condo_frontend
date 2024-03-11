import React from 'react';
import CardMap from '../../../components/CardMap';
import useSearch from '../hook/useSearch';
import { useEffect } from 'react';

export default function CardContainer() {
  const { activePosts } = useSearch();

  if (!activePosts || activePosts.length === 0) {
    return (
      <div className='invisible'>
        <CardMap key={0} post={{}} width='w-full' />;
      </div>
    );
  }

  return (
    <>
      {activePosts.map((post) => (
        <CardMap
          key={post.id}
          post={post}
          width='w-full'
          distance={post.distance}
        />
      ))}
    </>
  );
}
