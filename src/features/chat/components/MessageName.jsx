import React from 'react';
import useChat from '../hook/useChat';
import useAuth from '../../auth/hook/useAuth';

export default function MessageName({ messages }) {
  const { authUser } = useAuth();
  const chatObj = messages?.[0];
  const TalkerName =
    chatObj?.senderId === authUser?.id
      ? `${chatObj?.receiver?.firstName || ''} ${chatObj?.receiver?.lastName || ''}`
      : `${chatObj?.sender?.firstName || ''} ${chatObj?.sender?.lastName || ''}`;

  return (
    <div className='h-[60px] px-4 font-bold flex items-center'>
      {TalkerName}
    </div>
  );
}
