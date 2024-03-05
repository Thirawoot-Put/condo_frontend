import React from 'react';
import MapDisplay from '../components/MapDisplay';
import MapInput from '../components/MapInput';
import { markersMap } from '../mock';
import MapDisplayOnePin from '../components/MapDisplayOnePin';
function SearchMapPage() {
  return (
    <div>
      <MapDisplay markers={markersMap} />
      <MapInput />
      <MapDisplayOnePin marker={{ lat: 13.7250967, lng: 100.5769418 }} />
    </div>
  );
}

export default SearchMapPage;
