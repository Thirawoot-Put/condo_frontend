import { useContext, useState, createContext } from 'react';
import validateReview from '../../auth/validator/validate-review';

import * as reviewApi from '../../../api/review-api';

const ReviewContext = createContext();

const initail = { comment: '', rating: 0 };

export function ReviewContextProvider({ children }) {
  const [input, setInput] = useState(initail);
  const [AllReview, setAllReview] = useState([]);

  const [have, setHave] = useState(false);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: '' });
  };

  const fetchAllReview = async () => {
    const response = await reviewApi.fetchAllReviews();
    setAllReview(response.data.reviews);
  };
  const fetchReviewMe = async () => {
    const response = await reviewApi.fetchReviewByUserId();
    setInput({
      comment: response?.data?.review?.comment,
      rating: +response?.data?.review?.rating,
    });

    if (response?.data?.review?.comment != undefined) {
      setHave(true);
    }
  };

  const editSubmit = async (e) => {
    try {
      e.preventDefault();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const validateError = validateReview(input);
      if (validateError) {
        return setError(validateError);
      }
      if (!validateError) {
        if (!have) {
          await reviewApi.createReview(input);
        } else {
          await reviewApi.editReviewByUserId(input);
        }
        await fetchAllReview();
        await fetchReviewMe();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ReviewContext.Provider
      value={{
        handleChange,
        handleSubmit,
        error,
        input,
        fetchAllReview,
        AllReview,
        fetchReviewMe,
        have,
        editSubmit,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
}
export default function useReview() {
  return useContext(ReviewContext);
}
