import React from 'react';
import CardMap from '../../../components/CardMap';
import useSearch from '../hook/useSearch';
import { useEffect } from 'react';

export default function CardContainer() {
  const { activePosts } = useSearch();

  if (!activePosts || activePosts.length === 0) {
    return (
      <div className='invisible'>
        <CardMap key={0} post={{}} />;
      </div>
    );
  }

  return (
    <>
      {activePosts.map((post) => (
        <CardMap
          key={post.id}
          post={post}
          width='w-[50rem]'
          distance={post.distance}
        />
      ))}
    </>
  );
}
