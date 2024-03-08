import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import * as postApi from '../../../api/post-api';
import usePostForm from '../../post/hook/usePostForm';
import Button from '../../../components/Button';

export default function Return() {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState('');
  const [postId, setPostId] = useState(null);
  const [paymentId, setPaymentId] = useState('');
  const navigate = useNavigate();

  const getStatus = async () => {
    try {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const sessionId = urlParams.get('session_id');
      const postId = +urlParams.get('postId');
      const days = +urlParams.get('days');
      const amount = +urlParams.get('amount');
      const response = await postApi.getStatus(sessionId, {
        postId,
        days,
        amount,
      });
      setStatus(response.data.status);
      setCustomerEmail(response.data.customer_email);
      // setPaymentId(response.data.paymentId);
      setPostId(postId);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getStatus();
  }, []);

  if (status === 'open') {
    return <Navigate to='/checkout' />;
  }

  if (status === 'complete') {
    // setTimeout(() => {
    //   navigate('/');
    // }, 3000);

    return (
      <section
        id='success'
        className='min-h-screen flex justify-center items-center'
      >
        <div className='flex flex-col justify-center text-center'>
          <p>
            Thank you for choosing to list your property with us!. A
            confirmation email will be sent to {customerEmail}. If you have any
            further inquiries, please feel free to contact us at{' '}
            <a
              href='mailto:cc16.condrent.am@gmail.com'
              className='text-blue-500'
            >
              cc16.condrent.am@gmail.com
            </a>
            .
          </p>
          <div className='flex justify-center gap-2 items-center text-center'>
            Your post has been successfully created,
            <div className='py-2'>
              <Button
                bg='blue'
                color='white'
                onClick={() => navigate(`/post/${postId}`)}
              >
                Click
              </Button>
            </div>
            to view your post
          </div>
        </div>
      </section>
    );
  }

  return null;
}
