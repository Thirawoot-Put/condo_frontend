import axios from '../config/axios';

export const getMinMaxPrice = () => axios.get('/room/price');
