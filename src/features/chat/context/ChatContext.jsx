import { useEffect } from 'react';
import { createContext } from 'react';
import * as chatApi from '../../../api/chat-api';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const ChatContext = createContext();

export default function ChatContextProvider({ children }) {
  const { userId } = useParams();

  const [lastChatsByUserId, setLastChatsByUserId] = useState([]);
  const [currentChat, setCurrentChat] = useState([]);

  const fetchLastChatsByUserId = async (userId) => {
    try {
      console.log('userId', userId);
      const { data } = await chatApi.getLastChatsByUserId(userId);
      console.log('data lc', data.chats);
      setLastChatsByUserId(data.chats);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLastChatsByUserId(userId);
  }, [userId]);

  const fetchChatByUserIdAndTalkerId = async (userId, talkerId) => {
    try {
      const { data } = await chatApi.getChatByUserIdAndTalkerId(
        userId,
        talkerId
      );
      console.log('data', data);
      setCurrentChat(data.chats);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ChatContext.Provider
      value={{
        userId,
        lastChatsByUserId,
        fetchChatByUserIdAndTalkerId,
        currentChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
