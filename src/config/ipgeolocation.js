import { CleanHands } from '@mui/icons-material';
import axios from 'axios';
const API_KEY = 'a24ffaf9c0a24a6ea5b3098fa7fc6f29';
const URL =
  'https://ipgeolocation.abstractapi.com/v1/?api_key=a24ffaf9c0a24a6ea5b3098fa7fc6f29';

export const sendAPIRequest = async (ipAddress) => {
  const apiResponse = await axios.get(URL + '&ip_address=' + ipAddress);
  return apiResponse.data;
};
