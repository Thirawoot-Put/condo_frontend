import React from 'react';
import useChat from '../hook/useChat';
import { formatISODateTime } from '../../../ultils/format-ISO-datetime';
import useAuth from '../../auth/hook/useAuth';

export default function Message({ messageObj }) {
  const { authUser } = useAuth();
  const isSender = messageObj.sender.id === authUser.id;
  const extendedClasses = isSender ? `self-end` : `self-start`;

  if (!messageObj.message || messageObj.message.trim() === '') {
    return;
  }

  function isCloudinaryImageUrl(url) {
    return url.includes('cloudinary.com') && url.includes('/image/upload/');
  }

  function isBlobImageUrl(url) {
    try {
      const parsedUrl = new URL(url);
      return parsedUrl.protocol === 'blob:';
    } catch (error) {
      return false;
    }
  }

  return (
    <div className='flex flex-col pb-2'>
      <h2 className={`${extendedClasses} text-sm font-semibold`}>
        {messageObj.sender.firstName} {messageObj.sender.lastName}
      </h2>
      {isSender ? (
        <div className='flex gap-2 justify-end'>
          <small className='self-end text-[0.5rem] text-gray-400'>
            {formatISODateTime(messageObj.createdAt)}
          </small>
          {isCloudinaryImageUrl(messageObj.message) ||
          isBlobImageUrl(messageObj.message) ? (
            <img
              className='bg-primary py-2 px-2 rounded-lg max-w-[80%] max-h-[40vh]'
              src={messageObj.message}
              alt='image'
            />
          ) : (
            <div className={`bg-primary py-1 px-4 rounded-lg max-w-[80%]`}>
              {messageObj.message}
            </div>
          )}
        </div>
      ) : (
        <div className='flex gap-2'>
          {isCloudinaryImageUrl(messageObj.message) ||
          isBlobImageUrl(messageObj.message) ? (
            <img
              className='bg-primary py-2 px-2 rounded-lg max-w-[80%] max-h-[40vh]'
              src={messageObj.message}
              alt='image'
            />
          ) : (
            <div className={`bg-primary py-1 px-4 rounded-lg max-w-[80%]`}>
              {messageObj.message}
            </div>
          )}
          <small className='self-end text-[0.5rem] text-gray-400 '>
            {formatISODateTime(messageObj.createdAt)}
          </small>
        </div>
      )}
    </div>
  );
}
