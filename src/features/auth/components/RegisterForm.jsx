import { useState } from 'react';
import Input from '../../../components/Input';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import { toast } from 'react-toastify';

function RegisterForm({
  register,
  validator,
  nameButton = 'Register for user',
}) {
  const [input, setInput] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    firstName: '',
    lastName: '',
    mobile: '',
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const validateError = validator(input);
      if (validateError) {
        return setError(validateError);
      }
      if (input.mobile === '') {
        const newState = { ...input };
        delete newState.mobile;
        setInput(newState);
      }
      if (!validateError) {
        await register(input);
        toast.success('Register success');
        setInput({});
      }
    } catch (error) {
      console.log(error);
      if (error.response?.data.message === 'USERNAME_IN_USE') {
        toast.error('Username is already in use');
        return;
      }
      if (error.response?.data.message === 'MOBILE_IN_USE')
        toast.error('Mobile number is already in use');
      if (error.response?.data.message === 'EMAIL_IN_USE')
        toast.error('Email address is already in use');
    }
  };

  return (
    <div className='py-6'>
      <div className='m-auto flex flex-col gap-4 justify-around px-6 py-6 items-center w-[65vh] border border-gray-100 rounded-lg shadow-lg'>
        <h1 className='font-semibold text-3xl'>Welcome to Condrent</h1>
        <form
          className='w-full h-5/6 flex flex-col gap-4 justify-around'
          onSubmit={handleSubmit}
        >
          <div>
            <Input
              label='Username *'
              type='text'
              placeholder='example: JohnD'
              onChange={handleChange}
              id='username'
              name='username'
              value={input.username}
              errorMsg={error.username}
            />
          </div>

          <div>
            <Input
              label='Password *'
              type='password'
              placeholder='password'
              onChange={handleChange}
              id='password'
              name='password'
              value={input.password}
              errorMsg={error.password}
            />
          </div>

          <div>
            <Input
              label='Confirm password *'
              type='password'
              placeholder='confirm password'
              onChange={handleChange}
              id='confirmPassword'
              name='confirmPassword'
              value={input.confirmPassword}
              errorMsg={error.confirmPassword}
            />
          </div>

          <div>
            <Input
              label='E-mail *'
              type='email'
              placeholder='example: john@gmail.com'
              onChange={handleChange}
              id='email'
              name='email'
              value={input.email}
              errorMsg={error.email}
            />
          </div>

          <div className='flex gap-2'>
            <div>
              <Input
                label='First name *'
                type='text'
                placeholder='example: John'
                onChange={handleChange}
                id='firstName'
                name='firstName'
                value={input.firstName}
                errorMsg={error.firstName}
              />
            </div>

            <div>
              <Input
                label='Last name *'
                type='text'
                placeholder='example: Doe'
                onChange={handleChange}
                id='lastName'
                name='lastName'
                value={input.lastName}
                errorMsg={error.lastName}
              />
            </div>
          </div>

          <div>
            <Input
              label={nameButton == 'Register for user' ? 'Mobile' : 'Mobile *'}
              type='text'
              placeholder='example: 0892346789 (10 digits)'
              onChange={handleChange}
              id='mobile'
              name='mobile'
              value={input.mobile}
              errorMsg={error.mobile}
            />
          </div>

          <p className='text-sm text-blue-600'>* required</p>
          <Button bg='blue' color='white' type='submit'>
            {nameButton}
          </Button>
          <Link to={'/login'} className='text-center'>
            Or login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
