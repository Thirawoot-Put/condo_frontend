import { useRef, useState, useEffect } from 'react';
export default function PaymentContainer({
  children,
  title,
  onClick,
  isSelected,
}) {
  return (
    <div
      className={`p-5 rounded-md shadow-lg flex flex-col gap-3 ${isSelected ? 'border border-blue-500 ring ring-blue-200' : ''}`}
      role='button'
      tabIndex={0}
      onClick={onClick}
      //   onFocus={handleFocus}
      //   onBlur={handleBlur}
    >
      <div className='w-40 h-20 flex flex-col justify-center'>{children}</div>
      <hr />
      <div className='text-center'>{title}</div>
    </div>
  );
}
