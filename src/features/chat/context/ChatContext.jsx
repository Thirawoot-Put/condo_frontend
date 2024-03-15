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

  const [lastChatsByUserId, setLastChatsByUserId] = useState([]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [talker, setTalker] = useState({});

  const handleStartChat = (talkerObj) => {
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

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleMessageSend = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit('sendMessage', { authUser, talker, message }, () => {
        setMessage('');
      });
    }
  };

  const handleImageSend = (e) => {
    e.preventDefault();
    const image = e.target.files[0];
    const url = URL.createObjectURL(image);
    socket.emit('sendImage', { authUser, talker, image, url }, () => {});
  };

  const handleTalkerChange = (newTalker) => {
    setTalker(newTalker);
    console.log('talker', talker);
  };

  const fetchLastChatsByUserId = async (userId) => {
    try {
      const { data } = await chatApi.getLastChatsByUserId(userId);
      setLastChatsByUserId(data.chats);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchChatByUserIdAndTalkerId = async (userId, talkerId) => {
    try {
      const { data } = await chatApi.getChatByUserIdAndTalkerId(
        userId,
        talkerId
      );
      setMessages(data.chats);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ChatContext.Provider
      value={{
        lastChatsByUserId,
        fetchLastChatsByUserId,
        fetchChatByUserIdAndTalkerId,
        handleMessageSend,
        handleMessageChange,
        messages,
        setMessages,
        message,
        handleTalkerChange,
        talker,
        handleStartChat,
        handleImageSend,
        socket,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
