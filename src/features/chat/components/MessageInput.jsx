import React from 'react';

export default function MessageInput() {
  return (
    <div className='h-[6vh] bg-primary flex gap-2 py-2 px-2'>
      <input placeholder='Aa' className='flex-1 rounded-lg px-6 outline-none' />
      <button type='button' className='bg-white px-6 rounded-lg font-semibold'>
        send
      </button>
    </div>
  );
}
