import { Button, Rating, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import useReview from '../context/ReviewContext';

export default function Review() {
  const { handleChange, handleSubmit, error, input, fetchReviewMe, reviewMe } =
    useReview();
  const [isEdit, setIsEdit] = useState(false);
  const EDIT = !isEdit ? { R1: 'readOnly', R2: 'disabled' } : { R1: '', R2: '' };
  const [newValue, setNewValue] = useState({
    ...reviewMe,
  });

  console.log(reviewMe);
  useEffect(() => {
    fetchReviewMe();
  }, []);
  return (
    <>
      {reviewMe ? (
        <form
          onSubmit={handleSubmit}
          className='min-h-[200px] shadow-md rounded-md p-4 flex flex-col gap-4'
        >
          <div>
            <p>My review</p>
          </div>
          <div>
            <Rating
              name='rating'
              size='large'
              readOnly={EDIT.R1}
              value={+reviewMe.rating}
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
              rows={4}
              fullWidth
              disabled={EDIT.R2}
              variant='standard'
              value={reviewMe.comment}
              onChange={handleChange}
            />

            {error.comment && (
              <p className='text-red-500 text-xs'>Comment is required</p>
            )}
          </div>
          <div>
            {!isEdit ? (
              <Button variant='contained' onClick={() => setIsEdit(true)}>
                Edit
              </Button>
            ) : (
              <div className='flex gap-4'>
                <Button variant='contained'>Submit</Button>
                <Button variant='outlined' onClick={() => setIsEdit(false)}>
                  Cancel
                </Button>
              </div>
            )}
          </div>
        </form>
      ) : (
        <form
          onSubmit={handleSubmit}
          className='min-h-[200px] shadow-md rounded-md p-4 flex flex-col gap-4'
        >
          <div>
            <p>เขียนรีวิว</p>
          </div>
          <div>
            <Rating
              name='rating'
              size='large'
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
              rows={4}
              fullWidth
              variant='standard'
              value={input.comment}
              onChange={handleChange}
            />
            {error.comment && (
              <p className='text-red-500 text-xs'>Comment is required</p>
            )}
          </div>
          <div>
            <Button variant='contained' type='submit'>
              Submit
            </Button>
          </div>
        </form>
      )}
    </>
  );
}
