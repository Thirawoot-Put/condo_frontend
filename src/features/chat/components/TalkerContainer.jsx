import React from 'react';
import Talker from './Talker';
import useChat from '../hook/useChat';

function TalkerContainer() {
  const { lastChatsByUserId } = useChat();
  return (
    <div className='flex flex-col gap-2 px-2'>
      <h1 className='text-xl font-bold px-4'>Chat</h1>
      <div className='flex flex-col gap-2 h-[66vh] overflow-auto'>
        {lastChatsByUserId?.map((chatObj) => (
          <Talker
            key={chatObj.id}
            talkerObj={chatObj.talkerObj}
            message={chatObj.message}
            createdAt={chatObj.createdAt}
          />
        ))}
      </div>
    </div>
  );
}

export default TalkerContainer;
