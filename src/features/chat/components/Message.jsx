import React from 'react';

export default function Message({ isSender = false }) {
  const extendedClasses = isSender ? `self-end` : `self-start`;

  return (
    <div className='flex flex-col'>
      <h2 className={`${extendedClasses}`}>name</h2>
      <div className={`bg-primary py-1 px-4 rounded-lg ${extendedClasses}`}>
        message
      </div>
    </div>
  );
}
