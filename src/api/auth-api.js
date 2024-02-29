import axios from '../config/axios';

export const registerUser = (userObj) => axios.post('/auth/register', userObj);
export const registerAgent = (agentObj) =>
  axios.post('/auth/register/agent', agentObj);

export const userLogin = (user) => axios.post('/auth/login', user);

export const fetchMe = () => axios.get('/auth/me')