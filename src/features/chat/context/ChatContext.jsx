import { useEffect } from 'react';
import { createContext } from 'react';
import * as chatApi from '../../../api/chat-api';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import socket from '../../../config/socket';
import useAuth from '../../../features/auth/hook/useAuth';

export const ChatContext = createContext();

export default function ChatContextProvider({ children }) {
  const { authUser } = useAuth();
  const { userId } = useParams();

  const [lastChatsByUserId, setLastChatsByUserId] = useState([]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [talker, setTalker] = useState({});

  useEffect(() => {
    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit('sendMessage', { authUser, talker, message }, () => {
        setMessage('');
      });
    }
  };

  const handleTalkerChange = (newTalker) => {
    setTalker(newTalker);
  };

  console.log(message, messages);

  const fetchLastChatsByUserId = async (userId) => {
    try {
      const { data } = await chatApi.getLastChatsByUserId(userId);
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
      setMessages(data.chats);
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
        handleSendMessage,
        handleChangeMessage,
        messages,
        message,
        handleTalkerChange,
        talker,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
