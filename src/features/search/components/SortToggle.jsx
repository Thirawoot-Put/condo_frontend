import React from 'react';
import { FaArrowDownShortWide } from 'react-icons/fa6';
import { FaArrowUpWideShort } from 'react-icons/fa6';
import { FaAlignJustify } from 'react-icons/fa6';

export default function SortToggle({ children, onClick, isAscending = null }) {
  return (
    <button
      onClick={onClick}
      className={`${isAscending === null ? 'bg-white' : isAscending ? 'bg-blue-100' : 'bg-blue-200'} flex gap-2 items-center py-2 px-4 rounded`}
    >
      <div>{children}</div>
      {isAscending === null ? (
        <FaAlignJustify />
      ) : isAscending ? (
        <FaArrowDownShortWide />
      ) : (
        <FaArrowUpWideShort />
      )}
    </button>
  );
}
