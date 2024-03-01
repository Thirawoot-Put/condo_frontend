import React from 'react';

const Input = ({ type, placeholder, value, name, id, onChange, label }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        className='w-full border-0 border-b-2 border-black py-1.5 mt-1'
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        id={id}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
