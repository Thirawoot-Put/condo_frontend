import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ width = 'w-[36rem]', onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className={`relative ${width}`}>
      <input
        onChange={onChange}
        type='text'
        className={`border border-gray-400 focus:outline-gray-400 rounded-lg ${width} px-4 py-1`}
      />
      <button
        role='submit'
        className='absolute top-1 right-1 bg-blue-500 hover:bg-blue-600 rounded-lg px-1'
      >
        <SearchIcon className='text-white' />
      </button>
    </form>
  );
}

export default SearchBar;
