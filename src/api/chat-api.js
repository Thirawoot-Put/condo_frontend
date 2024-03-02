import axios from '../config/axios';

export const getLastChatsByUserId = (userId) => axios.get(`/chat/${userId}`);

export const getChatByUserIdAndTalkerId = (userId, talkerId) =>
  axios.get(`/chat/${userId}/${talkerId}`);
