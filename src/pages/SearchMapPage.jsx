import React from 'react';
import MapDisplay from '../components/MapDisplay';
import { markersMap } from '../mock';
import CardMap from '../features/search_map/CardMap';

function SearchMapPage() {
  const [isShow, setIsShow] = React.useState(false);

  return (
    <div className='flex'>
      <div
        className={`w-2/5 h-[70vh] bg-slate-300 ${isShow ? 'translate-x-0' : '-translate-x-full'} ease-in-out duration-500`}
      >
        <button className='text-blue-800' onClick={() => setIsShow(!isShow)}>
          close side bar
        </button>
        <h1> Card of room in condo</h1>
      </div>
      <div
        className={`w-3/5 h-[70vh] bg-white m-auto flex flex-col items-center ${isShow ? 'translate-x-0' : '-translate-x-1/3'} ease-in-out duration-500`}
      >
        <h1>map</h1>
        <button className='text-blue-800' onClick={() => setIsShow(!isShow)}>
          Marker
        </button>
      </div>
    </div>
  );
}

export default SearchMapPage;
