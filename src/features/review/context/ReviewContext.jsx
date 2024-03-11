import { useContext, useState, createContext } from 'react';

import * as reviewApi from '../../../api/review-api';

const ReviewContext = createContext();

const initail = { comment: '', rating: 0 };

export function ReviewContextProvider({ children }) {
  const [input, setInput] = useState(initail);
  const [AllReview, setAllReview] = useState([]);

  const [have, setHave] = useState(false);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
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

  return (
    <ReviewContext.Provider
      value={{
        handleChange,
        input,
        fetchAllReview,
        AllReview,
        fetchReviewMe,
        have,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
}
export default function useReview() {
  return useContext(ReviewContext);
}
