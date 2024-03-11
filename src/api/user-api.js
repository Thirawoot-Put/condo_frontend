import axios from '../config/axios';

export const fetchUserByUserId = (userId) =>
  axios.get(`/user/profile/${userId}`);

export const updateUer = (data) => axios.patch('/user/profile', data);
