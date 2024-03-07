import React from 'react';

export default function ChatInput({ message, setMessage, sendMessage }) {
  return (
    <form className=''>
      <input
        type='text'
        className=''
        placeholder='Type a message...'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
      />
      <button className='' onClick={(e) => sendMessage(e)}>
        Send
      </button>
    </form>
  );
}
