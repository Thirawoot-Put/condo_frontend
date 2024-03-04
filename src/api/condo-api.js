import axios from '../config/axios';

export const getCondos = () => axios.get('/condo');
