import React from 'react';

export default function MessageInput({ value, onSubmit, onChange }) {
  return (
    <form
      onSubmit={onSubmit}
      className='h-[6vh] bg-primary flex gap-2 py-2 px-2'
    >
      <input
        placeholder='Aa'
        className='flex-1 rounded-lg px-6 outline-none'
        value={value}
        onChange={onChange}
      />
      <button type='submit' className='bg-white px-6 rounded-lg font-semibold'>
        send
      </button>
    </form>
  );
}
