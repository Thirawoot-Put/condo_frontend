import React from 'react';
import MessageContainer from './MessageContainer';
import MessageInput from './MessageInput';
import MessageName from './MessageName';
import useChat from '../hook/useChat';
import { useEffect } from 'react';

export default function MainChat() {
  const {
    message,
    handleMessageSend,
    handleMessageChange,
    messages,
    setMessages,
    talker,
    socket,
  } = useChat();

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  return (
    <div className='h-[64vh] flex flex-col'>
      <MessageName messages={messages} />
      <MessageContainer messages={messages} />
      {talker?.talkerId && (
        <MessageInput
          value={message}
          onSubmit={handleMessageSend}
          onChange={handleMessageChange}
        />
      )}
    </div>
  );
}
