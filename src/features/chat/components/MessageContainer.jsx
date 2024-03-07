import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';

export default function MessageContainer({ messages }) {
  return (
    <ScrollToBottom className='h-[60vh] bg-slate-100 py-4 px-10'>
      {messages?.map((messageObj) => (
        <Message key={messageObj.id} messageObj={messageObj} />
      ))}
    </ScrollToBottom>
  );
}
