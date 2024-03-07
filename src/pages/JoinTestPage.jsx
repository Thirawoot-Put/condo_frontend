import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function JoinTestPage() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className=''>
      <div className=''>
        <h1 className=''>Join</h1>
        <div>
          <input
            placeholder='name'
            className=''
            type='text'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder='room'
            className='mt-20'
            type='text'
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        {/* better to send name and room as props */}
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className='button mt-20' type='submit'>
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
}
