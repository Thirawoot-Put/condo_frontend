import React from 'react';
import MapDisplay from '../components/MapDisplay';
import { markersMap } from '../mock';
import CardMap from '../features/search_map/CardMap';

function SearchMapPage() {
  return (
    <div className='flex justify-center items-center py-10'>
      <CardMap />
    </div>
  );
}

export default SearchMapPage;
