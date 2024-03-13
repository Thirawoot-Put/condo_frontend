import React from 'react';
import { useRef } from 'react';
import useChat from '../hook/useChat';
import { FaImage } from 'react-icons/fa6';

export default function MessageInput({ value, onSubmit, onChange }) {
  const { handleImageSend } = useChat();
  const imageFileEl = useRef(null);

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
      <button
        type='button'
        className='bg-white px-6 rounded-lg font-semibold'
        onClick={() => {
          imageFileEl.current.click();
          imageFileEl.current.value = '';
        }}
      >
        <FaImage />
      </button>
      <input
        type='file'
        className='hidden'
        ref={imageFileEl}
        onChange={handleImageSend}
      />
    </form>
  );
}
