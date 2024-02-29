import axios from 'axios';

import { getToken } from '../ultils/local-store';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

axios.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default axios;
