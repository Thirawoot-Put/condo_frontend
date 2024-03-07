import React from 'react';
import RegisterForm from '../features/auth/components/RegisterForm';
import useAuth from '../features/auth/hook/useAuth';
import validateAgentRegister from '../features/auth/validator/validate-agent-register';

function RegisterAgentPage() {
  const { registerAgent } = useAuth();
  return (
    <>
      <RegisterForm
        nameButton='Register for agent'
        register={registerAgent}
        validator={validateAgentRegister}
      />
    </>
  );
}

export default RegisterAgentPage;
