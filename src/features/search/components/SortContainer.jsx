import { Button } from '@mui/material';
import React from 'react';
import useSearch from '../hook/UseSearch';
import SortToggle from './SortToggle';

export default function SortContainer() {
  const { handlePriceSort, isPriceAscending } = useSearch();
  return (
    <>
      <SortToggle onClick={handlePriceSort} isAscending={isPriceAscending}>
        Price
      </SortToggle>
      <SortToggle onClick={handlePriceSort} isAscending={isPriceAscending}>
        Viewer
      </SortToggle>
    </>
  );
}