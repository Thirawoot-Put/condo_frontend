import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';
import useChat from '../hook/useChat';
import { nanoid } from 'nanoid';

export default function MessageContainer({ messages }) {
  return (
    <ScrollToBottom className='bg-slate-100 overflow-y-scroll px-10 py-4 h-full'>
      {messages?.map((messageObj) => (
        <Message key={nanoid()} messageObj={messageObj} />
      ))}
    </ScrollToBottom>
  );
}
