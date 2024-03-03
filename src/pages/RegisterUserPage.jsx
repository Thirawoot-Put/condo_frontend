import React from 'react';
import RegisterForm from '../features/auth/components/RegisterForm';
import useAuth from '../features/auth/hook/useAuth';
import validateUserRegister from '../features/auth/validator/validate-user-register';

function RegisterUserPage() {
  const { registerUser } = useAuth();

  return (
    <>
      <RegisterForm register={registerUser} validator={validateUserRegister} />
    </>
  );
}

export default RegisterUserPage;
