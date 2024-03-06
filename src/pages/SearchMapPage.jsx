import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import MapDisplay from '../components/MapDisplay';
import { markersMap } from '../mock';
import CardMap from '../features/search_map/CardMap';

function SearchMapPage() {
  const [isShow, setIsShow] = React.useState(false);

  return (
    <div className='flex'>
      <div
        className={`flex w-2/5 h-[70vh] ${isShow ? 'translate-x-0' : '-translate-x-full'} ease-in-out duration-500`}
      >
        <div className='flex py-1'>
          <div className='flex flex-col h-[60vh] justify-between px-4 py-3'>
            <h1>Condo name</h1>
            <div className='overflow-y-scroll flex flex-col gap-2'>
              <CardMap />
              <CardMap />
              <CardMap />
            </div>
          </div>
          <div>
            <button className='text-blue-800' onClick={() => setIsShow(false)}>
              <IoCloseOutline />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`w-3/5 h-[70vh] m-auto items-center py-4 ${isShow ? 'translate-x-0' : '-translate-x-1/3'} ease-in-out duration-500`}
      >
        <MapDisplay zoom={12} />
        {/* <h1>map</h1>
        <div>
        </div> */}
        <button className='text-blue-800' onClick={() => setIsShow(!isShow)}>
          Marker
        </button>
      </div>
    </div>
  );
}

export default SearchMapPage;
