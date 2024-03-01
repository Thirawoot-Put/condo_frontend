import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CheckoutForm from './creditcard/CheckoutForm';

import './creditcard/credit.css';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  'pk_test_51OpOhqBQQfPz68szyIdVBcVTRyTkjWsnMKVFiwn6dnew53vtjxAIzDNL2QvI049BYXYIIG4vc2CAOZ7TxZXZuxhJ003NlW6rkh'
);

export default function Payment() {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch('http://localhost:8080/transaction/payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: [{ id: 'xl-tshirt' }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const payment = async() => {
    fetch('http://localhost:8080/transaction/payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: [{ id: 'xl-tshirt' }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className=''>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm payment={payment}/>
        </Elements>
      )}  
      
    </div>
  );
}
