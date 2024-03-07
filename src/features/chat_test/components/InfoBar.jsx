import React from 'react';

export default function InfoBar({ room }) {
  return (
    <div className=''>
      <div className=''>
        <img className='' src='' alt='online_image' />
        <h3>{room}</h3>
      </div>
      <div className=''>
        <a href='/join'>
          <img src='' alt='close_image' />
        </a>
      </div>
    </div>
  );
}
