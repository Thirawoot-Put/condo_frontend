import { Button, Rating, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import useReview from '../context/ReviewContext';

export default function Review() {
  const { handleChange, handleSubmit, error, input, fetchReviewMe, have } =
    useReview();

  const [isEdit, setIsEdit] = useState(false);
  const EDIT = have ? true : false;
  const EDIT2 = isEdit ? (have ? false : true) : have ? true : false;

  useEffect(() => {
    fetchReviewMe();
  }, []);
  return (
    <>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
         setIsEdit(false)
        }}
        className='min-h-[200px] shadow-md rounded-md p-4 flex flex-col gap-4'
      >
        <div>
          <p>เขียนรีวิว</p>
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
            onChange={handleChange}
          />
          {error.comment && (
            <p className='text-red-500 text-xs'>Comment is required</p>
          )}
        </div>
        <div>
          {!EDIT ? (
            <Button variant='contained' type='submit'>
              Submit
            </Button>
          ) : !isEdit ? (
            <Button variant='contained' onClick={() => setIsEdit(!isEdit)}>
              Edit
            </Button>
          ) : (
            <div className='flex gap-4'>
              <Button variant='contained' type='summit'>
                Submit
              </Button>
              <Button variant='outlined' onClick={() => setIsEdit(!isEdit)}>
                Cancel
              </Button>
            </div>
          )}
        </div>
      </form>
    </>
  );
}
