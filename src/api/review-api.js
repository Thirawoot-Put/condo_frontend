import axios from '../config/axios';

export const fetchAllReviews = () => axios.get('/review');
export const createReview = (data) => axios.post(`/review`, data);
export const fetchReviewByUserId = () => axios.get(`/review/me`);

// edit send both rating and comment
export const editReviewByUserId = (data) => axios.patch(`/review`, data);
