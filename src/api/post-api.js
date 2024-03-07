import axios from '../config/axios';

export const fetchAllPost = () => axios.get('/post');
export const fetchPostByUserId = (userId) =>
  axios.get(`/post/profile/${userId}`);
export const createPost = (postFormObj) => axios.post('/post', postFormObj);
export const fetchPostByPostId = (postId) => axios.get(`/post/${postId}`);
export const payByCreditCard = (paymentData) =>
  axios.post(`/transaction/create-checkout-session`, paymentData);
export const getStatus = (sessionId, transactionData) =>
  axios.post(
    `http://localhost:8080/transaction/session-status?session_id=${sessionId}`,
    transactionData
  );
