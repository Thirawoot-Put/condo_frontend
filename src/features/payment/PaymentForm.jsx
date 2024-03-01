import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PaymentForm() {
  const navigate = useNavigate()
  return (
    <div>PaymentForm
      <button className='btn' onClick={()=>navigate("/checkout")}>Checkout !</button>
    </div>
  )
}
