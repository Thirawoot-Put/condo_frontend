import { useContext, useState, createContext } from 'react';
import validateReview from '../../auth/validator/validate-review';

import * as reviewApi from '../../../api/review-api';
import useAuth from '../../auth/hook/useAuth';

const ReviewContext = createContext();

const initail = { comment: '', rating: 0 };

export function ReviewContextProvider({ children }) {
  const [input, setInput] = useState(initail);
  const [AllReview, setAllReview] = useState([]);
  const [reviewMe, setReviewMe] = useState(null)
  const [error, setError] = useState({});

  const { authContext } = useAuth();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: '' });
  };

  const fetchAllReview = async () => {
    const response = await reviewApi.fetchAllReviews();
    setAllReview(response.data.reviews)
    console.log(AllReview)
  };
  const fetchReviewMe = async () => {
    const response = await reviewApi.fetchReviewByUserId()
    setReviewMe(response.data.review)
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const validateError = validateReview(input);
      if (validateError) {
        return setError(validateError);
      }
      if (!validateError) {
        await reviewApi.createReview(input);
        setInput(initail);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ReviewContext.Provider
      value={{ handleChange, handleSubmit, error, input,fetchAllReview ,AllReview,fetchReviewMe ,reviewMe}}
    >
      {children}
    </ReviewContext.Provider>
  );
}
export default function useReview() {
  return useContext(ReviewContext);
}
