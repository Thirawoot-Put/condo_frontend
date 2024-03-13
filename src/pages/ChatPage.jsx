import React from 'react';
import ChatContainer from '../features/chat/components/ChatContainer';
import useAuth from '../features/auth/hook/useAuth';
import useChat from '../features/chat/hook/useChat';
import { useEffect } from 'react';

function ChatPage() {
  const { authUser } = useAuth();
  const { socket, fetchLastChatsByUserId } = useChat();

  useEffect(() => {
    if (authUser?.id) {
      fetchLastChatsByUserId(authUser?.id);
    }
  }, [authUser?.id]);

  useEffect(() => {
    socket.connect();

    return () => {
      console.log('dissssss');
      socket.disconnect();
    };
  }, []);

  return (
    <div className='h-[64vh]'>
      <ChatContainer />
    </div>
  );
}

export default ChatPage;
