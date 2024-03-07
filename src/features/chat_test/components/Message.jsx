import React from 'react';

import ReactEmoji from 'react-emoji';

export default function Message({ message: { user, text }, name }) {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className=' justify-end'>
      <p className=' pr-10'>{trimmedName}</p>
      <div className='bg-blue-400'>
        <p className=' text-white'>{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className='justify-start'>
      <div className=' bg-slate-200'>
        <p className=''>{ReactEmoji.emojify(text)}</p>
      </div>
      <p className=''>{user}</p>
    </div>
  );
}
