import axios from '../config/axios';

export const getIp = () => axios.get('/ip');
