import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../auth/hook/useAuth';

export default function ProtechAuth({ children }) {
  const { authUser } = useAuth();

  return authUser ? <Navigate to={'/'} /> : children;
}
