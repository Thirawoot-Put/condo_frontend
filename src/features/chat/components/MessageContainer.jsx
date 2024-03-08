import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';

export default function MessageContainer({ messages }) {
  console.log('messages', messages);
  return (
    <ScrollToBottom className='bg-slate-100 overflow-y-scroll px-10 py-4 h-full'>
      {messages?.map((messageObj) => (
        <Message key={messageObj.id} messageObj={messageObj} />
      ))}
    </ScrollToBottom>
  );
}
