import React from 'react';

const Input = ({
  type,
  placeholder,
  value,
  name,
  id,
  onChange,
  label,
  errorMsg,
  disabled = false,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        className='w-full border-0 border-b-2 border-gray-400 py-1.5 mt-1 focus:outline-none focus:border-b-black'
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        id={id}
        onChange={onChange}
        disabled={disabled}
      />
      {errorMsg && <small className='text-red-500'>{errorMsg}</small>}
    </div>
  );
};

export default Input;
