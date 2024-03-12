import axios from '../config/axios';

export const createPost = (postId) => axios.post(`/viewer/${postId}`);
