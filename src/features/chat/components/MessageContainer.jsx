import React from 'react';
import Message from './Message';
import useChat from '../hook/useChat';

export default function MessageContainer() {
  const { currentChat } = useChat();
  return (
    <div className='h-[60vh] bg-slate-100 py-4 px-10 flex flex-col-reverse overflow-auto'>
      {currentChat?.map((messageObj) => (
        <Message key={messageObj.id} messageObj={messageObj} />
      ))}
    </div>
  );
}
