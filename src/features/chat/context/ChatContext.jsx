import { useEffect } from 'react';
import { createContext } from 'react';
import * as chatApi from '../../../api/chat-api';
import { useState } from 'react';
import socket from '../../../config/socket';
import useAuth from '../../../features/auth/hook/useAuth';
// import { useNavigate } from 'react-router-dom';

export const ChatContext = createContext();

export default function ChatContextProvider({ children }) {
  // const navigate = useNavigate();
  const { authUser } = useAuth();
  console.log('authUser', authUser);

  const [lastChatsByUserId, setLastChatsByUserId] = useState([]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [talker, setTalker] = useState({});

  const handleStartChat = (talkerObj) => {
    console.log('talkerObj', talkerObj);
    socket.emit(
      'sendMessage',
      { authUser, talker: { talkerId: talkerObj.id }, message: ' ' },
      () => {
        setMessage('');
        setTalker({
          talkerName: {
            firstName: talkerObj.firstName,
            lastName: talkerObj.lastName,
          },
          talkerId: talkerObj.id,
        });
        // navigate('/user/chat');
        fetchLastChatsByUserId(authUser?.id);
        fetchChatByUserIdAndTalkerId(authUser?.id, talkerObj.id);
      }
    );
  };

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

  useEffect(() => {
    if (authUser?.id) {
      fetchLastChatsByUserId(authUser?.id);
    }
  }, [authUser?.id]);

  const fetchChatByUserIdAndTalkerId = async (userId, talkerId) => {
    try {
      console.log('in f');
      const { data } = await chatApi.getChatByUserIdAndTalkerId(
        userId,
        talkerId
      );
      console.log('data', data);
      setMessages(data.chats);
      console.log('messages in fetch', messages);
    } catch (error) {
      console.log(error);
    }
  };

  console.log('messages in con', messages);

  return (
    <ChatContext.Provider
      value={{
        lastChatsByUserId,
        fetchChatByUserIdAndTalkerId,
        handleSendMessage,
        handleChangeMessage,
        messages,
        message,
        handleTalkerChange,
        talker,
        handleStartChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
