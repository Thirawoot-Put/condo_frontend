import React from 'react';
import useChat from '../hook/useChat';

export default function MessageName() {
  const { userId, currentChat } = useChat();
  console.log('currentChat', currentChat);
  const chatObj = currentChat?.[0];
  const TalkerName =
    chatObj?.senderId === +userId
      ? `${chatObj?.receiver.firstName || ''} ${chatObj?.receiver.lastName || ''}`
      : `${chatObj?.sender.firstName || ''} ${chatObj?.sender.lastName || ''}`;

  return (
    <div className='h-9 font-bold flex items-center'>
      <h1>{TalkerName}</h1>
    </div>
  );
}
