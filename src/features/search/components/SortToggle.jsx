import React from 'react';

export default function SortToggle({ children, onClick, isAscending = null }) {
  return (
    <button
      onClick={onClick}
      className={`${isAscending === null ? 'bg-white' : isAscending ? 'bg-green-200' : 'bg-red-200'} py-2 px-4 rounded`}
    >
      {children}
    </button>
  );
}
