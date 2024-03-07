import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import * as postApi from '../../../api/post-api';
import usePostForm from '../../post/hook/usePostForm';

export default function Return() {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState('');
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
      setPaymentId(response.data.paymentId);
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
      <section id='success' className='min-h-[500px]'>
        <p>
          We appreciate your business! A confirmation email will be sent to{' '}
          {customerEmail}. If you have any questions, please email{' '}
          <a href='mailto:orders@example.com'>orders@example.com</a>.
        </p>
      </section>
    );
  }

  return null;
}
