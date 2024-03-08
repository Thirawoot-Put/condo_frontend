import { Button, Rating, TextField } from '@mui/material';
import React, { useState } from 'react';
import useReview from '../context/ReviewContext';

export default function Review() {
  const [value, setValue] = useState(0);
  const { handleChange, handleSubmit, error } = useReview();
  return (
    <form
      onSubmit={handleSubmit}
      className='min-h-[200px] shadow-md rounded-md w-[40%] p-4 flex flex-col gap-4'
    >
      <div>
        <p>เขียนรีวิว</p>
      </div>
      <div>
        <Rating
          name='rating'
          size='large'
          value={value}
          onChange={(event, newValue) => {
            handleChange(event);
            setValue(newValue);
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
  );
}
