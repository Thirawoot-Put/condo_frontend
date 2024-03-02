import { useState } from 'react';
import { toast } from 'react-toastify';
import Input from '../../../components/Input';
import validateLogin from '../validator/validate-login';
import useAuth from '../../auth/hook/useAuth';

function LoginForm() {
  const { login, authUser } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState({});

  const input = { username, password };

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
      //   console.log(authUser);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data.message);
    }
  };

  return (
    <>
      <div className='w-[40vh] h-[60vh] m-auto flex flex-col justify-around items-center'>
        <h1 className='text-5xl'>Login</h1>
        <form
          className='w-full h-3/5 flex flex-col justify-around'
          onSubmit={handleSubmit}
        >
          <div>
            <Input
              label='Username'
              type='text'
              placeholder='Input Username'
              onChange={(e) => {
                setUsername(e.target.value);
                setError({});
              }}
              id='username'
              name='username'
              value={username}
              errorMsg={error?.username}
            />
          </div>

          <div>
            <Input
              label='Password'
              type='password'
              placeholder='Input Password'
              onChange={(e) => {
                setPassword(e.target.value);
                setError({});
              }}
              id='password'
              name='password'
              value={password}
              errorMsg={error?.password}
            />
          </div>

          <button type='submit' className='border p-4 rounded-2xl'>
            Login
          </button>
          <a href='' className='text-center'>
            Or Register
          </a>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
