import axios from '../config/axios';

export const fetchAllPost = () => axios.get('/post');
