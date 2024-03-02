import React from 'react';
import ChatContainer from '../features/chat/components/ChatContainer';
import ChatContextProvider from '../features/chat/context/ChatContext';

function ChatPage() {
  return (
    <ChatContextProvider>
      <ChatContainer />
    </ChatContextProvider>
  );
}

export default ChatPage;
