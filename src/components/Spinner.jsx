import React from 'react';

function Spinner() {
  return (
    // <div className='loading loading-spinner loading-lg h-full text-blue-500 '></div>

    <>
      <div className='fixed inset-0 bg-white z-50'></div>
      <div className='fixed inset-0 z-50'>
        <div className='flex items-center justify-center min-h-full'>
          <div className='loading loading-spinner loading-lg h-full text-blue-500 '></div>
        </div>
      </div>
    </>
  );
}

export default Spinner;
