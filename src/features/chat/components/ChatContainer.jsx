import React from 'react';
import TalkerContainer from './TalkerContainer';
import MainChat from './MainChat';
import { useEffect } from 'react';
import useChat from '../hook/useChat';
import useAuth from '../../auth/hook/useAuth';

export default function ChatContainer() {
  return (
    <div className='flex h-full'>
      <div className='w-[25vw] px-2 pb-2'>
        <TalkerContainer />
      </div>
      <div className='flex-1'>
        <MainChat />
      </div>
    </div>
  );
}
