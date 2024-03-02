import React from 'react';

function Talker() {
  return (
    <div className='flex flex-col bg-slate-200 hover:bg-primary rounded-lg px-4 py-2 -space-y-1'>
      <h2 className='font-bold'>Name</h2>
      <h6 className='font-light'>Last message</h6>
    </div>
  );
}

export default Talker;
