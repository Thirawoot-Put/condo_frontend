import React from 'react';
import Message from './Message';

export default function MessageContainer() {
  return (
    <div className='h-[60vh] bg-slate-100 py-4 px-10 flex flex-col-reverse overflow-auto'>
      <Message />
      <Message isSender />
      <Message />
      <Message />
      <Message isSender />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
}
