import React from 'react';
import Talker from './Talker';
import useChat from '../hook/useChat';

function TalkerContainer() {
  const { lastChatsByUserId } = useChat();
  return (
    <>
      <h1 className=' flex items-center h-12 text-xl font-bold px-4'>Chat</h1>
      <div className='flex flex-col gap-2 overflow-y-scroll'>
        {lastChatsByUserId?.map((chatObj) => (
          <Talker
            key={chatObj.id}
            talkerObj={chatObj.talkerObj}
            message={chatObj.message}
            createdAt={chatObj.createdAt}
          />
        ))}
      </div>
    </>
  );
}

export default TalkerContainer;
