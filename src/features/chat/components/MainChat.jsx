import React from 'react';
import MessageContainer from './MessageContainer';
import MessageInput from './MessageInput';
import MessageName from './MessageName';
import useChat from '../hook/useChat';
import { useEffect } from 'react';
import useAuth from '../../auth/hook/useAuth';

export default function MainChat() {
  const { authUser } = useAuth();
  const {
    message,
    handleMessageSend,
    handleMessageChange,
    messages,
    setMessages,
    fetchChatByUserIdAndTalkerId,
    talker,
    socket,
  } = useChat();

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  useEffect(() => {
    fetchChatByUserIdAndTalkerId(authUser.id, talker.talkerId);
  }, []);

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
