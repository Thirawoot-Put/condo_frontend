import Input from '../components/Input';
import { Button } from '@mui/material';
import React from 'react';
import useAuth from '../features/auth/hook/useAuth';
import { useState } from 'react';
import { useEffect } from 'react';
import validateEdit from '../features/auth/validator/validate-edit';
import { useNavigate } from 'react-router-dom';

import * as userApi from '../api/user-api';
import { toast } from 'react-toastify';

export default function EditProfile() {
  const { authUser } = useAuth();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: '',
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
      const validateError = validateEdit(input);
      if (authUser?.role == 'AGENT') {
        if (input.mobile.trim() == '')
          setError({ mobile: 'Mobile is required' });
      }
      if (validateError) {
        return setError((prev) => ({ ...prev, ...validateError }));
      }

      if (!validateError) {
        await userApi.updateUer(input);
        toast.success('edit success');
        navigate(`/user/profile/${authUser.id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fnTest = () => {
    setInput({
      username: authUser?.username,
      email: authUser?.email,
      firstName: authUser?.firstName,
      lastName: authUser?.lastName,
      mobile: authUser?.mobile,
    });
  };
  useEffect(() => {
    fnTest();
  }, [authUser]);

  return (
    <div className='py-6'>
      <div className='m-auto flex flex-col gap-4 justify-around px-6 py-6 items-center w-[65vh] border border-gray-100 rounded-lg shadow-lg'>
        <h1 className='font-semibold text-3xl'>Edit profile</h1>
        {authUser && (
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
                label='Mobile *'
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
            <div className='flex gap-4 mx-auto'>
              <Button type='submit' variant='contained'>
                Submit
              </Button>
              <Button
                type='button'
                variant='outlined'
                onClick={() => navigate(`/user/profile/${authUser.id}`)}
              >
                Cancel
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
