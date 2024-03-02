import React from 'react';
import TalkerContainer from './TalkerContainer';
import MainChat from './MainChat';

export default function ChatContainer() {
  return (
    <div className='flex h-[70vh]'>
      <div className='w-[25vw]'>
        <TalkerContainer />
      </div>
      <div className='flex-1 '>
        <MainChat />
      </div>
    </div>
  );
}
