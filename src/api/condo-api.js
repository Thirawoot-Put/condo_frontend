import axios from '../config/axios';

export const getCondos = () => axios.get('/condo');
export const getCondosForMap = () => axios.get('/condo/map');
export const getCondoWithPost = (id) => axios.get(`/condo/${id}`);
