import axios from '../config/axios';

export const fetchAllPost = () => axios.get('/post');
export const fetchPostByUserId = (userId) =>
  axios.get(`/post/profile/${userId}`);
export const createPost = (postFormObj) => axios.post('/post', postFormObj);
export const fetchPostByPostId = (postId) => axios.get(`/post/${postId}`);
