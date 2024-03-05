import { EmbeddedCheckout } from '@stripe/react-stripe-js';
import { EmbeddedCheckoutProvider } from '@stripe/react-stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_API);

export default function CheckoutForm() {
  const location = useLocation();
  const [clientSecret, setClientSecret] = useState('');
  const { selectedPayment, days, total } = location.state;

  useEffect(() => {
    // Create a Checkout Session as soon as the page loads
    fetch('http://localhost:8080/transaction/create-checkout-session', {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
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
      <div>
        <h2>Checkout Page</h2>
        <p>Selected Payment: {selectedPayment}</p>
        <p>Days: {days}</p>
        <p>Total: {total}</p>
        {/* Additional content of the checkout page */}
      </div>
    </div>
  );
}
