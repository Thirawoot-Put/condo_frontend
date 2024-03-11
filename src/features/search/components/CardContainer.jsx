import React from 'react';
import useSearch from '../hook/UseSearch';
import CardMap from '../../search_map/components/CardMap';

export default function CardContainer() {
  const { activePosts } = useSearch();

  return (
    <div>
      {activePosts.map((post) => (
        <CardMap key={post.id} post={post} />
      ))}
    </div>
  );
}
