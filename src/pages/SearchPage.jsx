import React from 'react';
import MainContainer from '../features/search/components/MainContainer';
import SearchContextProvider from '../features/search/context/SearchContext';

function SearchPage() {
  return (
    <SearchContextProvider>
      <MainContainer />
    </SearchContextProvider>
  );
}

export default SearchPage;
