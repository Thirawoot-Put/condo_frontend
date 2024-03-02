import axios from "../config/axios";

export const fetchUserByUserId = (userId) => axios.get(`/user/profile/${userId}`)