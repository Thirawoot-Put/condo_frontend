import React from 'react';
import MessageContainer from './MessageContainer';
import MessageInput from './MessageInput';
import MessageName from './MessageName';

export default function MainChat() {
  return (
    <div>
      <MessageName />
      <MessageContainer />
      <MessageInput />
    </div>
  );
}
