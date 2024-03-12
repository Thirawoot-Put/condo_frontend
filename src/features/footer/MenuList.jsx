import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MenuList({ menu, title }) {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h1 className='text-xl pb-3 font-semibold'>{title}</h1>
      </div>
      <div className='flex flex-col'>
        {menu.map((el) => (
          <div key={el.id}>
            <div
              onClick={() => navigate(`${el.to}`)}
              className='text-gray-500 cursor-pointer hover:text-red-600'
            >
              {el.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
