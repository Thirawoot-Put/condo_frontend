import { Button, Rating, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import useReview from '../context/ReviewContext';
import validateReview from '../../auth/validator/validate-review';

import * as reviewApi from '../../../api/review-api';
import useAuth from '../../auth/hook/useAuth';
import { useNavigate } from 'react-router-dom';

export default function Review() {
  const navigate = useNavigate();
  const { authUser } = useAuth();
  const { handleChange, input, fetchReviewMe, have, fetchAllReview } =
    useReview();

  const [error, setError] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const EDIT = have ? true : false;
  const EDIT2 = isEdit ? (have ? false : true) : have ? true : false;

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
          setIsEdit(false);
        }
        await fetchAllReview();
        await fetchReviewMe();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchReviewMe();
  }, []);
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='min-h-[200px] border rounded-md p-4 flex flex-col gap-4'
      >
        <div>
          {have ? (
            <p className='font-semibold'>My review</p>
          ) : (
            <p>เขียนรีวิว</p>
          )}
        </div>
        <div>
          <Rating
            name='rating'
            size='large'
            readOnly={EDIT2}
            value={+input.rating}
            onChange={(event, newValue) => {
              handleChange(event);
            }}
          />
          {error.rating && (
            <p className='text-red-500 text-xs'>Rating is required</p>
          )}
        </div>
        <div className=''>
          <TextField
            name='comment'
            className=''
            label='แสดงความคิดเห็น'
            multiline
            disabled={EDIT2}
            rows={4}
            fullWidth
            variant='standard'
            value={input.comment}
            onChange={(e) => {
              handleChange(e);
              setError({ ...error, [e.target.name]: '' });
            }}
          />
          {error.comment && (
            <p className='text-red-500 text-xs'>Comment is required</p>
          )}
        </div>
        <div>
          {!EDIT ? (
            <>
              {authUser ? (
                <Button variant='contained' type='submit'>
                  Submit
                </Button>
              ) : (
                <Button
                  variant='contained'
                  type='submit'
                  onClick={() => navigate('/login')}
                >
                  Submit
                </Button>
              )}
            </>
          ) : !isEdit ? (
            <Button
              variant='contained'
              onClick={() => {
                setIsEdit(!isEdit);
              }}
            >
              Edit
            </Button>
          ) : (
            <div className='flex gap-4'>
              <Button variant='contained' type='submit'>
                Submit
              </Button>
              <Button
                variant='outlined'
                onClick={() => {
                  setIsEdit(!isEdit);
                  fetchReviewMe();
                }}
              >
                Cancel
              </Button>
            </div>
          )}
        </div>
      </form>
    </>
  );
}
