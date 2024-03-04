import axios from '../config/axios';

export const getDistricts = () => axios.get('/select/districts');
export const getProvinces = () => axios.get('/select/provinces');
