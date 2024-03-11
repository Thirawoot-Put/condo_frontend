import { nanoid } from 'nanoid';
import React from 'react';
import { Link } from 'react-router-dom';

const allPages = [
  { name: 'All room to let', to: '/' },
  { name: 'Map', to: '/' },
  { name: 'Mobile design', to: '/' },
  { name: 'UX/UI design', to: '/' },
  { name: 'Branding design', to: '/' },
];

function HomeButtonGroup() {
  return (
    <div className='flex justify-center items-center'>
      <Link className='border-r border-gray-400'>All available rooms</Link>
    </div>
  );
}

export default HomeButtonGroup;
