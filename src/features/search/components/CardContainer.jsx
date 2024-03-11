import React from 'react';
import useSearch from '../hook/useSearch';
import CardMap from '../../search_map/components/CardMap';
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
        <CardMap key={post.id} post={post} distance={post.distance} />
      ))}
    </>
  );
}
