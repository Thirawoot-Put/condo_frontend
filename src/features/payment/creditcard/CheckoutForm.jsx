import { EmbeddedCheckout } from '@stripe/react-stripe-js';
import { EmbeddedCheckoutProvider } from '@stripe/react-stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

import * as postApi from '../../../api/post-api';
import usePostForm from '../../post/hook/usePostForm';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_API);

export default function CheckoutForm() {
  const location = useLocation();
  const state = location.state;
  const [clientSecret, setClientSecret] = useState('');
  const { days, amount, postId } = usePostForm();
  // console.log(state);

  const payment = async () => {
    try {
      const response = await postApi.payByCreditCard({
        days,
        amount,
        postId: postId || state.postId,
      });
      console.log(response.data);
      setClientSecret(response.data.clientSecret);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    payment();
  }, []);

  return (
    <div id='checkout' className='min-h-[500px]'>
      {clientSecret && (
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{ clientSecret }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
    </div>
  );
}
