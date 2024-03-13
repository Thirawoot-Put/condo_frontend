import React from 'react';
import useChat from '../hook/useChat';
import { formatISODateTime } from '../../../ultils/format-ISO-datetime';
import useAuth from '../../auth/hook/useAuth';

function Talker({ talkerObj, message, createdAt }) {
  const { fetchChatByUserIdAndTalkerId, handleTalkerChange, talker } =
    useChat();
  const { authUser } = useAuth();
  const {
    talkerName: { firstName, lastName },
    talkerId,
  } = talkerObj;
  const isTalkingTo = talkerId === talker.talkerId;
  const extendedClasses = isTalkingTo ? `bg-primary` : `bg-slate-200`;

  return (
    <div
      onClick={() => {
        fetchChatByUserIdAndTalkerId(authUser?.id, talkerId);
        handleTalkerChange(talkerObj);
      }}
      className={`${extendedClasses} hover:bg-primary flex flex-col rounded-lg px-4 py-2 -space-y-1`}
    >
      <h2 className='font-bold'>
        {firstName} {lastName}
      </h2>
    </div>
  );
}

export default Talker;
