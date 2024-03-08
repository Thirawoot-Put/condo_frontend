import React from 'react';
import MessageContainer from './MessageContainer';
import MessageInput from './MessageInput';
import MessageName from './MessageName';
import useChat from '../hook/useChat';

export default function MainChat() {
  const { message, handleSendMessage, handleChangeMessage, messages, talker } =
    useChat();

  return (
    <div className='h-[64vh] flex flex-col'>
      <MessageName messages={messages} />
      <MessageContainer messages={messages} />
      {talker?.talkerId && (
        <MessageInput
          value={message}
          onSubmit={handleSendMessage}
          onChange={handleChangeMessage}
        />
      )}
    </div>
  );
}
