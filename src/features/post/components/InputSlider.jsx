import { useState } from 'react';
import TotalContainer from './TotalContainer';

export default function InputSlider({ days, setDays, total, setTotal }) {
  //   const [days, setDays] = useState(1);

  const handleSliderChange = (event) => {
    setDays(parseInt(event.target.value));
    setTotal(parseInt(event.target.value) * 5);
  };

  const handleLabelClick = (index) => {
    setDays(index);
    setTotal(index);
  };
  return (
    <div className='w-full mt-8 flex flex-col gap-3'>
      <input
        type='range'
        min='1'
        max='14'
        value={days}
        className='w-full'
        id='myRange'
        onChange={handleSliderChange}
      />
      <ul className='flex justify-between w-full'>
        {[...Array(14)].map((_, index) => (
          <li
            key={index + 1}
            className={`cursor-pointer w-3 ${index + 1 === days ? ' text-blue-500' : 'text-gray-400'}`}
            data-index={index + 1}
            onClick={() => handleLabelClick(index + 1)}
          >
            {index + 1}
          </li>
        ))}
      </ul>
      <div className='flex justify-center gap-10 mt-5'>
        <TotalContainer>
          Total day:{' '}
          <span className='font-bold text-xl text-blue-500'>{days}</span>{' '}
          {days === 1 ? `day` : `days`}
        </TotalContainer>
        <TotalContainer>
          Total:{' '}
          <span className='font-bold text-xl text-blue-500'>{total}</span> Baht
        </TotalContainer>
      </div>
    </div>
  );
}
