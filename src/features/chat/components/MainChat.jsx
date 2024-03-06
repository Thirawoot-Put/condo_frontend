import React from 'react';
import MessageContainer from './MessageContainer';
import MessageInput from './MessageInput';
import MessageName from './MessageName';
import useChat from '../hook/useChat';

export default function MainChat() {
  const { message, handleSendMessage, handleChangeMessage, messages } =
    useChat();

  return (
    <div>
      <MessageName messages={messages} />
      <MessageContainer messages={messages} />
      <MessageInput
        value={message}
        onSubmit={handleSendMessage}
        onChange={handleChangeMessage}
      />
    </div>
  );
}
