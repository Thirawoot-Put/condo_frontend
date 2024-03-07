import React from 'react';
import useChat from '../hook/useChat';
import useAuth from '../../auth/hook/useAuth';

export default function MessageName({ messages }) {
  const { authUser } = useAuth();
  console.log('messages', messages);
  const chatObj = messages?.[0];
  const TalkerName =
    chatObj?.senderId === authUser?.id
      ? `${chatObj?.receiver.firstName || ''} ${chatObj?.receiver.lastName || ''}`
      : `${chatObj?.sender.firstName || ''} ${chatObj?.sender.lastName || ''}`;

  return (
    <div className='h-9 font-bold flex items-center'>
      <h1>{TalkerName}</h1>
    </div>
  );
}
