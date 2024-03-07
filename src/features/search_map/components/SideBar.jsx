import React from 'react';
import CardMap from './CardMap';
import { IoCloseOutline } from 'react-icons/io5';

function SideBar() {
  return (
    <div className='flex py-1'>
      <div className='flex flex-col h-[60vh] justify-between px-4 py-3'>
        <h1>Condo name</h1>
        <div className='overflow-y-scroll flex flex-col gap-2'>
          <CardMap />
          <CardMap />
          <CardMap />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default SideBar;
