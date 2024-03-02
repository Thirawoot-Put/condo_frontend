import React from 'react';
import Talker from './Talker';

function TalkerContainer() {
  return (
    <div className='flex flex-col gap-2 px-2'>
      <h1 className='text-xl font-bold px-4'>Chat</h1>
      <div className='flex flex-col gap-2 h-[66vh] overflow-auto'>
        <Talker />
        <Talker />
        <Talker />
        <Talker />
        <Talker />
        <Talker />
        <Talker />
        <Talker />
        <Talker />
      </div>
    </div>
  );
}

export default TalkerContainer;
