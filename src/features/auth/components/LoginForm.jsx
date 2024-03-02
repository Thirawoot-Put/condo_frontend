import { useState } from 'react';
import { toast } from 'react-toastify';
import Input from '../../../components/Input';
import validateLogin from '../validator/validate-login';
import useAuth from '../../auth/hook/useAuth';
import Button from '../../../components/Button';
import { Link } from 'react-router-dom';

function LoginForm() {
  const { login } = useAuth();

  const [input, setInput] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError({});
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const validateError = validateLogin(input);
      if (validateError) {
        setError(validateError);
      }
      if (!validateError) {
        await login(input);
        toast.success('Login success');
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data.message);
    }
  };

  return (
    <>
      <div className='w-[55vh] h-[60vh] m-auto flex flex-col justify-around items-center px-6 border border-gray-100 rounded-lg shadow-lg'>
        <h1 className='font-semibold text-3xl'>Welcome to Condrent</h1>
        <form
          className='w-full h-3/5 flex flex-col gap-4 justify-around'
          onSubmit={handleSubmit}
        >
          <div>
            <Input
              label='Username'
              type='text'
              placeholder='JohnD'
              onChange={handleChange}
              id='username'
              name='username'
              value={input.username}
              errorMsg={error?.username}
            />
          </div>

          <div>
            <Input
              label='Password'
              type='password'
              placeholder='password'
              onChange={handleChange}
              id='password'
              name='password'
              value={input.password}
              errorMsg={error?.password}
            />
          </div>

          <Button
            bg='blue'
            color='white'
            type='submit'
            className='border p-4 rounded-2xl'
          >
            Login
          </Button>
          <p className='text-center'>Or</p>
          <div className='flex justify-around'>
            <Link
              to={'/register'}
              className='text-center flex-1 border-r hover:underline border-r-gray-400'
            >
              Register as user
            </Link>
            <Link
              to={'/register/agent'}
              className='text-center flex-1 border-l hover:underline border-l-gray-400'
            >
              Register as agent
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
