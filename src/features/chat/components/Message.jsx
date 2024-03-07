import React from 'react';
import useChat from '../hook/useChat';
import { formatISODateTime } from '../../../ultils/format-ISO-datetime';
import useAuth from '../../auth/hook/useAuth';

export default function Message({ messageObj }) {
  const { authUser } = useAuth();
  const isSender = messageObj.sender.id === authUser.id;
  const extendedClasses = isSender ? `self-end` : `self-start`;

  return (
    <div className='flex flex-col'>
      <h2 className={`${extendedClasses}`}>
        {messageObj.sender.firstName} {messageObj.sender.lastName}
      </h2>
      {isSender ? (
        <div className='flex gap-2 justify-end'>
          <small className='self-end text-[0.5rem] text-gray-400'>
            {formatISODateTime(messageObj.createdAt)}
          </small>
          <div className={`bg-primary py-1 px-4 rounded-lg `}>
            {messageObj.message}
          </div>
        </div>
      ) : (
        <div className='flex gap-2'>
          <div className={`bg-primary py-1 px-4 rounded-lg`}>
            {messageObj.message}
          </div>
          <small className='self-end text-[0.5rem] text-gray-400'>
            {formatISODateTime(messageObj.createdAt)}
          </small>
        </div>
      )}
    </div>
  );
}
