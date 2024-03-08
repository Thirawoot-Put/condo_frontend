import axios from '../config/axios';

export const fetchAllReviews = () => axios.get('/review');
export const createReview = (userId, data) =>
  axios.post(`/review/${userId}`, data);
export const fetchReviewByUserId = (userId) => axios.get(`/review/${userId}`);

// edit send both rating and comment
export const editReviewByUserId = (userId, data) =>
  axios.patch(`/review/${userId}`, data);
