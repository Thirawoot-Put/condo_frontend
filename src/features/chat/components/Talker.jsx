import React from 'react';
import useChat from '../hook/useChat';
import { formatISODateTime } from '../../../ultils/format-ISO-datetime';

function Talker({ talkerObj, message, createdAt }) {
  const { userId, fetchChatByUserIdAndTalkerId } = useChat();
  const {
    talkerName: { firstName, lastName },
    talkerId,
  } = talkerObj;

  return (
    <div
      onClick={() => fetchChatByUserIdAndTalkerId(userId, talkerId)}
      className='flex flex-col bg-slate-200 hover:bg-primary rounded-lg px-4 py-2 -space-y-1'
    >
      <h2 className='font-bold'>
        {firstName} {lastName}
      </h2>
      <div className='flex gap-2'>
        <h6 className='font-light'>{message}</h6>
        <small className='self-end text-[0.5rem] text-gray-400'>
          {formatISODateTime(createdAt)}
        </small>
      </div>
    </div>
  );
}

export default Talker;
