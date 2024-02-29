import React from 'react';

export default function MenuList({ menu }) {
  return (
    <div>
      <div>
        <h1 className='text-xl pb-3'>About Us</h1>
      </div>
      <div className='w-40'>
        {menu.map((el) => (
          <div key={el.id}>
            <p
              onClick={() => navigate(`${el.to}`)}
              className='text-gray-500 cursor-pointer hover:text-red-600'
            >
              {el.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
